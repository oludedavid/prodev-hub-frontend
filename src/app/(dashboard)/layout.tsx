"use client";
import "../globals.css";
import React from "react";
import withRole from "@/components/custom-component/authComponent/withRole";
import Footer from "@/components/custom-component/structure/footer";
import SideBar from "@/components/custom-component/structure/sidebar";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/custom-component/logo/logo";
import Head from "next/head";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { studentMenuItems } from "./studentMenuItems";
import { tutorMenuItems } from "./tutorMenuItems";
import { SidebarMenuItemProps } from "./studentMenuItems";
import { useMediaQuery } from "@/app/hooks/use-media-query";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  let sidebarMenuItems: SidebarMenuItemProps[] = [];

  if (pathname.startsWith("/students")) {
    sidebarMenuItems = studentMenuItems;
  } else if (pathname.startsWith("/tutors")) {
    sidebarMenuItems = tutorMenuItems;
  }

  return (
    <html lang="en">
      <Head>
        <title>Dashboard</title>
      </Head>

      <body>
        <div className="min-h-screen flex flex-col">
          {isMobile && (
            <MobileDashboardLayout sidebarMenuItems={sidebarMenuItems}>
              {children}
            </MobileDashboardLayout>
          )}
          {isTablet && (
            <TabletDashboardLayout sidebarMenuItems={sidebarMenuItems}>
              {children}
            </TabletDashboardLayout>
          )}
          {isDesktop && (
            <DesktopDashboardLayout sidebarMenuItems={sidebarMenuItems}>
              {children}
            </DesktopDashboardLayout>
          )}
        </div>
      </body>
    </html>
  );
};

const DesktopDashboardLayout: React.FC<{
  children: React.ReactNode;
  sidebarMenuItems: SidebarMenuItemProps[];
}> = ({ children, sidebarMenuItems }) => {
  return (
    <>
      <div className="flex flex-1">
        <SideBar className="w-[285px] h-[calc(100vh-85px)] fixed top-0 left-0 border-r-[0.3px] border-solid border-violet-950 flex flex-col">
          <Logo className="text-[30px] font-medium" />
          <div className="flex flex-col gap-20 py-6">
            {sidebarMenuItems.map((item) => (
              <li key={item.name} className="flex items-center space-x-2">
                <Link
                  href={item.path}
                  className="flex items-center space-x-2 text-white text-[18px] font-medium"
                >
                  {item.iconUrl}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </div>
        </SideBar>
        <main className="flex-1 py-6 pl-80">{children}</main>
      </div>
      <Separator className="my-0.8 bg-slate-800" orientation="horizontal" />
      <div className="w-full flex flex-col gap-2 items-center justify-center p-8">
        <p className="text-white text-[14px] font-thin">
          &copy; 2024 Prodev Hub. All rights reserved.
        </p>
      </div>
    </>
  );
};

const TabletDashboardLayout: React.FC<{
  children: React.ReactNode;
  sidebarMenuItems: SidebarMenuItemProps[];
}> = ({ children, sidebarMenuItems }) => {
  return (
    <>
      <div className="flex flex-1">
        <SideBar className="w-[250px] h-screen fixed top-0 left-0 border-r-[0.3px] border-solid border-violet-950 flex flex-col">
          <Logo className="text-[30px] font-medium" />
          <div className="flex flex-col gap-20 py-6">
            {sidebarMenuItems.map((item) => (
              <li key={item.name} className="flex items-center space-x-2">
                <Link
                  href={item.path}
                  className="flex items-center space-x-2 text-white text-[18px] font-medium"
                >
                  {item.iconUrl}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </div>
        </SideBar>
        <main className="flex-1 py-6 pl-72">{children}</main>
      </div>
      <Separator className="my-0.8 bg-slate-800" orientation="horizontal" />
      <div className="w-full flex flex-col gap-2 items-center justify-center p-8">
        <p className="text-white text-[14px] font-thin">
          &copy; 2024 Prodev Hub. All rights reserved.
        </p>
      </div>
    </>
  );
};

const MobileDashboardLayout: React.FC<{
  children: React.ReactNode;
  sidebarMenuItems: SidebarMenuItemProps[];
}> = ({ children, sidebarMenuItems }) => {
  return (
    <div className="flex flex-col">
      <nav className="px-2 py-2 w-screen h-[60px] flex flex-row justify-between backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
        <Logo />
        <SideBar className="w-[285px] h-screen fixed top-0 left-0 border-r-[0.3px] border-solid border-violet-950 flex flex-col">
          <Logo className="text-[30px] font-medium" />
          <div className="flex flex-col gap-20 py-6">
            {sidebarMenuItems.map((item) => (
              <li key={item.name} className="flex items-center space-x-2">
                <Link
                  href={item.path}
                  className="flex items-center space-x-2 text-white text-[18px] font-medium"
                >
                  {item.iconUrl}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </div>
        </SideBar>
      </nav>
      <main className="flex-1 p-4">{children}</main>
      <div className="w-full flex flex-col gap-2 items-center justify-center p-8">
        <p className="text-white text-[14px] font-thin">
          &copy; 2024 Prodev Hub. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default withRole(DashboardLayout, ["student", "tutor"]);
