import React from "react";

const BackgroundRectPattern = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/backgroundPattern.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative w-[100%] h-[285px]"
    >
      <div className="absolute top-0 z-10 left-0 w-full h-full flex flex-col justify-center items-center">
        <div
          style={{
            borderRadius: "952px",
            background:
              "linear-gradient(135deg, rgba(93, 105, 210, 0.23) 0%, rgba(93, 105, 210, 0) 70%), rgba(93, 105, 210, 0.23)",
            filter: "blur(167px)",
          }}
          className="relative w-[952px] h-[480px] flex items-center justify-center"
        ></div>
      </div>
      <div className="w-full h-full absolute z-40 top-0 flex flex-col items-center justify-center text-[40px] font-bold text-white">
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="148"
          height="12"
          viewBox="0 0 148 12"
          fill="none"
        >
          <g clip-path="url(#clip0_2058_1343)">
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
      </div>
    </div>
  );
};

export default BackgroundRectPattern;
