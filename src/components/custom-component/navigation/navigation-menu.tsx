import Link from "next/link";
import { NavigationItemProps } from "@/app/types/navigation-item-props-type";
import { LoggedUserProps } from "../layouts/custom-layout";
import LogoutButton from "../authComponent/logout";

const NavigationItem = ({ active, href, label }: NavigationItemProps) => {
  return (
    <li
      className={`px-2 flex items-center justify-center ${
        active
          ? "border-2 w-auto flex items-center justify-center h-8 rounded-xl"
          : ""
      } md:font-extralight`}
    >
      <Link className="flex items-center justify-center" href={href}>
        {label}
      </Link>
    </li>
  );
};

const NavigationMenu = ({
  loggedUser,
  isCurrentPathName,
  className,
}: {
  loggedUser: LoggedUserProps;
  isCurrentPathName: (path: string) => boolean;
  className?: string;
}) => {
  const name = loggedUser?.fullName;
  const splitName = name?.split(" ");
  const initials = splitName && splitName[0][0] + splitName[1][0];

  return (
    <ul className={`${className}`}>
      <NavigationItem active={isCurrentPathName("/")} href={"/"} label="Home" />
      <NavigationItem
        active={isCurrentPathName("/about")}
        href={"/about"}
        label="About Us"
      />
      <NavigationItem
        active={isCurrentPathName("/learn-with-us/courses")}
        href={"/learn-with-us/courses"}
        label="Learn with us"
      />
      <NavigationItem
        active={isCurrentPathName("/expert-services")}
        href={"/expert-services"}
        label="Expert Services"
      />
      <NavigationItem
        active={isCurrentPathName("/contact-us")}
        href={"/contact-us"}
        label="Contact"
      />

      {loggedUser ? (
        <>
          <NavigationItem
            active={isCurrentPathName(
              `${loggedUser.role === "student" ? "/students" : "/tutors"}`
            )}
            href={`${loggedUser.role === "student" ? "/students" : "/tutors"}`}
            label="Dashboard"
          />
          <LogoutButton />
          <div className="flex flex-row justify-center items-center w-[40px] h-[40px] rounded-full bg-[#DAD7E2]">
            <p className="text-[#663FD6] font-bold text-2xl text-center">
              {initials}
            </p>
          </div>
        </>
      ) : (
        <div className="ml-6 pr-2 flex justify-center items-center gap-4">
          <Link
            className="bg-[#DAD7E2] w-[110px] h-[39px] rounded-[32px] border-[1px solid rgba(230, 230, 230, 0.36)] text-black text-center font-normal p-2"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="bg-gradient-to-r from-[#465BB8] to-[#663FD6] w-[110px] h-[39px] rounded-[32px] font-normal text-center p-2"
            href="/register"
          >
            Signup
          </Link>
        </div>
      )}
    </ul>
  );
};

export default NavigationMenu;
