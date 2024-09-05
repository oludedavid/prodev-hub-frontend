"use client";
import React from "react";
import withRole from "@/components/custom-component/authComponent/withRole";

// The page component
const StudentPage = () => {
  return <div>Student Page Content</div>;
};

// Wrapping the component with `withRole`
export default withRole(StudentPage, ["student"]);
