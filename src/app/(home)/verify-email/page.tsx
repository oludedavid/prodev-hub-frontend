"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const VerifyEmail = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState("Verifying...");

  useEffect(() => {
    if (token) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_PRODEV_HUB_BACKEND_API_URL}/verify-email?token=${token}`
        )
        .then((response) => {
          setStatus("Email verified successfully! You can now log in.");
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.data.message === "User is already verified."
          ) {
            setStatus("Your email is already verified.");
          } else {
            setStatus(
              "Email verification failed. The token may be expired or invalid."
            );
          }
        });
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Email Verification</h1>
      <p>{status}</p>
    </div>
  );
};

export default VerifyEmail;
