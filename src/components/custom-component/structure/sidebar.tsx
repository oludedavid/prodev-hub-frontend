import React from "react";
import SideBarMenu from "./sidebar-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { useMediaQuery } from "@/app/hooks/use-media-query";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetFooter,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface SideBarProps {
  children: React.ReactNode;
  className?: string;
}

const SideBar: React.FC<SideBarProps> = ({ children, className }) => {
  const isMobile = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  if (isMobile) {
    return <MobileSideBar>{children}</MobileSideBar>;
  } else if (isTablet) {
    return <TabletSideBar>{children}</TabletSideBar>;
  }

  return <DesktopSideBar className={className}>{children}</DesktopSideBar>;
};

const MobileSideBar: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="" variant="ghost">
          <GiHamburgerMenu />
        </Button>
      </SheetTrigger>
      <SheetContent
        style={{
          background: "rgba(83, 104, 197, 0.31)",
        }}
        className="w-[250px]"
        side={"right"}
      >
        <SideBarMenu className="">{children}</SideBarMenu>
      </SheetContent>
    </Sheet>
  );
};

const TabletSideBar: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <aside
      style={{
        background: "rgba(83, 104, 197, 0.31)",
      }}
      className="w-[250px] h-full border-r-[0.3px] border-solid border-violet-950 flex flex-col"
    >
      <SideBarMenu className="flex flex-col items-center justify-center py-4">
        {children}
      </SideBarMenu>
    </aside>
  );
};

const DesktopSideBar: React.FC<SideBarProps> = ({ children, className }) => {
  return (
    <aside
      style={{
        background: "rgba(83, 104, 197, 0.31)",
      }}
      className={className}
    >
      <SideBarMenu className="flex flex-col items-center justify-center py-4">
        {children}
      </SideBarMenu>
    </aside>
  );
};

export default SideBar;
