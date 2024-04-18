"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navlinks = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Career",
      link: "/career",
    },
    {
      title: "Blogs",
      link: "/blogs",
    },
    {
      title: "About Us",
      link: "/aboutus",
    },
  ];

  // Track scrolling and update header visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If the user is scrolling down, hide the header
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  console.log(lastScrollY);
  console.log(isHeaderVisible);

  const handleToggle = () => {
    console.log("click");
    setToggle((toggle) => !toggle);
  };

  return (
    <nav className={` w-full`}>
      {/* <div className=" text-sm font-semibold     bg-red-400 bg-opacity-50 "> */}
      {/* ${isHeaderVisible ? " translate-y-0" : "   -translate-y-32"} */}
      <div
        className={`   transition-all duration-300 ease-linear   flex  items-center  py-3 p-2  px-6   backdrop-blur-md overflow-hidden  bg-header-bg bg-opacity-15 w-full justify-between  fixed top-0 left-0 z-[9999999]`}
      >
        <div className=" flex  items-center gap-4 ">
          <Image src="/logo.png" width={50} height={50} alt="logo" />
          <p className=" tracking-wide  font-semibold text-2xl  sm:text-3xl   font-exo ">
            MetaLogic
          </p>
        </div>
        {/* <div className=""> */}
        <ul className="   gap-6 md:flex hidden  text-black font-semibold">
          {navlinks?.map((link, index) => {
            return (
              <li key={index} className="hoverUnderline">
                <Link href={link?.link}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
        {/* </div> */}
        <div className=" hidden md:block">
          <Link
            href={"#"}
            className="  text-white px-3 py-2   rounded-md bg-strong-red"
          >
            Get in Touch
          </Link>
        </div>
        <div
          onClick={handleToggle}
          className="   block md:hidden cursor-pointer text-primary-red"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu "
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </div>
      </div>
      <div
        className={` transition-all overflow-hidden duration-500 ease-in-out fixed  z-[9999999999] h-screen w-screen bg-white md:hidden pt-52 -translate-x-[100%]   ${
          toggle && "translate-x-0  bg-opacity-100 "
        }   `}
      >
        <button
          onClick={handleToggle}
          className="  absolute right-6 top-4 text-primary-red"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x "
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
        <ul className="  flex flex-col gap-8 text-center font-semibold">
          {navlinks?.map((link, index) => {
            return (
              <li key={index}>
                <Link href={link?.link}>{link.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className=" md:hidden block mx-auto text-center mt-4">
          <button className=" text-white px-3 py-1 rounded-md bg-primary-red">
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
}
