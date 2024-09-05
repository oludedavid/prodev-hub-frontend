import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const CallToAction = () => {
  return (
    <div className="relative w-[1109px] h-[206px]">
      <div
        style={{
          background: "linear-gradient(90deg, #465BB8 0.26%, #663FD6 99.71%)",
        }}
        className="relative w-full h-full rounded-[24px] flex gap-24 items-center px-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="37"
          viewBox="0 0 36 37"
          fill="none"
          className="absolute left-5 top-4"
        >
          <path
            d="M0.0395781 29.4736L21.3636 0.419812L35.2901 36.9728L0.0395781 29.4736Z"
            fill="#407BFF"
            fill-opacity="0.48"
          />
        </svg>
        <p className="w-[348px] h-[45px] font-bold text-[32px]  pb-2">
          Join Our Community of Students
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
        >
          <path
            d="M37.1905 37.8673L-0.00280798 28.3118L26.8692 0.879143L37.1905 37.8673Z"
            fill="#407BFF"
            fill-opacity="0.48"
          />
        </svg>
        <div className=" w-[392px] h-[45px] flex flex-row items-center justify-between bg-white border-none rounded-[40px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="101"
            height="46"
            viewBox="0 0 101 46"
            fill="none"
            className="absolute top-2 right-2"
          >
            <path
              d="M99.9204 7.53171C99.9204 7.53171 98.4216 0.100048 94.9244 1.09097C91.4272 2.08188 72.9421 25.3676 68.9453 21.8995C64.9485 18.4314 63.9493 11.9907 58.9534 11.4952C53.9574 10.9998 34.9727 43.2035 30.4763 41.2218C25.9799 39.24 24.4811 32.3038 18.9855 30.322C13.4899 28.3403 1 44.6898 1 44.6898"
              stroke="#407BFF"
              stroke-opacity="0.77"
              stroke-width="1.64867"
            />
          </svg>
          <Input
            placeholder="Enter your email address"
            className="w-2/3 ml-3 border-none bg-white  text-[#828282] bg-background placeholder:text-gray-500 focus:outline-none focus:border-transparent"
            type="email"
          />
          <Button
            style={{
              background:
                "linear-gradient(90deg, #465BB8 0.26%, #663FD6 99.71%)",
            }}
            className="w-[102px] h-[38px] rounded-[28px] mr-2"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
