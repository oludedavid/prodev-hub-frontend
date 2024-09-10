export type CourseOfferedType = {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  imageUrl: string;
  duration: string;
  tutorName: string;
  available: boolean;
  maxNumberOfStudents: number;
  numberOfEnrolledStudents: number;
};
