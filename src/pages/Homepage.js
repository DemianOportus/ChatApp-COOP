import "../index.css";
import { useEffect, useState, useContext } from "react";
import i18n from "../i18";
import { Context } from "../components/Context";

// {i18n.gettext("howItWorks")}

export default function Homepage() {
  useContext(Context);
  return (
    <div className="text-center mt-10 uppercase mx-auto md:max-w-xl ">
      <div className="text-center mt-10 uppercase mx-auto md:max-w-xl ">
        <h1 className="text-4xl font-semibold block">
          {i18n.gettext("welcomeToChat")}
        </h1>
        <h1 className="text-4xl font-semibold block">
          {i18n.gettext("clinicOfTheFuture")}
        </h1>
        {/* Polygon Shape text */}
        <div className="div--triangle">
          <h2 className="text-2xl block">{i18n.gettext("whatWeOffer")}</h2>
        </div>
        {/* 1153 vs 574 */}
        <div className="div--promos">
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

        <div className="ml-0 text-start uppercase sm:ml-4 md:max-w-lg">
          <h1 className="text-4xl block uppercase">
            {i18n.gettext("getMatched")}
          </h1>

          <div className="mt-4">
            <h2 className="text-xl block">{i18n.gettext("weAccept")}</h2>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold  block uppercase">
                {i18n.gettext("howItWorks")}
              </h2>
              <ol>
                <li>{i18n.gettext("ul1")}</li>
                <li>{i18n.gettext("ul2")}</li>
                <li>{i18n.gettext("ul3")}</li>
                <li>{i18n.gettext("ul4")}</li>
                <li>{i18n.gettext("ul5")}</li>
                <li>{i18n.gettext("ul6")}</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="div--joinTriangle uppercase text-4xl  font-bold">
          <h1>{i18n.gettext("join")} </h1>
          <h1> {i18n.gettext("asPatient")}</h1>
        </div>
        <div className="mr-5 text-end">
          <h1 className="text-4xl ">Be part of our </h1>
          <h1 className="text-4xl ">medical team</h1>

          <h2 className="text-2xl lowercase first-letter:uppercase ">
            Get matched with patients that fit into your area of expertise.
          </h2>
        </div>
        <div className="div--joinBackwardsTriangle uppercase text-4xl font-bold">
          <h1>{i18n.gettext("join")} </h1>
          <h1> {i18n.gettext("asDoctor")}</h1>
        </div>
      </div>
    </div>
  );
}
