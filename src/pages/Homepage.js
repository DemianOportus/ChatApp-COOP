import "../index.css";
import { useEffect, useState, useContext } from "react";
import i18n from "../i18";
import { Context } from "../components/Context";

// {i18n.gettext("bePartOfTeam")}

export default function Homepage() {
  useContext(Context);
  return (
      <div className="text-center mt-10  mx-auto text-myDefaultGrey">
        <h1 className="text-4xl font-[raleway] uppercase font-semibold md:pb-8">
          {i18n.gettext("welcomeToChat")}
        </h1>
        {/* <h1 className="text-4xl font-[raleway] font-semibold uppercase md:pb-8">
          {i18n.gettext("clinicOfTheFuture")}
        </h1> */}
        {/* Polygon Shape text */}
        <div className="md:hidden div--triangle">
          <h2 className="text-2xl font-[myriadLight]">
            {i18n.gettext("whatWeOffer")}
          </h2>
        </div>
        {/* 1153 vs 574 */}
        <div className="bg-[#E1E1E1] md:py-[15px] md:px-[30px] md:grid md:grid-cols-2 md:gap-16 md:items-center">
          <div className="hidden md:block">
            <h2 className="text-2xl font-[myriadLight]">
              {i18n.gettext("whatWeOffer")}
            </h2>
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
          <h1 className="text-4xl font-[raleway] font-normal uppercase lg:text-center">
            {i18n.gettext("getMatched")}
          </h1>

          <div className="mt-4">
            <h2 className="text-2xl font-[myriadRegular] mb-16  md:mb-4 lg:text-center">
              {i18n.gettext("weAccept")}
            </h2>
            <div className="mt-4">
              <h2 className="text-2xl font-[raleway] font-medium uppercase mb-4 lg:text-center">
                {i18n.gettext("howItWorks")}
              </h2>
              <ol className="font-[myriadRegular] text-2xl md:grid md:grid-cols-2 md:gap-x-8">
                <li>{i18n.gettext("ul1")}</li>
                <li>{i18n.gettext("ul2")}</li>
                <li>{i18n.gettext("ul3")}</li>
                <li>{i18n.gettext("ul4")}</li>
                <li>{i18n.gettext("ul5")}</li>
                <li>{i18n.gettext("ul6")}</li>
              </ol>
            </div>
            <div className="hidden text-center md:my-10 lg:block">
            <button 
              className="btn-purple"
            >
              <a
                href="/join-as-a-patient"
              >
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
          <h1 className="text-3xl font-[raleway] uppercase">
            {i18n.gettext("bePartOfTeam")}{" "}
          </h1>
          {/* <h1 className="text-4xl ">medical team</h1> */}

          <h2 className="text-2xl lowercase font-[myriadLight]">
            {i18n.gettext("getMatchedWithPatients")}
          </h2>
          <div className="hidden text-center md:my-10 lg:block">
            <button 
              className="btn-purple"
            >
              <a
                href="/join-as-a-doctor"
              >
                {i18n.gettext("joinAsDoctor")}
              </a>
            </button>
          </div>
        </div>
        <div className="md:flex md:justify-end">
          <div className="div--joinBackwardsTriangle uppercase text-4xl md:w-1/2 lg:hidden">
            <h1>{i18n.gettext("join")} </h1>
            <h1> {i18n.gettext("asDoctor")}</h1>
          </div>
        </div>
      </div>
  );
}
