import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/**
 * Props for the CourseCard component.
 * @typedef {Object} CourseCardProps
 * @property {number} id - The unique identifier for the course.
 * @property {string} name - The name of the course.
 * @property {string} imageUrl - The URL of the course image.
 * @property {string} tutorName - The name of the course tutor.
 * @property {number} price - The price of the course.
 */

/**
 * CourseCard component to display course information.
 *
 * @param {CourseCardProps} props - The props for the component.
 * @returns {JSX.Element} The rendered CourseCard component.
 */

const CourseCard = ({
  id,
  name,
  imageUrl,
  tutorName,
  price,
}: {
  id: number;
  name: string;
  imageUrl: string;
  tutorName: string;
  price: number;
}) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(110deg, rgba(255, 255, 255, 0.15) -1.51%, rgba(183, 183, 183, 0.05) 20.46%, rgba(18, 18, 18, 0.00) 60.51%, rgba(18, 18, 18, 0.00) 80.48%, rgba(255, 255, 255, 0.13) 98.36%)",
        borderRadius: "10px",
        border: "0.7px solid rgba(255, 255, 255, 0.39)",
        backdropFilter: "blur(1.6px)",
      }}
      className="relative w-[301px] h-full flex flex-col gap-3 py-4 px-3"
    >
      {/* image */}
      <picture className="w-[274px] h-[173px]">
        <Image
          width={274}
          height={173}
          src={imageUrl}
          className="w-full h-full rounded-[10px]"
          alt="Course Item Image"
        />
      </picture>
      {/* lessons, students, review */}
      <div className="flex items-center justify-around w-[274px] h-[17px]">
        <small className="flex gap-1 text-[12px] font-normal leading-[15px] text-[#E3E3E3] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="15"
            viewBox="0 0 11 15"
            fill="none"
          >
            <path
              d="M1.19444 14.3333H9.55556C9.87234 14.3333 10.1762 14.2075 10.4002 13.9835C10.6242 13.7595 10.75 13.4557 10.75 13.1389V1.19444C10.75 0.877658 10.6242 0.573846 10.4002 0.349845C10.1762 0.125843 9.87234 1.23427e-08 9.55556 1.23427e-08H3.51406C3.18943 -4.58718e-05 2.87787 0.127842 2.64689 0.355944L0.353556 2.65167C0.128252 2.88041 0.00135953 3.18821 0 3.50928V13.1389C0 13.4557 0.125843 13.7595 0.349845 13.9835C0.573846 14.2075 0.877658 14.3333 1.19444 14.3333ZM8.6 10.9889H1.91111C1.84775 10.9889 1.78699 10.9637 1.74219 10.9189C1.69739 10.8741 1.67222 10.8134 1.67222 10.75C1.67222 10.6866 1.69739 10.6259 1.74219 10.5811C1.78699 10.5363 1.84775 10.5111 1.91111 10.5111H8.6C8.66336 10.5111 8.72412 10.5363 8.76892 10.5811C8.81372 10.6259 8.83889 10.6866 8.83889 10.75C8.83889 10.8134 8.81372 10.8741 8.76892 10.9189C8.72412 10.9637 8.66336 10.9889 8.6 10.9889ZM8.6 8.83889H1.91111C1.84775 8.83889 1.78699 8.81372 1.74219 8.76892C1.69739 8.72412 1.67222 8.66336 1.67222 8.6C1.67222 8.53664 1.69739 8.47588 1.74219 8.43108C1.78699 8.38628 1.84775 8.36111 1.91111 8.36111H8.6C8.66336 8.36111 8.72412 8.38628 8.76892 8.43108C8.81372 8.47588 8.83889 8.53664 8.83889 8.6C8.83889 8.66336 8.81372 8.72412 8.76892 8.76892C8.72412 8.81372 8.66336 8.83889 8.6 8.83889ZM8.6 6.68889H1.91111C1.84775 6.68889 1.78699 6.66372 1.74219 6.61892C1.69739 6.57412 1.67222 6.51336 1.67222 6.45C1.67222 6.38664 1.69739 6.32588 1.74219 6.28108C1.78699 6.23628 1.84775 6.21111 1.91111 6.21111H8.6C8.66336 6.21111 8.72412 6.23628 8.76892 6.28108C8.81372 6.32588 8.83889 6.38664 8.83889 6.45C8.83889 6.51336 8.81372 6.57412 8.76892 6.61892C8.72412 6.66372 8.66336 6.68889 8.6 6.68889ZM4.48394 4.3H8.6C8.66336 4.3 8.72412 4.32517 8.76892 4.36997C8.81372 4.41477 8.83889 4.47553 8.83889 4.53889C8.83889 4.60225 8.81372 4.66301 8.76892 4.70781C8.72412 4.75261 8.66336 4.77778 8.6 4.77778H4.48394C4.42059 4.77778 4.35982 4.75261 4.31502 4.70781C4.27022 4.66301 4.24506 4.60225 4.24506 4.53889C4.24506 4.47553 4.27022 4.41477 4.31502 4.36997C4.35982 4.32517 4.42059 4.3 4.48394 4.3ZM3.34444 4.3C3.39169 4.3 3.43788 4.31401 3.47716 4.34026C3.51645 4.36651 3.54707 4.40382 3.56515 4.44747C3.58323 4.49112 3.58796 4.53915 3.57874 4.58549C3.56953 4.63183 3.54677 4.6744 3.51336 4.70781C3.47996 4.74122 3.43739 4.76397 3.39105 4.77319C3.34471 4.7824 3.29668 4.77767 3.25303 4.75959C3.20937 4.74151 3.17207 4.71089 3.14582 4.67161C3.11957 4.63232 3.10556 4.58614 3.10556 4.53889C3.10556 4.47553 3.13072 4.41477 3.17552 4.36997C3.22032 4.32517 3.28109 4.3 3.34444 4.3ZM2.86667 0.812222V2.12611C2.86667 2.32252 2.78864 2.51088 2.64976 2.64976C2.51088 2.78864 2.32252 2.86667 2.12611 2.86667H0.812222L2.86667 0.812222Z"
              fill="#663FD6"
            />
          </svg>
          Lessons
        </small>
        <small className="flex gap-1 text-[12px] font-normal leading-[15px] text-[#E3E3E3] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M12.4345 10.3515C11.7385 9.82249 10.9035 9.43799 9.99303 9.20749C11.1475 8.39499 11.926 6.90499 11.926 5.19949C11.926 4.97549 11.9075 4.75099 11.8805 4.52699L12.4885 4.26199V5.87449C12.4885 6.12299 12.69 6.32449 12.9385 6.32449C13.187 6.32449 13.3885 6.12299 13.3885 5.87449V3.78049C13.495 3.65299 13.5625 3.49449 13.5625 3.32149C13.5625 3.03449 13.3925 2.77449 13.1295 2.65999L8.54753 0.663994C8.19953 0.512494 7.80103 0.512494 7.45403 0.663994L2.87203 2.65999C2.60853 2.77449 2.43853 3.03449 2.43853 3.32149C2.43853 3.60849 2.60853 3.86849 2.87203 3.98299L4.11903 4.52649C4.09253 4.74749 4.07553 4.96949 4.07553 5.19999C4.07553 6.90449 4.85303 8.39449 6.00653 9.20699C5.09503 9.43699 4.25953 9.82199 3.56503 10.3515C2.83203 10.909 2.39453 11.8175 2.39453 12.781V14.0845C2.39453 14.8375 3.00703 15.4495 3.75903 15.4495H12.2415C12.994 15.4495 13.606 14.838 13.606 14.087V12.782C13.6065 11.819 13.1685 10.9105 12.4345 10.3515ZM4.97553 5.19999C4.97553 5.09999 4.99103 5.00599 4.99703 4.90899L7.45403 5.97949C7.62753 6.05499 7.81403 6.09299 8.00053 6.09299C8.18703 6.09299 8.37353 6.05549 8.54753 5.97949L11.013 4.90549C11.019 5.00349 11.0255 5.10099 11.0255 5.19999C11.0255 7.27299 9.66853 8.95999 8.00053 8.95999C6.33253 8.95999 4.97553 7.27299 4.97553 5.19999ZM6.96553 9.93299C7.30203 9.88599 7.64653 9.85999 7.99803 9.85999C8.34803 9.85999 8.69203 9.88599 9.02703 9.93249L7.99753 11.5555L6.96553 9.93299Z"
              fill="#663FD6"
            />
          </svg>
          Students
        </small>
        <small className="flex gap-1 text-[12px] font-normal leading-[15px] text-[#E3E3E3] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M3.15943 13.9465C2.82129 14.1319 2.43842 13.8079 2.5065 13.394L3.23251 8.97985L0.150468 5.84698C-0.137565 5.5542 0.0115349 5.01887 0.3974 4.9604L4.68357 4.31092L6.59467 0.272818C6.76683 -0.0909393 7.23317 -0.0909393 7.40533 0.272818L9.31643 4.31092L13.6026 4.9604C13.9885 5.01887 14.1376 5.5542 13.8495 5.84698L10.7675 8.97985L11.4935 13.394C11.5616 13.8079 11.1787 14.1319 10.8406 13.9465L7 11.841L3.15943 13.9465Z"
              fill="#FFAF13"
            />
          </svg>
          Reviews
        </small>
      </div>
      {/* title */}
      <h6 className="text-[16px] w-full py-2 font-semibold leading-[21px]">
        {name}
      </h6>
      {/* Instructor name */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <picture>
            <Image
              width={33}
              height={32}
              src="/images/card-person2.png"
              alt="Instructor Avatar"
              className="w-[34px] h-[32px] rounded-full"
            />
          </picture>
          <div>
            <h6 className="text-[12px] font-semibold leading-[15px]">
              Instructor:
            </h6>
            <h6
              style={{
                color: "rgba(227, 227, 227, 0.89)",
              }}
              className="text-[12px] font-medium leading-[19px] "
            >
              {tutorName}
            </h6>
          </div>
        </div>
        {/* price */}
        <p>$ {price}</p>
      </div>

      {/* separator */}
      <div className="w-[274px] h-[1px] bg-[#3E3E5F]">
        <Separator orientation="horizontal" className="" />
      </div>
      {/* button */}
      <div className="flex items-center justify-center w-[274px]">
        <Link
          href={`/learn-with-us/courses/${id}`}
          style={{
            background: "linear-gradient(90deg, #465BB8 0.26%, #663FD6 99.71%)",
          }}
          className="w-[219px] h-[34px] flex items-center justify-center rounded-[28px] text-[#FFFFFF] font-medium text-[12px] mt-3"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
