// src/components/custom-component/course-category-card-list.tsx
import React from "react";
import CourseCategoryCard from "./course-category-card";
import { CourseCategories } from "@/schema/courseCategories";

const CourseCategoryCardList: React.FC<{
  courseCategories: CourseCategories[];
}> = ({ courseCategories }) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-1 mx-auto">
      {courseCategories.map((courseCategory) => (
        <CourseCategoryCard key={courseCategory.id} {...courseCategory} />
      ))}
    </ul>
  );
};

export default CourseCategoryCardList;
