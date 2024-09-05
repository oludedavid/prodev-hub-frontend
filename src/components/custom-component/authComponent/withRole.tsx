import { useRouter } from "next/router";
import { useEffect, useState, ComponentType } from "react";
import Cookies from "universal-cookie";

const withRole = <P extends object>(
  WrappedComponent: ComponentType<P>,
  allowedRoles: string[]
) => {
  const HOC = (props: P) => {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
    const cookies = new Cookies();

    useEffect(() => {
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
    }, [router]);

    if (!isAuthorized) return <div>Loading...</div>;

    return <WrappedComponent {...props} />;
  };

  // Adding displayName to the HOC
  HOC.displayName = `withRole(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return HOC;
};

export default withRole;
