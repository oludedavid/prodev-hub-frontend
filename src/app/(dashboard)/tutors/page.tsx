"use client";
import React from "react";
import withRole from "@/components/custom-component/authComponent/withRole";

const TutorPage = () => {
  return <div>Tutor Page</div>;
};

export default withRole(TutorPage, ["tutor"]);
