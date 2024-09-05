"use client";
import React from "react";
import SectionHeader from "./section-header";
import ReviewCard from "../review/review-card";
import { ReviewSectionProps } from "@/types/review";

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
        className="text-center font-bold text-2xl"
      >
        What our students say about us
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center p-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </ul>
    </div>
  );
};

export default ReviewSection;
