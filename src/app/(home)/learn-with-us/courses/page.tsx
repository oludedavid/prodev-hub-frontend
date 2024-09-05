import BackgroundRectPattern from "@/components/custom-component/background/backgroundRect";
import SearchBar from "@/components/custom-component/structure/search-bar";
import { coursesData } from "@/data/coursesData";
import { courseCategoriesData } from "@/data/courseCategories";
import CoursesListPaginationComponent from "@/components/custom-component/pagination/course-list-pagination";
import CallToAction from "@/components/custom-component/callToAction/call-to-action";

export default function LearnWithUsPage() {
  // Extract unique course categories from the data
  const uniqueCategories = Array.from(
    new Set(courseCategoriesData.map((courseCategory) => courseCategory.name))
  );

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
          <SearchBar courseCategories={uniqueCategories} />
        </div>
      </div>

      {/* list of courses */}
      <div className="w-full flex items-center justify-center py-4">
        <CoursesListPaginationComponent
          itemsPerPage={6}
          paginationData={coursesData}
        />
      </div>

      {/* call to action */}
      <div className="w-full flex items-center justify-center py-24">
        <CallToAction />
      </div>
    </div>
  );
}
