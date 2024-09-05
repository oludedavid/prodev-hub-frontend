"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, ComponentType } from "react";
import Cookies from "universal-cookie";

// Define the types for the HOC
const withRole = <P extends object>(
  WrappedComponent: ComponentType<P>,
  allowedRoles: string[]
) => {
  const HOC = (props: P) => {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
    const [isClient, setIsClient] = useState(false);
    const cookies = new Cookies();

    useEffect(() => {
      setIsClient(true);
    }, []);

    useEffect(() => {
      if (isClient) {
        const token = cookies.get("TOKEN");
        const user = cookies.get("USER");
        const userRole = user?.role;

        if (!token) {
          router.push("/login");
          return;
        }

        if (!allowedRoles.includes(userRole)) {
          router.push("/403");
          return;
        }

        setIsAuthorized(true);
      }
    }, [router, isClient, cookies]);

    if (!isAuthorized) return <div>Loading...</div>;

    return isClient ? <WrappedComponent {...props} /> : null;
  };

  HOC.displayName = `withRole(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return HOC;
};

export default withRole;
