import Link from "next/link";
import { Button } from "@/components/ui/button";
import LoginForm from "@/components/custom-component/authComponent/login";
import { Toaster } from "@/components/ui/toaster";
export default function LoginPage() {
  return (
    <div className={`sm:px-2 lg:px-[150px] md:px-[150px]`}>
      <LoginForm />
      <Toaster />
    </div>
  );
}
