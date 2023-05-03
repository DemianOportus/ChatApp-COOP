import { useContext } from "react";
import { Context } from "../components/Context";

import i18n from "../i18";
// import profile from "./images/profile.png";
import logo from "./images/logo.png"

function Footer() {
  useContext(Context);
  const date = new Date();
  let thisYear = date.getFullYear();

  return (
    <div className=" bg-myFooterBlue font-raleway pt-7">
      <div className="flex justify-between px-[30px] pb-[15px] md:justify-evenly text-myDefaultGrey">
        <div>
          <p className="uppercase font-[myriadBold]">
            {i18n.gettext("contactUs")}
          </p>
          <p className="font-[myriadLight]">info@chat.ottawa.com </p>
          <p className="font-[myriadLight]">613.789.9090</p>
        </div>
        <div>
          <p className="uppercase font-bold">{i18n.gettext("findUsOn")}</p>
          <div className="text-center text-myDefaultGrey">
            <i className="fa-xl fa-brands fa-facebook"></i>
            <i className="fa-xl fa-brands fa-twitter px-[10px]"></i>
            <i className="fa-xl fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="hidden md:flex justify-center ">
          <div className="">
            <img
              src={logo}
              alt="User Profile"
              className="w-[4rem] mx-[15px]"
            />
          </div>
          <div className="text-lg font-[myriadBold] pb-[0px] pt-[30px] text-myDefaultGrey">
            <p>CHAT App</p>
            {/* <hr className="border-black" /> */}
            {/* <p>{i18n.gettext("clinicOfTheFuture")}</p> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center md:hidden">
        <div className="pt-[25px]">
          <img
            src={logo}
            alt="User Profile"
            className="w-[4rem] mx-[15px]"
          />
        </div>
        <div className="text-lg font-[myriadBold] pb-[0px] pt-[30px] text-myDefaultGrey">
          <p>CHAT APP</p>
          {/* <hr className="border-black" /> */}
          {/* <p>{i18n.gettext("clinicOfTheFuture")}</p> */}
        </div>
      </div>
      <div className="text-center mt-7 bg-[#323239] text-white pt-[20px] pb-[50px]">
        <div className="md:flex justify-center gap-10">
          <p className="uppercase pb-[10px]">
            <a
              rel="noreferrer"
              href="/join-as-a-patient"
              className="hover:text-blue-600"
            >
              {" "}
              {i18n.gettext("joinPatient")}
            </a>{" "}
            /
            <a
              rel="noreferrer"
              href="/join-as-a-doctor"
              className="hover:text-blue-600"
            >
              {" "}
              {i18n.gettext("joinDoctor")}
            </a>
          </p>
          <p className="uppercase pb-[10px]">
            <a rel="noreferrer" href="/about-us" className="hover:text-blue-600">
              {i18n.gettext("aboutUs")}
            </a>
            /{" "}
            <a
              rel="noreferrer"
              href="/data-privacy"
              className="hover:text-blue-600"
            >
              {i18n.gettext("dataPrivacyTitle")}
            </a>
          </p>
        </div>
        <p className="text-sm text-gray-300">
          {thisYear} CHAT Continuity Health Attachment Technology | All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
