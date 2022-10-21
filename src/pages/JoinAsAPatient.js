import "../index.css";
import { useEffect, useState, useContext } from "react";
import i18n from "../i18";
import { Context } from "../components/Context";
import UserInput from "../components/userInput";

// {i18n.gettext("bePartOfTeam")}

export default function JoinAsAPatient() {
  useContext(Context);
  return (
    <div className="text-center mt-10  mx-auto md:max-w-xl ">
      <div className="text-center mt-10  mx-auto md:max-w-xl text-myDefaultGrey">
        <h1 className="text-4xl font-[raleway] font-bold block uppercase">
          {i18n.gettext("joinPatient")}
        </h1>

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

        <div className="ml-2 text-start sm:ml-4 md:max-w-lg">
          <h1 className="text-4xl font-[raleway] font-normal block ">
            {i18n.gettext("howToJoin")}
          </h1>

          <div className="mt-4">
            <div className="mt-4">
              <ol className="text-2xl">
                <li>{i18n.gettext("ul1")}</li>
                <li>{i18n.gettext("ul2")}</li>
                <li>{i18n.gettext("ul3")}</li>
                <li>{i18n.gettext("ul4")}</li>
                <li>{i18n.gettext("ul5")}</li>
                <li>{i18n.gettext("ul6")}</li>
              </ol>
              <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
          </div>
        </div>
        <div className="ml-0  sm:ml-4 ">
          <h1 className="text-4xl font-[raleway] font-normal block uppercase">
            {i18n.gettext("registrationForm")}
          </h1>
          <div className="ml-3">
            <div className="mt-4 text-start">
              <h2 className="font-[myriadRegular] text-2xl">
                {i18n.gettext("pleaseFillOut")}
              </h2>

              <h2 className="font-[myriadRegular] text-2xl">
                {i18n.gettext("learnAboutWhyWeAsk")}
              </h2>
              <div className="mt-4 font-[myriadLight] text-2xl ">
                <ol>
                  <li className="font-[myriadBold]">
                    {i18n.gettext("boldListOfRegistration1")}
                  </li>
                  <h1> {i18n.gettext("iAmCurrentlyWithoutDoctor")}</h1>
                  <h1> {i18n.gettext("iAmCanadian")}</h1>
                  <li className="font-[myriadBold]">
                    {i18n.gettext("boldListOfRegistration2")}
                  </li>

                  <UserInput
                    myLabel={i18n.gettext("firstNameIs")}
                    type="text"
                    id="firstNameInput"
                  />
                  <UserInput
                    myLabel={i18n.gettext("lastNameIs")}
                    type="text"
                    id="lastNameInput"
                  />
                  <UserInput
                    myLabel={i18n.gettext("dateOfBirthIs")}
                    type="date"
                    id="dateOfBirthInput"
                  />
                  <UserInput
                    myLabel={i18n.gettext("homeAddressIs")}
                    type="text"
                    id="homeAddressInput"
                  />

                  <UserInput
                    myLabel={i18n.gettext("provinceIs")}
                    type="text"
                    id="provinceInput"
                  />

                  <li className="font-[myriadBold]">
                    {i18n.gettext("boldListOfRegistration3")}
                  </li>
                  <h1> {i18n.gettext("usesYourPostalCode")}</h1>
                  <UserInput
                    myLabel={i18n.gettext("postalCodeIs")}
                    type="text"
                    id="postalCodeInput"
                  />
                  <li className="font-[myriadbold]">
                    {i18n.gettext("boldListOfRegistration4")}
                  </li>

                  <UserInput
                    myLabel={i18n.gettext("emailAddressIs")}
                    type="text"
                    id="emailAddressIs"
                  />
                  <UserInput
                    myLabel={i18n.gettext("postalCodeIs")}
                    type="text"
                    id="postalCodeInput"
                  />

                  <UserInput
                    myLabel={i18n.gettext("phoneNumberIs")}
                    type="text"
                    id="phoneNumberInput"
                  />

                  <UserInput
                    myLabel={i18n.gettext("languagePreference")}
                    type="text"
                    id="languagePreferenceInput"
                  />

                  <li className="font-[myriadBold]">
                    {i18n.gettext("boldListOfRegistration5")}
                  </li>
                  <h1>
                    {" "}
                    {i18n.gettext("genericQuestionsAboutPhysicalHealth")}
                  </h1>
                  <h1> {i18n.gettext("genericPhysicalQuestion1")}</h1>
                  <h1> {i18n.gettext("genericPhysicalQuestion2")}</h1>
                  <h1> {i18n.gettext("genericPhysicalQuestion3")}</h1>
                  <li className="font-[myriadBold]">
                    {i18n.gettext("boldListOfRegistration5")}
                  </li>
                  <h1>
                    {" "}
                    {i18n.gettext("genericQuestionsAboutPhysicalHealth")}
                  </h1>
                  <h1> {i18n.gettext("genericPhysicalQuestion1")}</h1>
                  <h1> {i18n.gettext("genericPhysicalQuestion2")}</h1>
                  <h1> {i18n.gettext("genericPhysicalQuestion3")}</h1>

                  <h1> {i18n.gettext("genericQuestionsAboutMentalHealth")}</h1>
                  <h1> {i18n.gettext("genericMentalQuestion1")}</h1>
                  <h1> {i18n.gettext("genericMentalQuestion2")}</h1>
                  <h1> {i18n.gettext("genericMentalQuestion3")}</h1>

                  <h1> {i18n.gettext("genericQuestionsAboutSocialHealth")}</h1>
                  <h1> {i18n.gettext("genericSocialQuestion1")}</h1>
                  <h1> {i18n.gettext("genericSocialQuestion2")}</h1>
                  <h1> {i18n.gettext("genericSocialQuestion3")}</h1>

                  <h1>
                    {i18n.gettext(
                      "genericQuestionsAboutSocialComplexCareHealth"
                    )}
                  </h1>
                  <h1> {i18n.gettext("genericSocialComplexCareQuestion1")}</h1>
                  <h1> {i18n.gettext("genericSocialComplexCareQuestion2")}</h1>
                  <h1> {i18n.gettext("genericSocialComplexCareQuestion3")}</h1>

                  <h1>{i18n.gettext("genericQuestionsAboutSocialFraility")}</h1>
                  <h1> {i18n.gettext("genericSocialFrailityQuestion1")}</h1>
                  <h1> {i18n.gettext("genericSocialFrailityQuestion2")}</h1>
                  <h1> {i18n.gettext("genericSocialFrailityQuestion3")}</h1>
                </ol>
              </div>
              <button className="btn btn-orange">Submit registration</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
