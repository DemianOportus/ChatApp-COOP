import "../index.css";
import { useEffect, useState, useContext } from "react";
import i18n from "../i18";
import { Context } from "../components/Context";
import joinUs from "../components/images/joinUs.png"
import banner from "../components/images/banner.png"
import doctors from "../components/images/doctors.png"

export default function Homepage() {
  useContext(Context);
  return (
      <div className="text-center mt-10  mx-auto text-myDefaultGrey">
        <h1 className="text-4xl font-[raleway] uppercase font-semibold md:pb-2">
          {i18n.gettext("welcomeToChat1")}
        </h1>
        <h2 className="text-3xl font-[raleway] font-semibold md:pb-8">
          {i18n.gettext("welcomeToChat2")}
        </h2>
        <div className="md:hidden div--triangle">
          <h2 className="text-2xl font-[myriadLight]">
            {i18n.gettext("whatWeOffer")}
          </h2>
        </div>
        <div className="bg-[#E1E1E1] md:py-[15px] md:px-[30px] md:grid md:grid-cols-2 md:gap-16 md:items-center">
          <div className="hidden md:block">
            <img src={banner} alt="banner"/>
          </div>
          <div className="div--promos md:grid md:m-0">
            <iframe
              className="responsive-iframe"
              width="1153"
              height="574"
              src="https://www.youtube.com/embed/tks8vUwh3wM"
              title="iPhone 14 - TRAILER"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="ml-2 text-start sm:ml-4 md:mx-[50px] md:mt-[30px]">
          <h1 className="text-4xl font-[raleway] font-normal uppercase text-center">
            {i18n.gettext("getMatched")}
          </h1>
          <div className="mt-4">
            <h2 className="text-2xl font-[myriadRegular] mb-16 md:mb-4 text-center">
              {i18n.gettext("weAccept")}
            </h2>
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-[raleway] font-medium uppercase mb-4 text-center">
                {i18n.gettext("howItWorks")}
              </h2>
              <div class="lg:flex lg:flex-row">
                <div class="lg:basis-1/4 lg:max-w-xs md:px-5 lg:mr-20">
                  <img src={joinUs} alt="banner"/>
                </div>
                <div class="lg:basis-3/4 lg:items-left">
                  <ol className="font-[myriadLight] text-2xl">
                    <li className="py-2">{i18n.gettext("ul1")}</li>
                    <li className="py-2">{i18n.gettext("ul2")}</li>
                    <li className="py-2">{i18n.gettext("ul3")}</li>
                    <li className="py-2">{i18n.gettext("ul4")}</li>
                    <li className="py-2">{i18n.gettext("ul5")}</li>
                    <li className="py-2">{i18n.gettext("ul6")}</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="hidden text-center md:my-10 lg:block">
              <button className="btn btn-purple">
                <a href="/join-as-a-patient">
                  {i18n.gettext("joinAsPatient")}
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="div--joinTriangle uppercase text-4xl font-[myriadBold] md:w-1/2 lg:hidden">
          <h1>{i18n.gettext("join")} </h1>
          <h1> {i18n.gettext("asPatient")}</h1>
        </div>
        <div className="mr-5 ml-5 text-end lg:text-center lg:my-10">
          <h1 className="text-4xl font-[raleway] font-normal uppercase lg:text-center">
            {i18n.gettext("bePartOfTeam1")}
            <br></br>
            {i18n.gettext("bePartOfTeam2")}
          </h1>
          <div className="mt-4">
            <h2 className="text-2xl font-[myriadRegular] mb-16 md:mb-4 lg:text-center">
              {i18n.gettext("getMatchedWithPatients")}
            </h2>
          </div>
          <div className="hidden text-center md:my-10 lg:block md:pb-10">
            <button className="btn-purple btn">
              <a href="/join-as-a-doctor">
                {i18n.gettext("joinAsDoctor1")}
                <br />
                {i18n.gettext("joinAsDoctor2")}
              </a>
            </button>
          </div>
        </div>
        <div className="md:flex md:justify-end">
          <div className="div--joinBackwardsTriangle uppercase text-4xl md:w-1/2 lg:hidden">
            <h1>{i18n.gettext("join")}</h1>
            <h1>{i18n.gettext("asDoctor")}</h1>
          </div>
        </div>
    </div>
  );
}
