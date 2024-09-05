// src/components/custom-component/review-card.tsx
import React from "react";
import Image from "next/image";
import Rating from "../ratings/rating";
import { Review } from "@/app/types/review";

const ReviewCard: React.FC<Review> = ({
  rating,
  text,
  avatarUrl,
  reviewerName,
}) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(254, 254, 254, 0.07) 0%, rgba(1, 4, 21, 0.00) 100%)",
        backdropFilter: "blur(3.049999952316284px)",
      }}
      className="w-[384px] h-[203px] rounded-[15px] p-4 flex flex-col justify-between"
    >
      <div className="w-full flex justify-between px-2 py-2">
        <Rating rating={rating} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="26"
          viewBox="0 0 34 26"
          fill="none"
        >
          <path
            d="M30.7456 2.21706C32.5977 4.2544 33.709 6.47696 33.709 10.1812C33.709 16.6637 29.0787 22.4052 22.5962 25.3687L20.9293 22.9609C27.0413 19.6271 28.3378 15.3672 28.7082 12.589C27.7822 13.1446 26.4857 13.3298 25.1892 13.1446C21.8554 12.7742 19.2624 10.1812 19.2624 6.66217C19.2624 4.99525 20.0032 3.32834 21.1145 2.03185C22.411 0.735361 23.8927 0.179724 25.7448 0.179724C27.7822 0.179724 29.6343 1.10578 30.7456 2.21706ZM12.2243 2.21706C14.0764 4.2544 15.1877 6.47696 15.1877 10.1812C15.1877 16.6637 10.5574 22.4052 4.07495 25.3687L2.40804 22.9609C8.52006 19.6271 9.81654 15.3672 10.187 12.589C9.26091 13.1446 7.96442 13.3298 6.66793 13.1446C3.3341 12.7742 0.741123 10.1812 0.741123 6.66217C0.741123 4.99525 1.48198 3.32834 2.59325 2.03185C3.70453 0.735361 5.37144 0.179724 7.22357 0.179724C9.26091 0.179724 11.113 1.10578 12.2243 2.21706Z"
            fill="#663FD6"
            fillOpacity="0.46"
          />
        </svg>
      </div>
      <p className="w-[317px] h-[70px] text-[15px] text-[#E3E3E3] overflow-hidden whitespace-nowrap text-ellipsis">
        {text}
      </p>
      <div className="flex items-center gap-2">
        <Image
          width={43}
          height={43}
          src={avatarUrl}
          alt="avatar"
          className="rounded-full"
        />
        <span className="text-white font-medium">{reviewerName}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
