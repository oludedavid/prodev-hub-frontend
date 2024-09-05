/* eslint-disable */
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function FormLayout({
  children,
  action,
}: {
  children: React.ReactNode;
  action: string;
}) {
  return (
    <div>
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto gap-4 lg:gap-14 items-center p-2">
        <div className="flex flex-col justify-start items-center gap-4 mx-auto p-4">
          <h2>
            {action === "register" ? "Already Signed Up?" : "Not Signed Up?"}
          </h2>
          <p className="items-start text-center max-w-sm font-normal text-sm md:text-base text-[#E3E3E3]">
            Lorem ipsum dolor sit amet consectetur. Vestibulum interdum sed ut
            leo. Maecenas auctor vestibulum urna habitant laoreet. Morbi sem
            pretium pulvinar fringilla malesuada
          </p>
          <div>
            <Link href={`${action === "register" ? "/login" : "/register"}`}>
              <Button
                className="text-base px-6 lg:px-12 font-medium"
                style={{
                  background: "#DAD7E2",
                  borderRadius: "32px",
                  border: "1px rgba(230, 230, 230, 0.36)",
                  color: "#1F1B2A",
                }}
              >
                {action === "register" ? "Login" : "Register"}
              </Button>
            </Link>
          </div>
          <div>
            <Image
              src="/images/register.png"
              alt="register-image"
              width={227}
              height={163}
            />
          </div>
        </div>
        <div className="flex-1 p-6 md:p-12">{children}</div>
      </div>
    </div>
  );
}
