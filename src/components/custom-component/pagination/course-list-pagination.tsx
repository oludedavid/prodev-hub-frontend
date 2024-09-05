"use client";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CourseCard from "../course/course-card";
import { CourseProps } from "@/schema/courses";
import paginationStyles from "./Pagination.module.css";

type PaginationProps = {
  paginationData: CourseProps[];
  itemsPerPage: number;
};

const CoursesListPaginationComponent: React.FC<PaginationProps> = ({
  paginationData,
  itemsPerPage,
}) => {
  // for storing the current page number for the pagination component
  const [currentPage, setCurrentPage] = useState<number>(0);
  // the data that will be shown after filtering data for each page.
  const [filteredData, setFilteredData] = useState<CourseProps[]>([]);
  // the maximum number of items to show on a page.
  const n: number = itemsPerPage;

  // The data will filter when the user change to a different page. On each page, there will be filtered data for displaying.
  useEffect(() => {
    setFilteredData(
      paginationData.filter((item, index) => {
        return index >= currentPage * n && index < (currentPage + 1) * n;
      })
    );
  }, [currentPage, paginationData, n]);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="w-[980px] flex-col items-center justify-center">
      <div className="w-full grid grid-cols-3 gap-4 place-items-center">
        {filteredData.map((course) => (
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
      <ReactPaginate
        className="flex justify-center items-center gap-10  py-16"
        containerClassName={`${paginationStyles["pagination"]}`}
        pageClassName={`${paginationStyles["page-item"]}`}
        activeClassName={`${paginationStyles["active"]}`}
        onPageChange={handlePageClick}
        pageCount={Math.ceil(paginationData.length / n)}
        breakLabel="..."
        previousLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4.83594 12L11.0429 18.207L12.4569 16.793L7.66394 12L12.4569 7.20697L11.0429 5.79297L4.83594 12ZM10.4859 12L16.6929 18.207L18.1069 16.793L13.3139 12L18.1069 7.20697L16.6929 5.79297L10.4859 12Z"
              fill="#E3E3E3"
            />
          </svg>
        }
        nextLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.1641 12L12.9571 5.79303L11.5431 7.20703L16.3361 12L11.5431 16.793L12.9571 18.207L19.1641 12ZM13.5141 12L7.30706 5.79303L5.89306 7.20703L10.6861 12L5.89306 16.793L7.30706 18.207L13.5141 12Z"
              fill="white"
            />
          </svg>
        }
      />
    </div>
  );
};

export default CoursesListPaginationComponent;
