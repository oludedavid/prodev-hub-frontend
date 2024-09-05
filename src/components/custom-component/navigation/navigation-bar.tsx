"use client";
import React from "react";
import Logo from "../logo/logo";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import NavigationMenu from "./navigation-menu";
import { LoggedUserProps } from "../layouts/custom-layout";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";

const DesktopNavigationMenu = ({
  loggedUser,
  isCurrentPathName,
}: {
  loggedUser: LoggedUserProps;
  isCurrentPathName: (path: string) => boolean;
}) => {
  return (
    <div>
      <div className="flex flex-row md:justify-around lg:justify-around sm:justify-center items-center w-full h-full">
        <Logo className="text-[25px] font-extrabold" />
        <NavigationMenu
          loggedUser={loggedUser}
          isCurrentPathName={isCurrentPathName}
          className={"flex flex-row items-center justify-center px-2 gap-10 "}
        />
      </div>
      {loggedUser && (
        <p className="text-white text-[14px] text-center font-bold ml-20 py-2">{`Welcome back, ${loggedUser.fullName}!`}</p>
      )}
    </div>
  );
};

const TabletNavigationMenu = ({
  loggedUser,
  isCurrentPathName,
}: {
  loggedUser: LoggedUserProps;
  isCurrentPathName: (path: string) => boolean;
}) => {
  return (
    <div className="w-full h-full  flex flex-row justify-between items-center px-2">
      <Logo className="text-[25px] font-medium " />
      <Sheet>
        <SheetContent className="bg-[#010415] border-none shadow-md">
          <SheetHeader>
            <SheetTitle>
              <div className="w-full flex flex-row items-center justify-between py-8">
                <Logo className="" />
                <Switch className="" id="mode-switcher" />
              </div>
            </SheetTitle>
          </SheetHeader>

          <NavigationMenu
            loggedUser={loggedUser}
            isCurrentPathName={isCurrentPathName}
            className="flex flex-col justify-center items-center gap-12 py-8"
          />
        </SheetContent>
        <SheetTrigger asChild>
          <Button className="bg-transparent">
            <FaBars className="" />
          </Button>
        </SheetTrigger>
      </Sheet>
    </div>
  );
};

const MobileNavigationMenu = ({
  loggedUser,
  isCurrentPathName,
}: {
  loggedUser: LoggedUserProps;
  isCurrentPathName: (path: string) => boolean;
}) => {
  return (
    <div className="w-screen justify-between  flex flex-row px-2">
      <Logo className="text-[20px] font-medium" />
      <Sheet>
        <SheetContent className="bg-[#010415] border-none shadow-md">
          <SheetHeader>
            <SheetTitle>
              <div className="w-full flex flex-row items-center justify-between py-8">
                <Logo className="" />
                <Switch className="" id="mode-switcher" />
              </div>
            </SheetTitle>
          </SheetHeader>

          <NavigationMenu
            loggedUser={loggedUser}
            isCurrentPathName={isCurrentPathName}
            className="flex flex-col justify-center items-center gap-12 py-8"
          />
        </SheetContent>
        <SheetTrigger asChild>
          <Button className="bg-transparent">
            <FaBars className="" />
          </Button>
        </SheetTrigger>
      </Sheet>
    </div>
  );
};

const NavigationBar = ({
  loggedUser,
  isCurrentPathName,
}: {
  loggedUser: LoggedUserProps;
  isCurrentPathName: (path: string) => boolean;
}) => {
  const isMobile = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <nav className="w-screen sm:h-4 lg:h-10 md:h-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-[#10192B] py-12 ">
      {isMobile && (
        <MobileNavigationMenu
          loggedUser={loggedUser}
          isCurrentPathName={isCurrentPathName}
        />
      )}
      {isTablet && (
        <TabletNavigationMenu
          loggedUser={loggedUser}
          isCurrentPathName={isCurrentPathName}
        />
      )}
      {isDesktop && (
        <DesktopNavigationMenu
          loggedUser={loggedUser}
          isCurrentPathName={isCurrentPathName}
        />
      )}
    </nav>
  );
};

export default NavigationBar;
