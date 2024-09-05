import React from "react";
import Logo from "../logo/logo";
import Link from "next/link";
import { Button } from "../../ui/button";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = ({
  isDesktop,
  isMobile,
  isTablet,
}: {
  isDesktop: boolean;
  isMobile: boolean;
  isTablet: boolean;
}) => {
  const MobileFooter = () => {
    return (
      <footer className="md:w-screen lg:w-screen  pt-10">
        <div className="w-full flex  px-4">
          <Logo className="text-[25px] font-extrabold justify-start" />
          <ul className="w-2/3 flex flex-col gap-4 justify-around items-center flex-wrap">
            <li>
              <Link className="font-bold" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-bold" href="/courses">
                Courses
              </Link>
            </li>
            <div className=" flex flex-col gap-4 justify-start items-center ">
              <h3 className="font-bold">Newsletter</h3>
            </div>
          </ul>
        </div>
        <div className="relative w-screen h-10p-3 flex items-center justify-center  gap-2">
          <input
            className="bg-transparent border border-white w-full h-10 px-4 rounded-xl text-white font-thin text-[14px]"
            type="email"
            placeholder="Email Address"
          />
          <div className="absolute right-3 top-1 w-20 h-10 ">
            <Button className="w-full h-8 rounded-2xl text-[12px] p-1 z-10 bg-gradient-to-r from-[#465BB8] to-[#663FD6]">
              Sign up
            </Button>
          </div>
        </div>
        <p className="text-white text-[14px] font-thin w-full flex justify-center pt-10">
          &copy; 2021 Prodev Hub. All rights reserved.
        </p>
      </footer>
    );
  };

  const TabletFooter = () => {
    return (
      <footer className="w-screen pt-10">
        <div className="w-full flex flex-row justify-around items-center ">
          <Logo className="text-[25px] font-extrabold justify-start" />
          <ul className="w-2/3 flex flex-row gap-4 justify-around">
            <li>
              <Link className="font-bold" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-bold" href="/courses">
                Courses
              </Link>
            </li>
            <div className="flex flex-row gap-4 justify-start items-start">
              <h3 className="font-bold">Newsletter</h3>
              <div className="relative w-2/3 h-10 flex flex-row justify-start items-center gap-2">
                <input
                  className="bg-transparent border border-white w-full h-10 px-4 rounded-xl text-white font-thin text-[14px]"
                  type="email"
                  placeholder="Email Address"
                />
                <div className="absolute right-1 top-1 w-20 h-10 ">
                  <Button className="w-full h-8 rounded-2xl text-[12px] p-1 z-10 bg-gradient-to-r from-[#465BB8] to-[#663FD6]">
                    Sign up
                  </Button>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <p className="text-white text-[14px] font-thin w-full flex justify-center pt-10">
          &copy; 2021 Prodev Hub. All rights reserved.
        </p>
      </footer>
    );
  };

  const DesktopFooter = () => {
    return (
      <footer className="w-screen h-[260px] pl-12">
        <div className={` w-full h-full bg-[#010415]  pt-10 px-20`}>
          <div className="w-full h-full flex flex-row justify-around items-center">
            <div className="w-1/4 h-full ">
              <Logo className="text-[25px] font-extrabold justify-start" />
              <p className="font-thin w-2/3  text-[14px] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                eum ut pariatur facere vero illum earum corporis, facilis, error
                modi atque quam facilis.
              </p>

              <div className="pt-2">
                <ul className="flex gap-4">
                  <li>
                    <Link href="/">
                      <FaInstagram className="text-white" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <FaFacebook className="text-white" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <FaTwitter className="text-white" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-full">
              <ul className="font-thin flex flex-col gap-1  text-[14px]">
                <li>
                  <Link className="font-bold" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about">About us</Link>
                </li>
                <li>
                  <Link href="/expert-services">Services</Link>
                </li>
                <li>
                  <Link href="/contac-ust">Contact</Link>
                </li>
                <li>
                  <Link href="/help-center">Help center</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy policy</Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions">Terms and conditions</Link>
                </li>
              </ul>
            </div>
            <div className="h-full">
              <ul className="font-thin flex flex-col gap-1 justify-start items-start text-[14px]">
                <li>
                  <Link className="font-bold" href="/courses">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/courses/web-development">Web Developement</Link>
                </li>
                <li>
                  <Link href="/courses/mobile-app-development">
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link href="/courses/graphics-design">Graphics Design</Link>
                </li>
                <li>
                  <Link href="/courses/digital-marketing">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/courses/seo">SEO</Link>
                </li>
              </ul>
            </div>
            <div className="h-full font-thin  text-[14px] flex flex-col gap-2 justify-start items-start">
              <h3 className="font-bold">Join Our Newsletter</h3>
              <p className="w-2/3 ">
                Subscribe to our newsletter to get updates on our latest offers!
              </p>
              <div className="relative w-2/3 h-10 flex flex-row justify-start items-center gap-2">
                <input
                  className="bg-transparent border border-white w-full h-10 px-4 rounded-xl text-white font-thin text-[14px]"
                  type="email"
                  placeholder="Email Address"
                />
                <div className="absolute right-1 top-1 w-20 h-10 ">
                  <Button className="w-full h-8 rounded-2xl text-[12px] p-1 z-10 bg-gradient-to-r from-[#465BB8] to-[#663FD6]">
                    Sign up
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 items-center justify-center">
            <hr className="w-5/6 mr-32" />
            <p className="text-white text-[14px] font-thin">
              &copy; 2024 Prodev Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <>
      {isMobile && <MobileFooter />}
      {isTablet && <TabletFooter />}
      {isDesktop && <DesktopFooter />}
    </>
  );
};

export default Footer;
