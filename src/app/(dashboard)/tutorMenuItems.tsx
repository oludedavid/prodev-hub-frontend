import { MdOutlineDashboard } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { PiBookOpenUserBold } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { CiWallet } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";

type TutorPageMenuItemProps = {
  name: string;
  iconUrl: React.ReactNode;
  path: string;
};

export const tutorMenuItems: TutorPageMenuItemProps[] = [
  {
    name: "Dashboard",
    iconUrl: <MdOutlineDashboard className="h-[18px] w-[18px]" />,
    path: "/tutors",
  },
  {
    name: "My Profile",
    iconUrl: <IoPerson className="h-[18px] w-[18px]" />,
    path: "/tutors/tutors-profile",
  },
  {
    name: "My Course",
    iconUrl: <PiBookOpenUserBold className="h-[18px] w-[18px]" />,
    path: "/tutors/tutors-courses",
  },
  {
    name: "My Students",
    iconUrl: <PiStudent className="h-[18px] w-[18px]" />,
    path: "/tutors/tutors-student",
  },
  {
    name: "Wallet",
    iconUrl: <CiWallet className="h-[18px] w-[18px]" />,
    path: "/tutors/tutors-wallet",
  },
  {
    name: "Logout",
    iconUrl: <FiLogOut className="h-[18px] w-[18px]" />,
    path: "/logout",
  },
];
