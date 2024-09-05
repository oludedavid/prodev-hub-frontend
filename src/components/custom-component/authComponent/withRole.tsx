"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, ComponentType } from "react";
import Cookies from "universal-cookie";

// Define the types for the HOC
const withRole = <P extends object>(
  WrappedComponent: ComponentType<P>,
  allowedRoles: string[]
) => {
  return (props: P) => {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
    const cookies = new Cookies();

    useEffect(() => {
      const token = cookies.get("TOKEN");
      const user = cookies.get("USER");
      const userRole = user?.role;

      if (!token) {
        // No token, redirect to login
        router.push("/login");
        return;
      }

      if (!allowedRoles.includes(userRole)) {
        // If the user's role is not allowed, redirect to a 403 page
        router.push("/403");
        return;
      }

      setIsAuthorized(true);
    }, [allowedRoles, router]);

    if (!isAuthorized) return <div>Loading...</div>;

    return <WrappedComponent {...props} />;
  };
};

export default withRole;
