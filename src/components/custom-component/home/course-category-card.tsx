// src/components/custom-component/course-category-card.tsx
import React from "react";
import { CourseCategoryCardProps } from "@/app/types/coursesCategoriesCard";
import { courseCategoriesData } from "@/data/courseCategories";
import { CourseCategories } from "@/schema/courseCategories";
import { Button } from "@/components/ui/button";

const CourseCategoryCard: React.FC<CourseCategories> = ({
  id,
  name,
  numberOfCourses,
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
      className="relative w-[210px] h-[240px] flex flex-col gap-3 py-10 px-3"
    >
      <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#663FD6]">
        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <g clip-path="url(#clip0_2055_98)">
            <path
              d="M4.74265 2.80054C3.79574 2.80054 3.02539 3.57064 3.02539 4.51713C3.02539 5.46363 3.79574 6.23373 4.74265 6.23373C5.69031 6.23373 6.46132 5.46363 6.46132 4.51713C6.46132 3.57064 5.69031 2.80054 4.74265 2.80054ZM4.74265 5.20997C4.36026 5.20997 4.0492 4.89916 4.0492 4.51713C4.0492 4.1351 4.36026 3.82434 4.74265 3.82434C5.12579 3.82434 5.43757 4.13515 5.43757 4.51718C5.43757 4.89921 5.12579 5.20997 4.74265 5.20997Z"
              fill="white"
            />
            <path
              d="M19.7587 2.80054H15.2192C14.2723 2.80054 13.502 3.57064 13.502 4.51713C13.502 5.46363 14.2723 6.23373 15.2192 6.23373H19.7587C20.7056 6.23373 21.476 5.46363 21.476 4.51713C21.476 3.57064 20.7056 2.80054 19.7587 2.80054ZM19.7587 5.20997H15.2192C14.8368 5.20997 14.5258 4.89916 14.5258 4.51713C14.5258 4.1351 14.8369 3.82429 15.2192 3.82429H19.7587C20.1411 3.82429 20.4522 4.1351 20.4522 4.51713C20.4522 4.89916 20.1411 5.20997 19.7587 5.20997Z"
              fill="white"
            />
            <path
              d="M9.19382 2.80054C8.24692 2.80054 7.47656 3.57064 7.47656 4.51713C7.47656 5.46363 8.24692 6.23373 9.19382 6.23373C10.1415 6.23373 10.9125 5.46363 10.9125 4.51713C10.9125 3.57064 10.1415 2.80054 9.19382 2.80054ZM9.19382 5.20997C8.81143 5.20997 8.50037 4.89916 8.50037 4.51713C8.50037 4.1351 8.81148 3.82429 9.19382 3.82429C9.57696 3.82429 9.88874 4.1351 9.88874 4.51713C9.88874 4.89916 9.57696 5.20997 9.19382 5.20997Z"
              fill="white"
            />
            <path
              d="M8.3594 11.2865C8.08453 11.2206 7.80824 11.3903 7.74255 11.6653L6.72702 15.915C6.66133 16.1899 6.83093 16.4661 7.1059 16.5318C7.1459 16.5414 7.18595 16.546 7.22534 16.546C7.45676 16.546 7.66661 16.3879 7.72275 16.1529L8.73828 11.9033C8.80402 11.6283 8.63438 11.3522 8.3594 11.2865Z"
              fill="white"
            />
            <path
              d="M10.2379 16.0323C10.3354 16.1192 10.4571 16.162 10.5782 16.162C10.7191 16.162 10.8595 16.1041 10.9607 15.9905L12.3961 14.3792C12.6329 14.1155 12.6329 13.7026 12.3976 13.4406L10.9606 11.8276C10.7725 11.6164 10.4489 11.5979 10.2379 11.7858C10.0267 11.9739 10.008 12.2975 10.1961 12.5086L11.4437 13.909L10.1961 15.3095C10.0081 15.5207 10.0267 15.8443 10.2379 16.0323Z"
              fill="white"
            />
            <path
              d="M5.22671 11.7859C5.01554 11.5979 4.69204 11.6167 4.50397 11.8277L3.0687 13.4389C2.83154 13.7026 2.83154 14.1157 3.06707 14.3776L4.50402 15.9907C4.60519 16.1043 4.74549 16.1621 4.88651 16.1621C5.00763 16.1621 5.1293 16.1193 5.22681 16.0324C5.43798 15.8444 5.45666 15.5208 5.26859 15.3097L4.02103 13.9092L5.26859 12.5087C5.45656 12.2976 5.43788 11.974 5.22671 11.7859Z"
              fill="white"
            />
            <path
              d="M24.8363 17.23H24.6462C24.5467 16.9076 24.4177 16.5963 24.2603 16.2989L24.396 16.1628C24.6126 15.9475 24.7321 15.66 24.7326 15.3533C24.733 15.0459 24.6139 14.7573 24.397 14.5405L24.1328 14.2764V3.37286C24.1328 1.84601 23.0553 0.603882 21.7308 0.603882H2.39606C1.0716 0.603882 -0.00585938 1.84601 -0.00585938 3.37286V17.6801C-0.00585938 19.2069 1.0716 20.4491 2.39606 20.4491H5.39941C5.6821 20.4491 5.91129 20.2199 5.91129 19.9372C5.91129 19.6545 5.6821 19.4253 5.39941 19.4253H2.39606C1.64906 19.4253 1.01795 18.6261 1.01795 17.6801V8.39316H23.1089V13.566C23.0506 13.557 22.9915 13.5511 22.9314 13.5511C22.9307 13.5511 22.9301 13.5511 22.9296 13.5511C22.6229 13.5516 22.3354 13.671 22.1218 13.8858L21.9834 14.0236C21.6797 13.8631 21.3634 13.7326 21.0373 13.6329V13.4506C21.0373 12.8179 20.5225 12.3032 19.8896 12.3032H18.9633C18.3313 12.3032 17.8171 12.8179 17.8171 13.4506V13.6454C17.4971 13.746 17.1881 13.8754 16.8928 14.0325L16.7602 13.9004C16.5449 13.684 16.2574 13.5645 15.9507 13.564C15.9501 13.564 15.9495 13.564 15.9489 13.564C15.6422 13.564 15.3542 13.683 15.1378 13.8993L14.4833 14.5534C14.2664 14.7702 14.1473 15.0589 14.1478 15.3662C14.1482 15.6729 14.2677 15.9604 14.4827 16.174L14.6241 16.3158C14.4706 16.6087 14.3446 16.9142 14.2471 17.2299H14.0526C13.4206 17.2299 12.9064 17.7439 12.9064 18.3758V19.3031C12.9064 19.3443 12.9087 19.385 12.9129 19.4251H9.93453C9.65184 19.4251 9.42265 19.6543 9.42265 19.937C9.42265 20.2197 9.65184 20.4489 9.93453 20.4489H14.0526H14.249C14.348 20.7676 14.4759 21.0756 14.632 21.3704L14.4937 21.5081C14.0484 21.9558 14.0488 22.6827 14.4948 23.1283L15.1496 23.7829C15.3649 23.9993 15.6524 24.1188 15.9591 24.1192H15.9608C16.2676 24.1192 16.5556 24.0002 16.772 23.7839L16.9091 23.6469C17.2066 23.8037 17.5159 23.9318 17.8343 24.0302V24.2283C17.8343 24.861 18.3484 25.3757 18.9805 25.3757H19.9083C20.5403 25.3757 21.0545 24.861 21.0545 24.2283V24.0314C21.3758 23.9323 21.6864 23.8037 21.9835 23.6468L22.12 23.7828C22.3353 23.9993 22.6227 24.1187 22.9294 24.1192H22.9312C23.238 24.1192 23.526 24.0002 23.7428 23.7835L24.3958 23.1294C24.6124 22.9141 24.732 22.6266 24.7324 22.3199C24.7329 22.0125 24.6137 21.7239 24.3968 21.5071L24.2602 21.3705C24.416 21.0755 24.5439 20.7673 24.6427 20.4489H24.8362C25.469 20.4489 25.9838 19.9349 25.9838 19.3031V18.3758C25.9839 17.744 25.4691 17.23 24.8363 17.23ZM1.01795 7.36935V3.37286C1.01795 2.42692 1.64906 1.62769 2.39606 1.62769H21.7308C22.4779 1.62769 23.109 2.42692 23.109 3.37286V7.3694L1.01795 7.36935ZM24.9601 19.3032C24.9601 19.3682 24.9023 19.4252 24.8362 19.4252H24.2508C24.0122 19.4252 23.8052 19.5901 23.7519 19.8228C23.6413 20.3053 23.4514 20.7628 23.1874 21.1829C23.0602 21.3852 23.0899 21.6485 23.259 21.8174L23.6732 22.2313C23.7041 22.2623 23.7087 22.2993 23.7087 22.3186C23.7087 22.3416 23.7027 22.3751 23.6728 22.4047L23.0188 23.0599C22.9877 23.0908 22.9507 23.0955 22.9313 23.0955C22.9312 23.0955 22.9312 23.0955 22.9312 23.0955C22.9079 23.0955 22.8743 23.0895 22.8443 23.0593L22.4286 22.6453C22.2595 22.4769 21.9967 22.4477 21.7948 22.5746C21.3741 22.8392 20.9147 23.0294 20.429 23.1399C20.1961 23.193 20.0308 23.4001 20.0308 23.6391V24.2285C20.0308 24.2943 19.9735 24.3521 19.9084 24.3521H18.9806C18.9154 24.3521 18.8582 24.2943 18.8582 24.2285V23.6376C18.8582 23.3985 18.6925 23.1911 18.4592 23.1384C17.9797 23.0299 17.5211 22.84 17.096 22.574C17.0122 22.5216 16.9181 22.496 16.8246 22.496C16.6923 22.496 16.5613 22.5471 16.4625 22.6459L16.0484 23.0599C16.0174 23.0908 15.9804 23.0955 15.9609 23.0955C15.9608 23.0955 15.9608 23.0955 15.9607 23.0955C15.9375 23.0955 15.9039 23.0895 15.8745 23.0599L15.2186 22.4043C15.1727 22.3585 15.1732 22.2771 15.218 22.2321L15.6337 21.8181C15.8036 21.6489 15.8332 21.3846 15.7053 21.182C15.4409 20.7633 15.2507 20.3061 15.14 19.8229C15.0868 19.5903 14.8797 19.4253 14.641 19.4253H14.0527C13.9863 19.4253 13.9303 19.3694 13.9303 19.3033V18.376C13.9303 18.3099 13.9863 18.2539 14.0527 18.2539H14.6395C14.8785 18.2539 15.0857 18.0886 15.1387 17.8557C15.248 17.3756 15.4357 16.9202 15.6966 16.5021C15.8226 16.3002 15.7929 16.0381 15.6248 15.8696L15.206 15.4496C15.1776 15.4214 15.1716 15.3879 15.1716 15.3649C15.1716 15.3456 15.1761 15.3086 15.2071 15.2777L15.8615 14.6236C15.8925 14.5926 15.9295 14.588 15.949 14.588H15.9492C15.9724 14.588 16.006 14.594 16.036 14.6242L16.4488 15.0354C16.6184 15.2043 16.8822 15.2332 17.0841 15.1051C17.5024 14.8399 17.9605 14.6478 18.4457 14.5343C18.6771 14.4801 18.8409 14.2736 18.8409 14.0358V13.4508C18.8409 13.3838 18.8969 13.3272 18.9632 13.3272H19.8896C19.9567 13.3272 20.0135 13.3838 20.0135 13.4508V14.0272C20.0135 14.2671 20.18 14.4747 20.4142 14.5268C20.9012 14.6353 21.3659 14.8269 21.7953 15.0963C21.997 15.2228 22.2596 15.1935 22.4286 15.0253L22.846 14.6096C22.8743 14.5811 22.9079 14.5751 22.931 14.5751H22.9312C22.9507 14.5751 22.9877 14.5797 23.0187 14.6107L23.6731 15.2648C23.7041 15.2957 23.7087 15.3327 23.7087 15.352C23.7086 15.375 23.7026 15.4085 23.6725 15.4384L23.2583 15.8538C23.0896 16.023 23.0603 16.2864 23.1878 16.4884C23.4528 16.9086 23.6435 17.3687 23.7545 17.8559C23.8076 18.0888 24.0148 18.254 24.2537 18.254H24.8362C24.9022 18.254 24.9601 18.3111 24.9601 18.3761V19.3032Z"
              fill="white"
            />
            <path
              d="M19.4447 15.7133C17.7198 15.7133 16.3164 17.1161 16.3164 18.8403C16.3164 20.5637 17.7198 21.9658 19.4447 21.9658C21.1689 21.9658 22.5716 20.5637 22.5716 18.8403C22.5716 17.1161 21.1689 15.7133 19.4447 15.7133ZM19.4447 20.942C18.2843 20.942 17.3402 19.9991 17.3402 18.8403C17.3402 17.6806 18.2843 16.7371 19.4447 16.7371C20.6044 16.7371 21.5478 17.6806 21.5478 18.8403C21.5478 19.9991 20.6043 20.942 19.4447 20.942Z"
              fill="white"
            />
            <path
              d="M7.68208 19.4252H7.67203C7.38934 19.4252 7.16016 19.6544 7.16016 19.937C7.16016 20.2197 7.38934 20.4489 7.67203 20.4489H7.68208C7.96477 20.4489 8.19396 20.2197 8.19396 19.937C8.19396 19.6544 7.96477 19.4252 7.68208 19.4252Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2055_98">
              <rect
                width="25.9898"
                height="25.9898"
                fill="white"
                transform="translate(-0.00585938 -0.00506592)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className="text-white text-[18px] font-bold">{name}</p>
      <p
        style={{
          color: "rgba(227, 227, 227, 0.93)",
        }}
        className="text-sm font-medium w-[75px]"
      >
        {numberOfCourses} Courses
      </p>

      <Button
        variant="outline"
        className="w-6 h-6 absolute bottom-8 right-8 rounded-full grid place-content-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
        >
          <g filter="url(#filter0_d_2055_197)">
            <circle cx="30" cy="30" r="18" fill="white" />
          </g>
          <path
            d="M38.3536 30.3536C38.5488 30.1583 38.5488 29.8417 38.3536 29.6464L35.1716 26.4645C34.9763 26.2692 34.6597 26.2692 34.4645 26.4645C34.2692 26.6597 34.2692 26.9763 34.4645 27.1716L37.2929 30L34.4645 32.8284C34.2692 33.0237 34.2692 33.3403 34.4645 33.5355C34.6597 33.7308 34.9763 33.7308 35.1716 33.5355L38.3536 30.3536ZM23 30.5L38 30.5L38 29.5L23 29.5L23 30.5Z"
            fill="#10192B"
          />
          <defs>
            <filter
              id="filter0_d_2055_197"
              x="0.1"
              y="0.1"
              width="59.8"
              height="59.8"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="1"
                operator="dilate"
                in="SourceAlpha"
                result="effect1_dropShadow_2055_197"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="5.45" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.780833 0 0 0 0 0.780833 0 0 0 0 0.780833 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2055_197"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2055_197"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </Button>
    </div>
  );
};

export default CourseCategoryCard;
