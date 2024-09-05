"use client";

import React from "react";
import TopClassCoursesContainer from "@/components/custom-component/home/top-class-section";
import Hero from "@/components/custom-component/home/hero-section";
import ExpertServicesSection from "@/components/custom-component/home/expert-services-section";
import BecomeAnInstructorSection from "@/components/custom-component/home/become-an-instructor-section";
import ReviewSection from "@/components/custom-component/home/review-section";
import CallToAction from "@/components/custom-component/home/call-to-action";
import { ExpertService } from "@/types/expertService";
import { Review } from "@/types/review";
import { courseCategoriesData } from "@/data/courseCategories";

const expertServices: ExpertService[] = [
  {
    id: 1,
    name: "John Reynolds",
    title: "Full-Stack Web Developer & Instructor",
    rating: 4.5,
    imageUrl: "/images/card-person.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Data Scientist & AI Expert",
    rating: 4.7,
    imageUrl: "/images/card-person2.png",
  },
  {
    id: 3,
    name: "Alice Johnson",
    title: "Mobile App Developer",
    rating: 4.8,
    imageUrl: "/images/card-person3.png",
  },
  {
    id: 4,
    name: "Michael Brown",
    title: "Cyber Security Specialist",
    rating: 4.3,
    imageUrl: "/images/card-person4.png",
  },
  {
    id: 5,
    name: "Emily Davis",
    title: "DevOps Engineer",
    rating: 4.6,
    imageUrl: "/images/card-person.png",
  },
  {
    id: 6,
    name: "David Wilson",
    title: "Cloud Computing Expert",
    rating: 4.9,
    imageUrl: "/images/card-person2.png",
  },
  {
    id: 7,
    name: "Emma Martinez",
    title: "Machine Learning Engineer",
    rating: 4.7,
    imageUrl: "/images/card-person3.png",
  },
];

const reviews: Review[] = [
  {
    id: 1,
    rating: 5,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    avatarUrl: "/images/avatar.png",
    reviewerName: "John Doe",
  },
  {
    id: 2,
    rating: 4.5,
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatarUrl: "/images/avatar.png",
    reviewerName: "Jane Smith",
  },
];

export default function Home() {
  return (
    <main className="md:py-8 lg:py-8 lg:px-40 sm:px-3 sm:py-3  md:px-40">
      <Hero />
      <TopClassCoursesContainer courseCategory={courseCategoriesData} />
      <ExpertServicesSection experts={expertServices} />
      <BecomeAnInstructorSection />
      <ReviewSection reviews={reviews} />
      <CallToAction />
    </main>
  );
}
