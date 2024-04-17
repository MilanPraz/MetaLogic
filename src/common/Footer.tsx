import { companyArray, joinArray, servicesArray } from "@/utils/FooterArray";
import Image from "next/image";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className=" w-full px-4 pb-8 pt-24 bg-dark-blue-bg text-white md:px-16">
        <div className=" flex flex-col justify-between gap-y-8 lg:flex-row">
          {/* COMPANY LOGO */}
          <div className=" flex flex-col  items-start gap-4 md:flex-row lg:gap-2">
            <div className="mt-8 flex items-start justify-start gap-2 md:mt-0">
              <Image
                src="/logo.png"
                width={50}
                height={50}
                alt="logo"
                className=" w-[50px]"
              />
              <h1 className=" mb-4 flex flex-col text-2xl font-bold  md:hidden">
                <span className=" tracking-widest">MetaLogic</span>
                <span className="text-xs font-normal">
                  Software Private Limited
                </span>
              </h1>
            </div>
            {/* COMPANY LOGO, NAME AND CONTACT DETAILS */}
            <div className="flex w-full flex-col justify-between md:flex-row lg:flex-col">
              <h1 className=" mb-4 md:flex md:flex-col text-2xl font-bold hidden ">
                <span className=" tracking-widest">MetaLogic</span>
                <span className="text-xs font-normal">
                  Software Private Limited
                </span>
              </h1>
              <ul className=" flex flex-col gap-2 text-sm">
                <li className=" flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin "
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Saptakhel, Lalitpur &#40;Head office&#41;
                </li>
                <li className=" flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone "
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  + 977 9851353599
                </li>
                <li className=" flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-mail "
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  info@metalogic.com.np
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex flex-col gap-y-8 md:mx-auto md:gap-8 md:flex-row lg:gap-16">
            <div>
              <h3 className=" mb-2 font-semibold">Company</h3>
              <ul className=" flex flex-col gap-2 text-xs">
                {companyArray.map((el, index) => (
                  <li key={index}>
                    <a href="#">{el.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className=" mb-2 font-semibold">Services</h3>
              <ul className=" flex flex-col gap-2 text-xs">
                {servicesArray.map((el, index) => (
                  <li key={index + 1}>
                    <a href="#">{el.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className=" mb-2 font-semibold">Services</h3>
              <ul className=" flex flex-col gap-2 text-xs">
                {joinArray.map((el, index) => (
                  <li key={index}>
                    <a href="#">{el.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className=" mb-2 font-semibold">Services</h3>
              <ul className=" flex  text-2xl gap-3">
                <li className=" border-2 border-white rounded-full p-2">
                  <a href="#">
                    <BsWhatsapp />
                  </a>
                </li>
                <li className=" border-2 border-white rounded-full p-2">
                  <a href="#">
                    <FiFacebook />
                  </a>
                </li>
                <li className=" border-2 border-white rounded-full p-2">
                  <a href="#">
                    <IoLogoInstagram />
                  </a>
                </li>
                <li className=" border-2 border-white rounded-full p-2">
                  <a href="#">
                    <FiLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </footer>
    </>
  );
}
