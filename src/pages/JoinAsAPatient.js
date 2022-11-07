import "../index.css";
import { useEffect, useState, useContext } from "react";
import i18n from "../i18";
import { Context } from "../components/Context";
import UserInput from "../components/userInput";
import Checkbox from "../components/checkbox";

// {i18n.gettext("bePartOfTeam")}

export default function JoinAsAPatient() {
  useContext(Context);
  return (
    <div className="text-center mt-10 mx-auto">
      <div className="text-center mt-10 mx-auto text-myDefaultGrey">
        <h1 className="text-4xl font-[raleway] font-bold block uppercase mb-10">
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

        <div className="ml-2 text-start sm:ml-4 md:mx-[50px]">
          <h1 className="text-4xl font-[raleway] font-normal block ">
            {i18n.gettext("howToJoin")}
          </h1>

          <div className="mt-4">
            <div className="mt-4">
              <ol className="text-2xl font-[myriadRegular] md:grid md:grid-cols-2">
                <li>{i18n.gettext("ul1")}</li>
                <li>{i18n.gettext("ul2")}</li>
                <li>{i18n.gettext("ul3")}</li>
                <li>{i18n.gettext("ul4")}</li>
                <li>{i18n.gettext("ul5")}</li>
                <li>{i18n.gettext("ul6")}</li>
              </ol>
              <hr className="mt-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
          </div>
        </div>
        <div className="ml-0 sm:ml-4 md:mx-[50px]">
          <h1 className="text-4xl font-[raleway] font-normal block uppercase mb-12">
            {i18n.gettext("registrationForm")}
          </h1>
          <div className="ml-3">
            <div className="mt-4 text-start">
              <h2 className="font-[myriadRegular] text-2xl mb-6">
                {i18n.gettext("pleaseFillOut")}
              </h2>
              <h2 className="font-[myriadRegular] text-2xl">
                {i18n.gettext("registerByEmail")}
              </h2>

              <h2 className="font-[myriadRegular] text-[#51A2DA] underline text-2xl my-8">
                {i18n.gettext("learnAboutWhyWeAsk")}
              </h2>
              <div className="mt-4 font-[myriadLight] text-2xl ">
                <ol>
                  <li className="font-[myriadBold]">
                    {i18n.gettext("boldListOfRegistration1")}
                  </li>
                  <div className="md:grid md:grid-cols-2">
                    <Checkbox
                      id="iAmCurretnlyWithoutDoctorCheckbox"
                      option={i18n.gettext("iAmCurrentlyWithoutDoctor")}
                    />
                    <Checkbox
                      id="iAmCanadianCheckbox"
                      option={i18n.gettext("iAmCanadian")}
                    />
                  </div>

                  <li className="font-[myriadBold]">
                    {i18n.gettext("boldListOfRegistration2")}
                  </li>

                  <div className="md:grid md:grid-cols-2">
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
                  </div>

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
                  <div className="md:grid md:grid-cols-2">
                    <UserInput
                      myLabel={i18n.gettext("emailAddressIs")}
                      type="text"
                      id="emailAddressIs"
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
                  </div>
                  <li className="font-[myriadBold]">
                    {i18n.gettext("boldListOfRegistration5")}
                  </li>
                  <h1 className="my-8">
                    {" "}
                    {i18n.gettext("genericQuestionsAboutPhysicalHealth")}
                  </h1>
                  <div className="md:grid md:grid-cols-3">
                    <Checkbox
                      id="genericPhysicalQuestion1Checkbox"
                      option={i18n.gettext("genericPhysicalQuestion1")}
                    />
                    <Checkbox
                      id="genericPhysicalQuestion2Checkbox"
                      option={i18n.gettext("genericPhysicalQuestion2")}
                    />
                    <Checkbox
                      id="genericPhysicalQuestion1Checkbox"
                      option={i18n.gettext("genericPhysicalQuestion2")}
                    />
                  </div>
                  <h1 className="my-8">
                    {" "}
                    {i18n.gettext("genericQuestionsAboutMentalHealth")}
                  </h1>
                  <div className="md:grid md:grid-cols-3">
                    <Checkbox
                      id="genericMentalQuestion1Checkbox"
                      option={i18n.gettext("genericMentalQuestion1")}
                    />
                    <Checkbox
                      id="genericMentalQuestion2Checkbox"
                      option={i18n.gettext("genericMentalQuestion2")}
                    />
                    <Checkbox
                      id="genericMentalQuestion3Checkbox"
                      option={i18n.gettext("genericMentalQuestion3")}
                    />
                  </div>
                  <h1 className="my-8">
                    {" "}
                    {i18n.gettext("genericQuestionsAboutSocialHealth")}
                  </h1>
                  <div className="md:grid md:grid-cols-3">
                    <Checkbox
                      id="genericSocialQuestion1Checkbox"
                      option={i18n.gettext("genericSocialQuestion1")}
                    />
                    <Checkbox
                      id="genericSocialQuestion2Checkbox"
                      option={i18n.gettext("genericSocialQuestion2")}
                    />
                    <Checkbox
                      id="genericSocialQuestion3Checkbox"
                      option={i18n.gettext("genericSocialQuestion3")}
                    />
                  </div>
                  <h1 className="my-8">
                    {i18n.gettext(
                      "genericQuestionsAboutSocialComplexCareHealth"
                    )}
                  </h1>
                  <div className="md:grid md:grid-cols-3">
                    <Checkbox
                      id="genericSocialComplexCareQuestion1Checkbox"
                      option={i18n.gettext("genericSocialComplexCareQuestion1")}
                    />
                    <Checkbox
                      id="genericSocialComplexCareQuestion2Checkbox"
                      option={i18n.gettext("genericSocialComplexCareQuestion2")}
                    />
                    <Checkbox
                      id="genericSocialComplexCareQuestion3Checkbox"
                      option={i18n.gettext("genericSocialComplexCareQuestion3")}
                    />
                  </div>
                  <h1 className="my-8">
                    {i18n.gettext("genericQuestionsAboutSocialFraility")}
                  </h1>
                  <div className="md:grid md:grid-cols-3">
                    <Checkbox
                      id="genericSocialFrailityQuestion1Checkbox"
                      option={i18n.gettext("genericSocialFrailityQuestion1")}
                    />
                    <Checkbox
                      id="genericSocialFrailityQuestion2Checkbox"
                      option={i18n.gettext("genericSocialFrailityQuestion2")}
                    />
                    <Checkbox
                      id="genericSocialFrailityQuestion3Checkbox"
                      option={i18n.gettext("genericSocialFrailityQuestion3")}
                    />
                  </div>
                </ol>
              </div>
              <div className="text-center">
                <button className="btn btn-orange my-6">
                  Submit registration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
