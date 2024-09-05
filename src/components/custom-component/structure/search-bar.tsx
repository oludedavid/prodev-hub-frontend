"use client";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchBarProps {
  courseCategories: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ courseCategories = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex px-4 items-center justify-between w-[489px] h-[43px] relative bg-transparent rounded-[39px] border-[0.4px] border-gray-700">
      <Select onValueChange={handleCategoryChange}>
        <SelectTrigger className="w-[130px] py-2 px-2 h-[20px] border-none">
          <SelectValue placeholder="Categories" />
        </SelectTrigger>
        <SelectContent
          style={{
            background:
              "linear-gradient(90deg, rgba(70, 91, 184, 1) 0%, rgba(102, 63, 214, 1) 100%)",
          }}
          className="max-w-fit border-none"
        >
          <SelectGroup>
            <SelectLabel className="border-none">Courses</SelectLabel>
            {courseCategories.map((category) => (
              <SelectItem
                className="cursor-pointer "
                key={category}
                value={category}
              >
                {category}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input
        type="text"
        className="flex items-center justify-center w-2/3 h-full border-none bg-transparent placeholder:text-gray-500 text-white focus:outline-none"
        placeholder="Find your course.."
      />
      <Button
        style={{
          background:
            "linear-gradient(90deg, rgba(70, 91, 184, 1) 0%, rgba(102, 63, 214, 1) 100%)",
        }}
        type="submit"
        className="absolute right-0 w-[40px] h-[40px] rounded-full grid place-items-center"
        variant="secondary"
      >
        <IoMdSearch
          style={{
            color: "rgba(255, 255, 255, 1)",
          }}
          className="w-6 h-6"
        />
      </Button>
    </div>
  );
};

export default SearchBar;
