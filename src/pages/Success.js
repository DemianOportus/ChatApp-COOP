import "../index.css";
import { useEffect, useState, useContext } from "react";
import i18n from "../i18";
import { Context } from "../components/Context";

// {i18n.gettext("contactUs")}

export default function Success() {
  useContext(Context);
  return (
    <div className="text-center mx-auto text-myDefaultGrey mb-32 md:max-w-xl">
      <div className="text-center mt-28 uppercase mx-auto md:max-w-xl ">
        <h1 className="text-4xl  block mb-10">
          {i18n.gettext("successTitle")}
        </h1>
      </div>

      <div className="ml-0 text-center sm:ml-4 md:max-w-lg">
        <h1 className="text-2xl block ">{i18n.gettext("successText")}</h1>
        <h1 className="text-2xl block">{i18n.gettext("successText2")}</h1>
      </div>
    </div>
  );
}
