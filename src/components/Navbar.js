import logo from "./images/logo.png"
import { Menu } from "@headlessui/react";
import i18n from "../i18";
import { useContext } from "react";
import { Context } from "./Context";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  useContext(Context);
  const location = useLocation();

  function MyDropdown() {
    return (
      <Menu className="md:hidden">
        <div className="w-[100%]">
          <Menu.Button>
            <i className="fa-solid fa-2xl fa-bars absolute right-[50px] top-[55px] text-white"></i>
          </Menu.Button>
          <Menu.Items className="list-none flex flex-col pr-[20px] text-right bg-gray-100 text-black text-xl font-[myriadREgular]">
            <Menu.Item className="py-4 ">
              {({ active }) => (
                <a href="/join-as-a-patient" className={`${active}`}>
                  {i18n.gettext("joinPatient")}
                </a>
              )}
            </Menu.Item>
            <Menu.Item className="py-4">
              {({ active }) => (
                <a href="/join-as-a-doctor" className={`${active}`}>
                  {i18n.gettext("joinDoctor")}
                </a>
              )}
            </Menu.Item>
            <Menu.Item className="py-4">
              {({ active }) => (
                <a rel="noreferrer" href="/about-us" className={`${active}`}>
                  {i18n.gettext("aboutUs")}
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </div>
      </Menu>
    );
  }

  return (
    <div className="bg-[#323239] text-white font-[myriadRegular]">
      <div className="md:flex md:items-center md:justify-between md:pr-10 md:pl-6">
        <div>
          <div className="flex">
            <div className="pt-[20px]">
              <img
                src={logo}
                alt="User Profile"
                className="w-[4rem] mx-[15px]"
              />
            </div>
            <div className="text-[1.5rem] pb-[20px] pt-[40px] font-[myriadRegular] md:pb-[30px]">
              <p>CHAT APP</p>
              {/* <p>{i18n.gettext("clinicOfTheFuture")}</p> */}
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center justify-end gap-1 text-2xl xl:gap-10">
            <Link
              to="/"
              className={`py-1 px-5 ${
                location.pathname === "/" && "bg-[#D55E00]"
              }`}
            >
              {i18n.gettext("home")}
            </Link>
            <Link
              to="/join-as-a-patient"
              className={`py-1 px-5 ${
                location.pathname === "/join-as-a-patient" && "bg-[#D55E00]"
              }`}
            >
              {i18n.gettext("forPatients")}
            </Link>
            <Link
              to="/join-as-a-doctor"
              className={`py-1 px-5 ${
                location.pathname === "/join-as-a-doctor" && "bg-[#D55E00]"
              }`}
            >
              {i18n.gettext("forDoctors")}
            </Link>
            <Link
              to="/about-us"
              className={`py-1 px-5 ${
                location.pathname === "/about-us" && "bg-[#D55E00]"
              }`}
            >
              {i18n.gettext("about")}
            </Link>
            <div className="hidden lg:flex gap-2 pl-10">
              <i className="fa-md fa-brands fa-facebook"></i>
              <i className="fa-md fa-brands fa-twitter px-[10px]"></i>
              <i className="fa-md fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
      <MyDropdown />
    </div>
  );
}

export default Navbar;
