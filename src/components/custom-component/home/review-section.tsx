"use client";
import React from "react";
import SectionHeader from "./section-header";
import ReviewCard from "../review/review-card";
import { ReviewSectionProps } from "@/app/types/review";

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 py-3">
      <SectionHeader title={"Testimonials"} />
      <h1
        style={{
          background:
            "linear-gradient(90deg, #FFF 0.95%, rgba(217, 217, 217, 0.65) 148.79%)",
          backgroundClip: "text",
          backgroundPosition: "center",
          color: "transparent",
        }}
        className="w-[335px] text-center font-bold text-[32px]"
      >
        What our students say about us
      </h1>
      <div className="flex flex-wrap gap-4 justify-center py-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
