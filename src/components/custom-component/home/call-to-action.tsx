// src/components/custom-component/home/call-to-action.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const CallToAction = () => {
  return (
    <div className="w-full my-16">
      <div
        style={{
          background: "linear-gradient(90deg, #465BB8 0.26%, #663FD6 99.71%)",
        }}
        className="relative w-full flex items-center justify-center gap-10 h-[284px] px-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="101"
          height="46"
          viewBox="0 0 101 46"
          fill="none"
          className="absolute top-0 right-0"
        >
          <path
            d="M99.9204 7.53171C99.9204 7.53171 98.4216 0.100048 94.9244 1.09097C91.4272 2.08188 72.9421 25.3676 68.9453 21.8995C64.9485 18.4314 63.9493 11.9907 58.9534 11.4952C53.9574 10.9998 34.9727 43.2035 30.4763 41.2218C25.9799 39.24 24.4811 32.3038 18.9855 30.322C13.4899 28.3403 1 44.6898 1 44.6898"
            stroke="#407BFF"
            stroke-opacity="0.77"
            stroke-width="1.64867"
          />
        </svg>
        <div className="flex-none">
          <Image
            src="/images/call-to-action.png"
            alt="call-to-action"
            width={288}
            height={259}
          />
        </div>
        <div className="flex flex-row items-start px-2">
          <h1 className="relative flex flex-col text-3xl font-bold text-white w-[500px]">
            Affordable Online Courses & Learning Opportunities for you
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="58"
              height="57"
              viewBox="0 0 58 57"
              fill="none"
              className="absolute top-16 right-4"
            >
              <path
                d="M57.3054 56.9576L0.76873 42.4325L41.6162 0.732872L57.3054 56.9576Z"
                fill="#407BFF"
                fill-opacity="0.48"
              />
            </svg>
          </h1>
          <Button className="w-[225px] h-[43px] mt-6 text-[14px] font-medium rounded-[32px] text-[#10192B] bg-white flex items-center justify-center">
            Start Learning Today
            <FaArrowRight className="ml-2 text-[#10192B]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
