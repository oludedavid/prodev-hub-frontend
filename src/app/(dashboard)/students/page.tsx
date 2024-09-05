import React from "react";
import withRole from "@/components/custom-component/authComponent/withRole";

// Define the page component
const StudentPage: React.FC = () => {
  return <div>Student Page Content</div>;
};

// Export the component wrapped with `withRole`
export default withRole(StudentPage, ["student"]);
