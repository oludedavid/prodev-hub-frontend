"use client";
import React from "react";
import { z } from "zod";
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
    <div className="relative flex flex-row w-full h-full py-16">
      <div className="w-[45%] h-[100%] flex flex-col justify-center items-center gap-10">
        <div
          style={{
            background: "rgba(102, 63, 214, 0.55)",
            filter: "blur(96px)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="380"
            viewBox="0 0 392 406"
            fill="none"
          >
            <g filter="url(#filter0_f_2175_5419)">
              <path
                d="M24.7084 28.2686C48.9037 5.68747 -77.2036 -169.813 34.9178 -49.6771C147.039 70.4592 218.317 186.155 194.122 208.736C169.927 231.317 59.4202 152.233 -52.7013 32.0964C-164.823 -88.0399 0.513039 50.8497 24.7084 28.2686Z"
                fill="#663FD6"
                fill-opacity="0.55"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_2175_5419"
                x="-284.311"
                y="-284.357"
                width="676.148"
                height="689.941"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="96.5"
                  result="effect1_foregroundBlur_2175_5419"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute w-[40%] flex flex-col justify-start items-center gap-10 top-0 left-0  h-full py-8">
          <h2>
            {action === "register" ? "Already Signed Up?" : "Not Signed Up?"}
          </h2>
          <p className="w-[370px] text-center font-normal text-[14px] text-[#E3E3E3]">
            Lorem ipsum dolor sit amet consectetur. Vestibulum interdum sed ut
            leo. Maecenas auctor vestibulum urna habitant laoreet. Morbi sem
            pretium pulvinar fringilla malesuada
          </p>
          <div>
            <Link href={`${action === "register" ? "/login" : "/register"}`}>
              <Button
                className="text-[16px] font-medium"
                style={{
                  width: "158px",
                  height: "43px",
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
      </div>
      {/* second */}
      <div
        style={{ background: "rgba(83, 104, 197, 0.11)" }}
        className=" w-[70%] flex flex-col justify-center gap-4 items-center border-none"
      >
        {children}
      </div>
    </div>
  );
}
