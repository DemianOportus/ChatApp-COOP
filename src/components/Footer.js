import { useContext } from "react";
import { Context } from "../components/Context";

import i18n from "../i18";
import profile from "./images/profile.png";

function Footer() {
  useContext(Context);
  const date = new Date();
  let thisYear = date.getFullYear();

  return (
    <div className=" bg-myFooterBlue pt-7">
      <div className="flex justify-between px-[30px] pb-[15px] md:justify-evenly ">
        <div>
          <p className="uppercase font-bold">{i18n.gettext("contactUs")}</p>
          <p>Info@chat.ottawa.ca </p>
          <p>613.789.9090</p>
        </div>
        <div>
          <p className="uppercase font-bold">{i18n.gettext("findUsOn")}</p>
          <div className="text-center text-[#323239]">
            <i className="fa-xl fa-brands fa-square-facebook"></i>
            <i className="fa-xl fa-brands fa-square-twitter px-[10px]"></i>
            <i className="fa-xl fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="pt-[25px]">
          <img
            src={profile}
            alt="User Profile"
            className="w-[4rem] mx-[15px] rounded-full"
          />
        </div>
        <div className="text-sm font-semibold pb-[30px] pt-[30px]">
          <p>CHAT APP</p>
          <hr className="border-black" />
          <p>{i18n.gettext("clinicOfTheFuture")}</p>
        </div>
      </div>
      <div className="text-center mt-7 bg-[#323239] text-white pt-[20px] pb-[50px]">
        <p className="uppercase pb-[10px]">
          {i18n.gettext("joinPatient")} / {i18n.gettext("joinDoctor")}
        </p>
        <p className="uppercase pb-[10px]">
          {i18n.gettext("aboutUs")} / {i18n.gettext("dataPrivacy")}
        </p>
        <p className="text-sm text-gray-300">
          {thisYear} CHAT {i18n.gettext("clinicOfTheFuture")} | All rights
          reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
