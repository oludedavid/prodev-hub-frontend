"use client";
import React from "react";
import NavigationBar from "../navigation/navigation-bar";
import Footer from "../structure/footer";
import { useMediaQuery } from "@/hooks/use-media-query";
import Cookies from "universal-cookie";

export type LoggedUserProps = {
  id: string;
  fullName: string;
  email: string;
  permissions: string[];
  role: string;
};
type CustomLayoutProps = {
  loggedUser: LoggedUserProps;
  children: React.ReactNode;
  isCurrentPathName: (path: string) => boolean;
};

const CustomLayout: React.FC<CustomLayoutProps> = ({
  children,
  isCurrentPathName,
  loggedUser,
}) => {
  const isMobile = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="w-full h-full flex flex-col">
      <NavigationBar
        loggedUser={loggedUser}
        isCurrentPathName={isCurrentPathName}
      />
      <main>{children}</main>
      <Footer isMobile={isMobile} isDesktop={isDesktop} isTablet={isTablet} />
    </div>
  );
};

export default CustomLayout;
