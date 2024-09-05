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
    const [isLoading, setIsLoading] = useState(true);
    const cookies = new Cookies();

    useEffect(() => {
      // Perform client-side role check
      const token = cookies.get("TOKEN");
      const user = cookies.get("USER");
      const userRole = user?.role;

      // Redirect to login if no token is found
      if (!token) {
        router.push("/login");
        return;
      }

      // Check if the user's role is allowed
      if (!allowedRoles.includes(userRole)) {
        router.push("/403");
        return;
      }

      // Set authorization to true and stop loading
      setIsAuthorized(true);
      setIsLoading(false);
    }, [router, allowedRoles, cookies]);

    // Render loading while waiting for auth check
    if (isLoading) {
      return <div>Loading...</div>;
    }

    // Render the component if authorized
    return isAuthorized ? <WrappedComponent {...props} /> : null;
  };
};

export default withRole;
