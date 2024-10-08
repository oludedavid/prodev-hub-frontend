"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const VerifyEmailContent = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [statusState, setStatusState] = useState(false);
  const [status, setStatus] = useState("Verifying...");

  useEffect(() => {
    if (token) {
      axios
        .get(
          `${process.env.NEXT_PUBLIC_PRODEV_HUB_BACKEND_ROOT_URL}/users/verify-email?token=${token}`
        )
        .then((response) => {
          setStatus("Email verified successfully! You can now log in.");
          setStatusState(true);
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
    <div className="flex flex-col items-center justify-center min-h-screen w-screen py-14">
      <h1>Welcome to Proddev Hub Nexus! 🎉😊🎊</h1>
      <p>
        {statusState && (
          <>
            <p>Your Email as been verified successfully 🎉😊🎊.</p>
            <Button className="mt-4 rounded-md text-white text-lg">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
      </p>
    </div>
  );
};

const VerifyEmail = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailContent />
    </Suspense>
  );
};

export default VerifyEmail;
