"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import FormLayout from "../form/formLayout";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Spinner } from "../structure/spinner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const loginFormSchema = z.object({
  email: z
    .string()
    .email({
      message: "Invalid email address",
    })
    .min(10, {
      message: "Fullname must be at least 10 characters.",
    })

    .toLowerCase(),
  password: z
    .string()
    .min(8, {
      message: "Fullname must be at least 8 characters.",
    })
    .toLowerCase(),
});

export default function LoginForm() {
  const router = useRouter();
  const baseURL = `${process.env.NEXT_PUBLIC_PRODEV_HUB_BACKEND_API_URL}/login`;
  const cookie = new Cookies();

  console.log("Base URL:", baseURL);

  const [showPassword, setShowPassword] = React.useState(false);
  const [login, setLogin] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const { toast } = useToast();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    const { email, password } = values;
    setLoading(true);
    axios
      .post(baseURL, { email, password })
      .then((response) => {
        console.log("Response status:", response.status, response.statusText);
        cookie.set("TOKEN", response.data.token, { path: "/" });
        cookie.set("USER", response.data.user, { path: "/" });
        setLoading(false);
        toast({
          title: "Success",
          description: `Login successful.`,
          variant: "default",
        });
        router.push("/");
      })
      .catch((error) => {
        setError(true);
        toast({
          title: "Error",
          description:
            error.response?.statusText || `Login failed. Please try again.`,
          variant: "destructive",
        });
        setLoading(false);
      });
  }

  return (
    <FormLayout action="login">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem
                style={{
                  background: "#010415",
                  border: "0.7px rgba(166, 166, 166, 0.24)",
                  boxShadow: "0px 3.845px 13.459px 0px rgba(31, 82, 149, 0.16)",
                  borderRadius: "6px",
                }}
                className="flex items-center border border-solid text-center rounded-md px-6 py-2"
              >
                <FormLabel>
                  <Image
                    src="/images/email.png"
                    alt="email icon"
                    width={20}
                    height={20}
                  />
                </FormLabel>
                <FormControl className="border-none focus:outline-none focus:border-none">
                  <Input
                    className="focus:outline-none py-2 border-none focus:border-none focus-visible:ring-transparent rounded-md"
                    placeholder="Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem
                style={{
                  background: "#010415",
                  border: "0.7px rgba(166, 166, 166, 0.24)",
                  boxShadow: "0px 3.845px 13.459px 0px rgba(31, 82, 149, 0.16)",
                  borderRadius: "6px",
                }}
                className="flex items-center border border-solid text-center rounded-md px-6 py-2"
              >
                <FormLabel>
                  <Image
                    src="/images/fullname.png"
                    alt="user icon"
                    width={20}
                    height={20}
                  />
                </FormLabel>
                <FormControl className="border-none focus:outline-none focus:border-none">
                  <Input
                    className="focus:outline-none py-2 border-none focus:border-none focus-visible:ring-transparent rounded-md"
                    placeholder="password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            {loading ? (
              <Spinner className="text-gray-400" size="small" />
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </FormLayout>
  );
}
