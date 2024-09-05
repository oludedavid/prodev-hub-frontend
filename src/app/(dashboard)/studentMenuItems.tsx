import { MdOutlineDashboard } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { PiBookOpenUserBold } from "react-icons/pi";
import { TbCertificate } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { GiSpellBook } from "react-icons/gi";

export type SidebarMenuItemProps = {
  name: string;
  iconUrl: React.ReactNode;
  path: string;
};

export const studentMenuItems: SidebarMenuItemProps[] = [
  {
    name: "Dashboard",
    iconUrl: <MdOutlineDashboard className="h-[18px] w-[18px]" />,
    path: "/students",
  },
  {
    name: "My Profile",
    iconUrl: <IoPerson className="h-[18px] w-[18px]" />,
    path: "/students/profile",
  },
  {
    name: "Course",
    iconUrl: <PiBookOpenUserBold className="h-[18px] w-[18px]" />,
    path: "/students/courses",
  },
  {
    name: "Enrolled Courses",
    iconUrl: <GiSpellBook className="h-[18px] w-[18px]" />,
    path: "/students/enrolled-courses",
  },
  {
    name: "Certifications",
    iconUrl: <TbCertificate className="h-[18px] w-[18px]" />,
    path: "/students/certifications",
  },
  {
    name: "Logout",
    iconUrl: <FiLogOut className="h-[18px] w-[18px]" />,
    path: "/logout", // Adjust the path as needed
  },
];
