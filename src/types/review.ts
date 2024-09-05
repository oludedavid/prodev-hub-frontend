// src/app/propTypes/reviews.ts
export type Review = {
  id: number;
  rating: number;
  text: string;
  avatarUrl: string;
  reviewerName: string;
};

export type ReviewSectionProps = {
  reviews: Review[];
};
