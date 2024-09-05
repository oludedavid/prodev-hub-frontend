import BackgroundRectPattern from "@/components/custom-component/background/backgroundRect";
import SearchBar from "@/components/custom-component/structure/search-bar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import { coursesData } from "@/data/coursesData";
import { CourseProps } from "@/schema/courses";
import { CourseCategories } from "@/schema/courseCategories";
import { courseCategoriesData } from "@/data/courseCategories";

type HeroPageProps = {
  courseCategories: CourseCategories[];
};

const Hero: React.FC = () => {
  // Extract unique category names
  const uniqueCategories = Array.from(
    new Set(courseCategoriesData.map((courses) => courses.name))
  );

  return (
    <div
      className="flex flex-col gap-10 w-full items-center pt-10 justify-center rounded-t-sm"
      style={{
        background: "linear-gradient(102deg, #10192B 13.6%, #365491 122.42%)",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      }}
    >
      <SearchBar courseCategories={uniqueCategories} />
      <h1 className="relative w-[514px] h-[102px] text-center font-bold text-[40px]">
        Empower Your Tech Journey with ProDev Hub
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="148"
          height="12"
          viewBox="0 0 148 12"
          fill="none"
          className="absolute -bottom-4 right-28"
        >
          <g clipPath="url(#clip0_2058_1343)">
            <path
              d="M147.765 1.05835e-05L147.985 6.31321L90.1852 6.70043L12.1925 10.2396L69.8145 4.96499L0 5.16006"
              fill="#663FD6"
            />
          </g>
          <defs>
            <clipPath id="clip0_2058_1343">
              <rect
                width="147.855"
                height="6.31705"
                fill="white"
                transform="translate(0 5.16006) rotate(-2)"
              />
            </clipPath>
          </defs>
        </svg>
      </h1>
      <p className="text-[18px] text-[#E3E3E3] w-[647px] text-center font-medium">
        Elevate Your Skills and Collaborate with Experts on Our Innovative
        Platform
      </p>

      <Link
        href="/courses"
        className="w-[200px] flex underline h-[30px] text-[16px]"
      >
        Learn more
        <MdArrowOutward />
      </Link>

      <div className="flex gap-6">
        <Button
          variant={"outline"}
          className="grid w-[212px] h-[43px] place-content-center rounded-[32px] bg-[#010415]"
          style={{
            border: "1px solid #465BB8",
          }}
        >
          Book An Appointment
        </Button>
        <Button
          variant={"outline"}
          className="grid border-none bg-gradient-to-r from-[#465BB8] to-[#663FD6] w-[212px] h-[43px] place-content-center rounded-[32px]"
        >
          Sign Up Instructor
        </Button>
      </div>
      {/* image container */}
      <div className="flex gap-6 pt-6">
        {/* code box */}
        <div className="w-[229px] h-[175px] pt-1 flex flex-col">
          <div className="h-[26px] bg-[#663FD6] rounded-t-[10px]">
            <div className="flex gap-1 items-center py-3 px-2">
              <div className="w-1 h-1 rounded-full bg-red-500"></div>
              <div className="w-1 h-1 rounded-full bg-yellow-300"></div>
              <div className="w-1 h-1 rounded-full bg-purple-800"></div>
            </div>
          </div>

          <div className="bg-[#1F1B2A] h-full text-xs pt-2">
            <div>
              <span className="text-[#663FD6]">{`def`}</span>{" "}
              <span className="text-[#39B54A]">{`tri_recursion(k)`}</span>:
              <div className="pl-3">{`if(k>0):`}</div>
              <p className="pl-4">
                result = K <span>+</span> tri_recursion(<span>-1</span>)
              </p>
              <p className="pl-4">
                print(<span>result</span>)
              </p>
              <p className="pl-4">else:</p>
              <p className="text-[#39B54A]">{`result = 0`}</p>
              <p className="text-[#663FD6] pl-4">
                return <span className="text-[#39B54A]">result</span>
              </p>
            </div>
          </div>
        </div>
        {/* arrow */}
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="94"
            height="87"
            viewBox="0 0 94 87"
            fill="none"
          >
            <path
              d="M1.24376 6.69465C0.811081 7.03789 0.738569 7.66688 1.0818 8.09956L6.67507 15.1505C7.0183 15.5832 7.6473 15.6557 8.07998 15.3124C8.51266 14.9692 8.58517 14.3402 8.24194 13.9075L3.27014 7.64005L9.53762 2.66825C9.9703 2.32502 10.0428 1.69602 9.69958 1.26334C9.35635 0.830662 8.72735 0.75815 8.29467 1.10138L1.24376 6.69465ZM93.6402 86.1211C85.4563 68.9108 78.2194 50.753 65.2149 36.0695C52.15 21.3176 33.3083 10.0963 1.97976 6.48467L1.75071 8.47151C32.6447 12.033 51.0146 23.0522 63.7177 37.3955C76.4813 51.807 83.569 69.599 91.834 86.98L93.6402 86.1211Z"
              fill="#CACACA"
            />
          </svg>
        </div>
        {/* image */}
        <picture>
          <Image src="/images/girl.png" alt="hero" width={400} height={400} />
        </picture>
      </div>
    </div>
  );
};

export default Hero;
