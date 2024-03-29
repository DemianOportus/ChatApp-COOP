import "../index.css";
import { useEffect, useState, useContext } from "react";
import i18n from "../i18";
import { Context } from "../components/Context";

// {i18n.gettext("bePartOfTeam")}

export default function DataPrivacy() {
  useContext(Context);
  return (
    <div className="mx-5 md:mx-10 mt-10 text-myDefaultGrey">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-[myriadBold] uppercase block">
            {i18n.gettext("dataPrivacyTitle")}
          </h1>
        </div>
      <div className="xl:grid xl:grid-cols-2 xl:gap-x-6">
        <div className="ml-0  sm:ml-4 ">
          <h1 className="text-4xl font-[raleway] font-normal block uppercase">
            {i18n.gettext("howWeUseYourDataTitle")}
          </h1>

          <div className="mt-4">
            <h2 className="font-[myriadLight] text-2xl">
              {i18n.gettext("howWeUseYourDataDescription")}
            </h2>
            <div className="mt-4 font-[myriadLight] text-2xl ">
              <ol className="md:grid md:grid-cols-2 md:gap-x-6">
                <li>{i18n.gettext("howWeUseYourDataBulletPoint1")}</li>
                <li>{i18n.gettext("howWeUseYourDataBulletPoint2")}</li>
                <li>{i18n.gettext("howWeUseYourDataBulletPoint3")}</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="text-start mt-10 sm:ml-4 lg:mt-0">
          <h1 className="text-4xl font-[raleway] font-normal block uppercase">
            {i18n.gettext("howWeProtectYourDataTitle")}
          </h1>

          <div className="mt-4 mb-10">
            <h2 className="font-[myriadLight] text-2xl block">
              {i18n.gettext("howWeProtectYourDataDescription")}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
