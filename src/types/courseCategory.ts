import { number } from "zod";

export type CourseCategoryType = {
  id: number;
  name: string;
  numberOfCourses: number;
};
