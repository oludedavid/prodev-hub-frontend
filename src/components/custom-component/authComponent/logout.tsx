/* eslint-disable */
import React from "react";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import axios from "axios";

const cookies = new Cookies();
const baseUrl = `${process.env.NEXT_PUBLIC_PRODEV_HUB_BACKEND_ROOT_URL}/users/logout`;

const LogoutButton = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      // Get the token from cookies
      const token = cookies.get("TOKEN");

      // Send logout request to the backend
      await axios.post(
        baseUrl,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Remove cookies on successful logout
      cookies.remove("TOKEN", { path: "/" });
      cookies.remove("USER", { path: "/" });

      // Reload or navigate to the home page
      if (window.location.pathname === "/") {
        window.location.reload();
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Error during logout", error);
      alert("Error during logout. Please try again.");
    }
  };

  return (
    <button
      onClick={logout}
      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
