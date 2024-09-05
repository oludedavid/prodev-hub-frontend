"use client";
import React from "react";
import withRole from "@/components/custom-component/authComponent/withRole";

const StudentPage = () => {
  return <div>Welcome to the Student Dashboard</div>;
};

export default withRole(StudentPage, ["student"]);
