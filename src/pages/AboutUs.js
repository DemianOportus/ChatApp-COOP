import "../index.css";
import { useEffect, useState, useContext } from "react";
import i18n from "../i18";
import { Context } from "../components/Context";
import DFM from "../components/images/DFM.png";
import jumpingElephants from "../components/images/jumpingElephants.png";
import connect from "../components/images/connect.png"

// {i18n.gettext("bePartOfTeam")}

export default function AboutUs() {
  useContext(Context);
  return (
    <div className="mx-auto">
      <div className="mt-10 text-myDefaultGrey flex flex-row">
        <div className="basis-1/6"></div>
        <div className="basis-4/6">
        <h1 className="text-4xl font-[myriadBold] block uppercase text-center">
          {i18n.gettext("aboutUsTitle")}
        </h1>

        <h2 className="text-2xl mt-10 mx-8 font-[myriadLight] block md:mx-12 lg:text-center">
          {i18n.gettext("aboutUsDescription")}
        </h2>
        </div>
        <div className="basis-1/6 px-8">
          <img src={connect} alt="" />
        </div>
      </div>
      {/* 1153 vs 574 */}
      <div className="text-center text-2xl text-myDefaultGrey">
        <div className="text-center">
          <div className="ml-8 md:ml-0 mt-10">
            <h1 className="text-4xl font-[myriadBold] block uppercase text-center">
              {i18n.gettext("aboutUsPartnersTitle")}
            </h1>
            <h2 className="font-[myriadLight] text-2xl mt-4 mb-10">
              {i18n.gettext("aboutUsPartnersDescription")}
            </h2>
          </div>
          <div className="grid grid-cols-2 pb-10 md:gap-5 text-center mx-auto w-[30rem] md:w-[35rem]">
            <div>
              <img 
                src={DFM}
                className="w-25 mx-auto"
              />
              <a href="https://www.uottawa.ca/faculty-medicine/family" target="_blank">Department of Family Medicine</a>
            </div>
            <div>
              <img 
                src={jumpingElephants}
                className="w-25 mx-auto"
              />
              <a href="https://www.jumpingelephants.ca/" target="_blank">Jumping Elephants</a>
            </div>
          </div>
          <button className="btn btn-orange my-6 font-semibold uppercase lg:mt-10">
            <a className="px-10" href="/">Back</a>
          </button>
        </div>
      </div>
    </div>
  );
}
