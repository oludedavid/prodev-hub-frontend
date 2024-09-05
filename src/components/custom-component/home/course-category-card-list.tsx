// src/components/custom-component/course-category-card-list.tsx
import React from "react";
import CourseCategoryCard from "./course-category-card";
import { CourseCategories } from "@/schema/courseCategories";

const CourseCategoryCardList: React.FC<{
  courseCategories: CourseCategories[];
}> = ({ courseCategories }) => {
  return (
    <div className="w-full flex flex-wrap  gap-4">
      {courseCategories.map((courseCategory) => (
        <CourseCategoryCard key={courseCategory.id} {...courseCategory} />
      ))}
    </div>
  );
};

export default CourseCategoryCardList;
