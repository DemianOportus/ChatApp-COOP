import "../index.css";
import { useEffect, useState, useContext } from "react";
import i18n from "../i18";
import { Context } from "../components/Context";
import UserInput from "../components/userInput";

export default function JoinAsADoctor() {
  useContext(Context);

  const [whatMakesItDifferent, setWhatMakesItDifferent] = useState(false);
  const [howToUse, setHowToUse] = useState(false);
  const [incentives, setIncentives] = useState(false);

  function toggleWhatMakesItDifferent() {
    if (whatMakesItDifferent == false) {
      setWhatMakesItDifferent(true);
      setHowToUse(false);
      setIncentives(false);
    } else {
      setWhatMakesItDifferent(false);
    }
    // !whatMakesItDifferent ? setWhatMakesItDifferent(true) && (howToUse = false)  && (incentives = false) : setWhatMakesItDifferent(false)
  }

  function toggleHowToUse() {
    if (howToUse == false) {
      setHowToUse(true);
      setWhatMakesItDifferent(false);
      setIncentives(false);
    } else {
      setHowToUse(false);
    }
  }

  function toggleIncentives() {
    if (incentives == false) {
      setIncentives(true);
      setWhatMakesItDifferent(false);
      setHowToUse(false);
    } else {
      setIncentives(false);
    }
  }

  return (
    <div className="mx-auto md:max-w-xl text-myDefaultGrey">
      <h1 className="text-4xl uppercase text-center pt-[60px] font-[raleway] font-bold">
        {i18n.gettext("joinDoctor")}
      </h1>

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

      <div className="ml-2 text-start  font-[myriadRegular] sm:ml-4 md:max-w-lg">
        <h1 className="text-4xl block">{i18n.gettext("howToJoin")}</h1>

        <div className="mt-4 mr-[15px]">
          <div className="mt-4">
            <ol className="text-2xl">
              <li className="pt-[15px]">
                <a className="underline">{i18n.gettext("li1")}</a>
              </li>
              <li className="pt-[15px]">{i18n.gettext("li2")}</li>
              <li className="pt-[15px]">{i18n.gettext("li3")}</li>
              <li className="pt-[15px]">{i18n.gettext("li4")}</li>
            </ol>
            <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
        </div>
      </div>

      <div className="font-[myriadRegular] border-b-[1px] border-myDefaultGrey mx-[15px] pb-[30px]">
        <div className="flex justify-between">
          <h1 className="uppercase text-4xl">{i18n.gettext("dropdown1")}</h1>
          <button className="px-[20px]" onClick={toggleWhatMakesItDifferent}>
            <i class="fa-solid fa-angle-down fa-2xl"></i>
          </button>
        </div>
        {whatMakesItDifferent && <p>Lorem Ipsum1</p>}
      </div>

      <div className="font-[myriadRegular] border-b-[1px] border-myDefaultGrey mx-[15px] pb-[30px] pt-[20px]">
        <div className="flex justify-between">
          <h1 className="uppercase text-4xl">{i18n.gettext("dropdown2")}</h1>
          <button className="px-[20px]" onClick={toggleHowToUse}>
            <i class="fa-solid fa-angle-down fa-2xl"></i>
          </button>
        </div>
        {howToUse && <p>Lorem Ipsum2</p>}
      </div>

      <div className="font-[myriadRegular] border-b-[1px] border-myDefaultGrey mx-[15px] pb-[30px] pt-[20px]">
        <div className="flex justify-between">
          <h1 className="uppercase text-4xl">{i18n.gettext("dropdown3")}</h1>
          <button className="px-[20px]" onClick={toggleIncentives}>
            <i class="fa-solid fa-angle-down fa-2xl"></i>
          </button>
        </div>
        {incentives && <p>Lorem Ipsum3</p>}
      </div>

      <div className="ml-0  sm:ml-4 ">
        <h1 className="text-4xl font-raleway font-normal block uppercase">
          {i18n.gettext("registrationForm")}
        </h1>
        <div className="ml-3">
          <div className="mt-4 text-start">
            <h2 className="font-myriad text-2xl">
              {i18n.gettext("pleaseFillOut")}
            </h2>

            <h2 className="font-myriad text-2xl">
              {i18n.gettext("learnAboutWhyWeAsk")}
            </h2>
            <div className="mt-4 font-myriad font-light text-2xl ">
              <ol>
                <li className="font-bold">
                  {i18n.gettext("personalInformation")}
                </li>
                <UserInput
                  myLabel={i18n.gettext("firstNameIs")}
                  type="text"
                  id="doctorFirstNameInput"
                />
                <UserInput
                  myLabel={i18n.gettext("lastNameIs")}
                  type="text"
                  id="doctorLastNameInput"
                />
                <li className="font-bold">
                  {i18n.gettext("professionalInformation")}
                </li>

                <UserInput
                  myLabel={i18n.gettext("practiceName")}
                  type="text"
                  id="practiceNameInput"
                />

                <UserInput
                  myLabel={i18n.gettext("providerName")}
                  type="text"
                  id="providerNameInput"
                />

                <UserInput
                  myLabel={i18n.gettext("numberOfSpots")}
                  type="text"
                  id="numberOfSpotsInput"
                />

                <UserInput
                  myLabel={i18n.gettext("officeAddress")}
                  type="text"
                  id="officeAddressInput"
                />
              </ol>
            </div>
            <button className="btn btn-orange">Submit registration</button>
          </div>
        </div>
      </div>
    </div>
  );
}
