type ReviewProps = {
  id: number;
  rating: number;
  text: string;
  avatarUrl: string;
  reviewerName: string;
};

export type CourseProps = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  numberOfReviews: number;
  numberOfRatings: number;
  numberOfHours: number;
  reviews?: ReviewProps[];
  numberOfLessons: number;
  curriculums: string[];
  rating: number;
  overview: string;
  courseLevel:
    | "Beginner"
    | "Intermediate"
    | "Advanced"
    | "Expert"
    | "All Levels";
  category: string;
  price: number;
  isFree: boolean;
  isPopular: boolean;
  isBestseller: boolean;
  numberOfStudents: number;
  isNew: boolean;
  startDate: string;
  endDate: string;
  isAvailable: boolean;
  tutor: string;
  language: string;
};
