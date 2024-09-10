import React from "react";
import CourseCard from "./course-card";

/**
 * Props for the CourseCardList component.
 * @typedef {Object} CourseCardListProps
 * @property {CourseProps[]} courses - An array of course objects.
 */

/**
 * CourseCardList component to display a list of course cards.
 *
 * @param {CourseCardListProps} props - The props for the component.
 * @returns {JSX.Element} The rendered CourseCardList component.
 */
type CourseProps = {
  id: string;
  name: string;
  imageUrl: string;
  tutor: string;
  price: number;
};

const CourseCardList: React.FC<{ courses: CourseProps[] }> = ({ courses }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          name={course.name}
          imageUrl={course.imageUrl}
          tutorName={course.tutor}
          price={course.price}
        />
      ))}
    </div>
  );
};

export default CourseCardList;
