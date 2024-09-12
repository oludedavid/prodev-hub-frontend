"use client";

import React from "react";
import Logo from "../logo/logo";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import NavigationMenu from "./navigation-menu";
import { LoggedUserProps } from "../layouts/custom-layout";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, ShoppingCart } from "lucide-react";
import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import LogoutButton from "../authComponent/logout";
import useCart from "@/hooks/use-cart-store";

type Route = {
  label: string;
  href: string;
  active: boolean;
};

const NavigationBar = ({
  loggedUser,
}: {
  loggedUser: LoggedUserProps;
  isCurrentPathName: (path: string) => boolean;
}) => {

  const {courses} = useCart();
  const pathName = usePathname();
  const router = useRouter();

  const ROUTES = [
    {
      label: "About Us",
      href: "/about",
      active: pathName === "/about",
    },
    {
      label: "Learn with us",
      href: "/learn-with-us/courses",
      active: pathName === "/learn-with-us/courses",
    },
    {
      label: "Expert Services",
      href: "/expert-services",
      active: pathName === "/expert-services",
    },
    {
      label: "Contact",
      href: "/contact-us",
      active: pathName === "/contact-us",
    },
  ];

  const name = loggedUser?.fullName;
  const splitName = name?.split(" ");
  const initials = splitName && splitName[0][0] + splitName[1][0];

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md backdrop-filter z-30 backdrop-blur-sm bg-[#020517] p-4">
      <div className="flex max-w-7xl justify-between items-center mx-auto p-2">
        <Link href="/">
          <Logo className="text-base md:text-lg font-extrabold" />
        </Link>

        {/* desktop navigation */}
        <div className="hidden lg:flex items-center gap-14">
          <ul className="space-x-8">
            {ROUTES.map((route: Route, index: number) => (
              <Link
                href={route.href}
                key={index}
                className={cn(
                  `
              text-xs
              md:text-sm
              lg:text-base
              hover:text-[#4958bb]
              capitalize
              `,
                  route.active ? "text-[#4958bb]" : "text-white"
                )}
              >
                {route.label}
              </Link>
            ))}
          </ul>

          {/* login and signup buttons */}
          {loggedUser ? (
            <>
              <Link
                href={`${
                  loggedUser.role === "student" ? "/students" : "/tutors"
                }`}
                className={cn(
                  `
              text-xs
              md:text-sm
              lg:text-base
              hover:text-[#4958bb]
              capitalize
              `,
                  pathName ===
                    (loggedUser.role === "student" ? "/students" : "/tutors")
                    ? "text-[#4958bb]"
                    : "text-white"
                )}
              >
                Dashboard
              </Link>
              <LogoutButton />
              <div className="flex flex-row justify-center items-center w-[40px] h-[40px] rounded-full bg-[#DAD7E2]">
                <p className="text-[#663FD6] font-bold text-2xl text-center">
                  {initials}
                </p>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              {/* add shopping cart */}
              <Button
        onClick={() => router.push("/basket")}
        className="flex items-center hover:bg-red-400 rounded-full bg-black px-4 py-2"
      >
        <ShoppingCart size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {courses.length}
        </span>
      </Button>
              {/* <ShoppingCart  onClick={()=> router.push("/basket")} /> */}
              <Link href="/login">
                <Button className="px-6" variant="login">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="px-6" variant="signup">
                  Signup
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* mobile navigation */}
        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu size={32} className="text-[#4958bb]" />
            </SheetTrigger>
            <SheetContent className="bg-black border border-gray-800 py-12 px-8">
              <div className="flex flex-col items-start space-y-8">
                <ul className="flex flex-col space-y-8">
                  {ROUTES.map((route: Route, index: number) => (
                    <Link
                      href={route.href}
                      key={index}
                      className={cn(
                        `
              text-xs
              md:text-sm
              lg:text-base
              hover:text-[#4958bb]
              capitalize
              `,
                        route.active ? "text-[#4958bb]" : "text-white"
                      )}
                    >
                      {route.label}
                    </Link>
                  ))}
                </ul>
                {loggedUser ? (
                  <>
                    <Link
                      href={`${
                        loggedUser.role === "student" ? "/students" : "/tutors"
                      }`}
                      className={cn(
                        `
              text-xs
              md:text-sm
              lg:text-base
              hover:text-[#4958bb]
              capitalize
              `,
                        pathName ===
                          (loggedUser.role === "student"
                            ? "/students"
                            : "/tutors")
                          ? "text-[#4958bb]"
                          : "text-white"
                      )}
                    >
                      Dashboard
                    </Link>
                    <LogoutButton />
                    <div className="flex flex-row justify-center items-center w-[40px] h-[40px] rounded-full bg-[#DAD7E2]">
                      <p className="text-[#663FD6] font-bold text-2xl text-center">
                        {initials}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col space-y-4">
                    <Link href="/login">
                      <Button className="px-6" variant="login">
                        Login
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button className="px-6" variant="signup">
                        Signup
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
