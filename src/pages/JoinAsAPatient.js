import "../index.css";
import { useEffect, useState, useContext } from "react";
import i18n from "../i18";
import { Context } from "../components/Context";
import UserInput from "../components/userInput";
import Checkbox from "../components/checkbox";
import doctorAndPatient from "../components/images/doctorAndPatient.png"

// {i18n.gettext("bePartOfTeam")}

export default function JoinAsAPatient() {
  useContext(Context);
  return (
      <div className="text-center mt-10 mx-auto text-myDefaultGrey font-[myriadRegular]">
        <h1 className="text-4xl font-[raleway] font-bold uppercase mb-8">
          {i18n.gettext("joinPatient")}
        </h1>
        <div class="flex flex-row">
          <div class="basis-2/5">
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
          </div>
          <div class="basis-3/5 ml-2 text-start md:mx-10">
            <h1 className="text-3xl font-[raleway] font-normal mb-8 mt-10">
              {i18n.gettext("howToJoin")}
            </h1>
            <div className="mt-4">
              <div className="mt-4">
                <ol className="text-2xl font-light">
                  <li>{i18n.gettext("ul1")}</li>
                  <li>{i18n.gettext("ul2")}</li>
                  <li>{i18n.gettext("ul3")}</li>
                  <li>{i18n.gettext("ul4")}</li>
                  <li>{i18n.gettext("ul5")}</li>
                  <li>{i18n.gettext("ul6")}</li>
                </ol>
                <hr className="mt-8 h-px bg-gray-200 border-0 dark:bg-gray-700 lg:hidden"/>
              </div>
            </div>
          </div>
        </div>
        
        <div className="ml-0 sm:ml-4 md:mx-12">
          <h1 className="text-4xl font-[raleway] font-normal uppercase my-12 md:text-center">
            {i18n.gettext("registrationForm")}
          </h1>
          <div className="ml-3">
            <div className="mt-4 text-start">
              <div className="lg:text-center">
                <h2 className="text-2xl mb-3">
                  {i18n.gettext("pleaseFillOut")}
                </h2>
                <h2 className="text-2xl mb-3 mx-4">
                  {i18n.gettext("registerByEmail1")}
                  <a className="text-2xl text-myLightBlue" href="#">{i18n.gettext("registerByEmail2")}</a> 
                  {i18n.gettext("registerByEmail3")}
                </h2>
                <a 
                  className="text-2xl underline text-myLightBlue"
                  href="/data-privacy"
                >
                  <i class="fa-solid fa-circle-exclamation text-black pr-4"></i> {i18n.gettext("learnAboutWhyWeAsk")}
                </a>
              </div>
              <div className="mt-4 font-[myriadLight] text-2xl">
                <ol>
                  <li className="font-[myriadBold]">
                    {i18n.gettext("boldListOfRegistration1")}
                  </li>
                  <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
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

                  <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
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
                  <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
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
                  <div className="lg:flex lg:flex-row">
                    <div className="lg:basis-2/3">
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
                    </div>
                    <div className="lg:basis-1/3 lg:mt-12 lg:pt-12">
                      <img src={doctorAndPatient} alt="doctorAndPatient" />
                    </div>
                  </div>
                </ol>
              </div>
              <div className="text-center py-10">
                <button className="btn btn-orange my-6 font-bold uppercase">
                  {i18n.gettext("submitRegistrationButton")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
