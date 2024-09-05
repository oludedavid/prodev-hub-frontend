"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import CustomLayout from "@/components/custom-component/layouts/custom-layout";
import Cookies from "universal-cookie";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isCurrentPathName = (path: string) => pathname === path;
  const cookies = new Cookies();
  const user = cookies.get("USER");

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <CustomLayout loggedUser={user} isCurrentPathName={isCurrentPathName}>
          <div className={`font-extralight pt-4 md:px-36 lg:px-36 sm:px-1`}>
            {pathname !== "/" && (
              <div className="flex flex-row items-center justify-start w-1/2 pl-2  gap-2">
                <Link className="text-" href={"/"}>
                  Home
                </Link>
                <p>{`>`}</p>
                {pathname === "/about" && <p className="text-sm">About</p>}
                {pathname === "/contact-us" && (
                  <p className="text-sm">Contact us</p>
                )}
                {pathname === "/learn-with-us/courses" && (
                  <p className="text-sm">Learn with us</p>
                )}
                {pathname === "/expert-services" && (
                  <p className="text-sm">Expert Services</p>
                )}
                {pathname === "/login" && <p className="text-sm ">Login</p>}
                {pathname === "/register" && (
                  <p className="text-sm ">Register</p>
                )}
              </div>
            )}
          </div>
          {children}
        </CustomLayout>
      </body>
    </html>
  );
}
