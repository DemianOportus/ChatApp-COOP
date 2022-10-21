import "../index.css";
import { useEffect, useState, useContext } from "react";
import i18n from "../i18";
import { Context } from "../components/Context";

// {i18n.gettext("bePartOfTeam")}

export default function AboutUs() {
  useContext(Context);
  return (
    <div className=" mx-auto md:max-w-xl max-w-sm  ">
      <div className=" mt-10 text-myDefaultGrey">
        <h1 className="text-4xl font-[myriadBold] block uppercase text-center">
          {i18n.gettext("aboutUsTitle")}
        </h1>

        <h2 className="text-2xl mt-10 font-[myriadLight] block first-letter:uppercase">
          {i18n.gettext("aboutUsDescription")}
        </h2>
      </div>
      {/* 1153 vs 574 */}
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

      <div className="ml-0  sm:ml-4 ">
        <h1 className="text-4xl font-[raleway] font-normal block uppercase">
          {i18n.gettext("aboutUsPartnersTitle")}
        </h1>

        <div className="mt-4 mb-10">
          <h2 className="font-[myriadLight] text-2xl">
            {i18n.gettext("aboutUsPartnersDescription")}

            {/* TODO: Lorem ipsum partners*/}
          </h2>
        </div>
      </div>
    </div>
  );
}
