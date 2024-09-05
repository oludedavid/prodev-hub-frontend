import React from "react";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

const cookies = new Cookies();

const LogoutButton = () => {
  const router = useRouter();

  const logout = () => {
    // Remove cookies on logout
    cookies.remove("TOKEN", { path: "/" });
    cookies.remove("USER", { path: "/" });

    if (window.location.pathname === "/") {
      window.location.reload();
    } else {
      // Otherwise, navigate to the home page
      router.push("/");
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
