import "../index.css";
import { useEffect, useState, useContext } from "react";
import i18n from "../i18";
import { Context } from "../components/Context";
import profile from "../components/images/profile.png";

// {i18n.gettext("bePartOfTeam")}

export default function AboutUs() {
  useContext(Context);
  return (
    <div className="mx-auto lg:text-center">
      <div className=" mt-10 text-myDefaultGrey">
        <h1 className="text-4xl font-[myriadBold] block uppercase text-center">
          {i18n.gettext("aboutUsTitle")}
        </h1>

        <h2 className="text-2xl mt-10 mx-8 md:mx-12 font-[myriadLight] block first-letter:uppercase">
          {i18n.gettext("aboutUsDescription")}
        </h2>
      </div>
      {/* 1153 vs 574 */}
      <div className="lg:grid lg:grid-cols-2 lg:mx-12 lg:mt-10 lg:items-center lg:gap-4">
        <div className="div--promos mt-10">
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

        <div className="md:text-center">
          <div className="ml-8 md:ml-0">
            <h1 className="text-4xl font-[raleway] font-normal block uppercase">
              {i18n.gettext("aboutUsPartnersTitle")}
            </h1>
            <h2 className="font-[myriadLight] text-2xl mt-4 mb-10 text-center">
              {i18n.gettext("aboutUsPartnersDescription")}

              {/* TODO: Lorem ipsum partners*/}
            </h2>
          </div>
          <div className="grid grid-cols-3 pb-10 md:gap-1 text-center mx-auto w-[27rem] md:w-[35rem]">
            <div>
              <img 
                src={profile}
                className="rounded-full w-16 mx-auto"
              />
              <p>Lorem ipsum 1</p>
            </div>
            <div>
              <img 
                src={profile}
                className="rounded-full w-16 mx-auto"
              />
              <p>Lorem ipsum 2</p>
            </div>
            <div>
              <img 
                src={profile}
                className="rounded-full w-16 mx-auto"
              />
              <p>Lorem ipsum 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
