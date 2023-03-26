import "../index.css";
import { useEffect, useState, useContext } from "react";
import i18n from "../i18";
import { Context } from "../components/Context";

// {i18n.gettext("contactUs")}

export default function Success() {
  useContext(Context);
  return (
    <div className="text-center text-myDefaultGrey mb-32 mx-5 font-[myriadRegular] lg:mb-24">
      <div className="mt-28 uppercase">
        <h1 className="text-4xl mb-10 font-[raleway] font-semibold">
          {i18n.gettext("successTitle")}
        </h1>
      </div>

      <div className="lg:mt-24">
        <h1 className="text-2xl">{i18n.gettext("successText")}</h1>
        <h1 className="text-2xl lg:mt-4">{i18n.gettext("successText2")}</h1>
        <button className="btn btn-orange my-6 font-semibold uppercase lg:mt-24">
          <a href="/">Back</a>
        </button>
      </div>
    </div>
  );
}
