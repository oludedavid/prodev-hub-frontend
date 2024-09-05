import { Button } from "@/components/ui/button";
import SectionHeader from "./section-header";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
const BecomeAnInstructorSection = () => {
  return (
    <div className=" w-full flex flex-col items-center mt-24">
      <div className="relative  h-[394px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1130"
          height="394"
          viewBox="0 0 1130 394"
          fill="none"
        >
          <path
            d="M0 17C0 7.61116 7.61116 0 17 0H1113C1122.39 0 1130 7.61116 1130 17V377C1130 386.389 1122.39 394 1113 394H17C7.61119 394 0 386.389 0 377V17Z"
            fill="url(#paint0_linear_2055_294)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2055_294"
              x1="1.04551e-07"
              y1="187.39"
              x2="1129.77"
              y2="205.465"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#465BB8" />
              <stop offset="1" stop-color="#663FD6" />
            </linearGradient>
          </defs>
        </svg>
        {/* main content */}
        <div className="absolute flex justify-between gap-3 top-0 left-0 px-16 py-6 h-full w-full bg-transparent z-10">
          <div className="w-[422px] flex flex-col gap-2">
            <SectionHeader title="Become an Instructor" />
            <h1
              style={{
                background:
                  "linear-gradient(90deg, #FFF 0.95%, rgba(217, 217, 217, 0.65) 148.79%)",
                backgroundClip: "text",
                backgroundPosition: "center",
                color: "transparent",
              }}
              className="text-[32px] font-bold"
            >
              Let’s Join Us & Spread Your Knowledge with Prodev Hub
            </h1>
            <p className="text-[14px] font-normal w-[452px] text-[#E3E3E3]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dum
            </p>
            <Button
              style={{
                border: "1px solid #465BB8",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
              }}
              className="w-[227px] h-[43px] rounded-[32px] bg-[#010415] mt-2"
            >
              Become an Instructor <FaArrowRight className="ml-2 text-white" />
            </Button>
          </div>
          <div className="w-[447px] h-[334px]">
            <Image
              width={420}
              height={330}
              src="/images/frame.png"
              alt="become and instructor frame"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAnInstructorSection;
