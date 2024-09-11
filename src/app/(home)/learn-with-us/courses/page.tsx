/* eslint-disable */
"use client";
import BackgroundRectPattern from "@/components/custom-component/background/backgroundRect";
import SearchBar from "@/components/custom-component/structure/search-bar";
import { CourseOfferedType } from "@/types/courseOffered";
import { CourseCategoryType } from "@/types/courseCategory";
import { useEffect, useState } from "react";
import axios from "axios";
import CoursesListPaginationComponent from "@/components/custom-component/pagination/course-list-pagination";
import CallToAction from "@/components/custom-component/callToAction/call-to-action";

const baseUrl = `${process.env.NEXT_PUBLIC_PRODEV_HUB_BACKEND_ROOT_URL}`;
const getAllCoursesOfferedUrl = `${baseUrl}/courses`;
const getAllCourseCategoriesUrl = `${baseUrl}/courses/course-categories`;

export default function LearnWithUsPage() {
  const [coursesOfferedData, setCoursesOfferedData] = useState<
    CourseOfferedType[]
  >([]);
  const [courseCategoriesData, setCourseCategoriesData] = useState<
    CourseCategoryType[]
  >([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesResponse, categoriesResponse] = await Promise.all([
          axios.get(getAllCoursesOfferedUrl),
          axios.get(getAllCourseCategoriesUrl),
        ]);

        setCoursesOfferedData(coursesResponse.data);
        setCourseCategoriesData(categoriesResponse.data);
      } catch (error) {
        setError("An error occurred while getting the courses. " + error);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="text-red-500 pt-20 flex flex-row items-center justify-center">
        {error}
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#010415",
        boxShadow: "0px 4px 80.3px 0px rgba(0, 0, 0, 0.25)",
      }}
      className={`sm:px-2 lg:px-[150px] md:px-[150px]`}
    >
      <BackgroundRectPattern>
        <h1 className="text-[40px] w-[220px] font-bold leading-[126.794%]">
          Courses
        </h1>
      </BackgroundRectPattern>
      <div className="w-full flex items-center justify-center">
        <div className="py-16 w-[946px] flex justify-start items-center">
          <SearchBar courseCategories={courseCategoriesData} />
        </div>
      </div>

      {/* list of courses */}
      <div className="w-full flex items-center justify-center py-4">
        <CoursesListPaginationComponent
          itemsPerPage={6}
          paginationData={coursesOfferedData}
        />
      </div>

      {/* call to action */}
      <div className="w-full flex items-center justify-center py-24">
        <CallToAction />
      </div>
    </div>
  );
}
