"use client";

import React, { useState, useEffect } from "react";

interface BackgroundBoxPatternProps {
  space: number;
  children: React.ReactNode;
}

const BackgroundBoxPattern: React.FC<BackgroundBoxPatternProps> = ({
  space,
  children,
}) => {
  const [parentWidth, setParentWidth] = useState<number>(0);
  const [parentHeight, setParentHeight] = useState<number>(0);

  const updateDimensions = () => {
    const box = document.getElementById("background-box-pattern");
    if (box) {
      setParentWidth(box.clientWidth);
      setParentHeight(box.clientHeight);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const numberOfVerticalLines: number = Math.floor(parentWidth / space);
  const numberOfHorizontalLines: number = Math.floor(parentHeight / space);

  const verticalLine = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3"
      height="100%"
      viewBox="0 0 3 100%"
      fill="none"
    >
      <path d="M1.5 0V100%" stroke="#8B8B8B" strokeOpacity="0.32" />
    </svg>
  );

  const horizontalLine = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={parentWidth}
      height="3"
      viewBox="0 0 100% 3"
      fill="none"
    >
      <path d="M0 1.5H100%" stroke="#8B8B8B" strokeOpacity="0.32" />
    </svg>
  );

  return (
    <div id="background-box-pattern" className="relative w-full h-full">
      {/* Horizontal lines */}
      <div className="absolute w-full h-full">
        {Array.from({ length: numberOfHorizontalLines }).map((_, index) => (
          <>{horizontalLine}</>
        ))}
      </div>

      {/* Vertical lines */}
      <div className="">
        {Array.from({ length: numberOfVerticalLines }).map((_, index) => (
          <div
            key={index}
            className="flex flex-row text-red-500 "
            style={{
              position: "absolute",
              left: `${index * space}px`,
              height: "100%",
            }}
          >
            {verticalLine}
          </div>
        ))}
      </div>

      {/* Children content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundBoxPattern;
