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

              <div className="mt-4 pt-8 font-[myriadLight] text-2xl">
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="col-span-2 m--2">
                    <UserInput
                      myLabel={i18n.gettext("Address")}
                      type="text"
                      id="homeAddressInput"
                    />
                  </div>
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
                </div>

                <div className="my-8">
                  <h1 className="my-4">
                    {i18n.gettext("communicationPreference")}
                  </h1>
                  <div className="md:grid md:grid-cols-3">
                    <Checkbox
                      id="communicationPreferenceOption1Checkbox"
                      option={i18n.gettext("communicationPreferenceOption1")}
                    />
                    <Checkbox
                      id="communicationPreferenceOption2Checkbox"
                      option={i18n.gettext("communicationPreferenceOption2")}
                    />
                  </div>
                </div>

                <div className="my-8">
                  <Checkbox
                    id="acceptPolicyCheckbox"
                    option={i18n.gettext("acceptPolicy")}
                  />

                  <div>
                    <h1 className="my-8">
                      {i18n.gettext("languagePreference")}
                    </h1>
                    <div className="md:grid md:grid-cols-3">
                      <Checkbox
                        id="languagePreferenceOption1Checkbox"
                        option={i18n.gettext("languagePreferenceOption1")}
                      />
                      <Checkbox
                        id="languagePreferenceOption2Checkbox"
                        option={i18n.gettext("languagePreferenceOption2")}
                      />
                      <Checkbox
                        id="languagePreferenceOption3Checkbox"
                        option={i18n.gettext("languagePreferenceOption3")}
                      />
                      <UserInput
                      myLabel={i18n.gettext("languageOtherPreferred")}
                      type="text"
                      id="languageOtherPreferredInput"
                      />
                    </div>
                  </div>

                  <div className="md:grid md:grid-cols-3 my-4">
                    <UserInput
                      myLabel={i18n.gettext("location")}
                      type="text"
                      id="locationInput"
                    />
                  </div>

                  <div className="my-8"> 
                    <h1 className="my-4">
                      {i18n.gettext("healthProfessionalGenderPreference")}
                    </h1>
                    <div className="md:grid md:grid-cols-3">
                      <Checkbox
                        id="healthProfessionalGenderPreference1Checkbox"
                        option={i18n.gettext("healthProfessionalGenderPreference1")}
                      />
                      <Checkbox
                        id="healthProfessionalGenderPreference2Checkbox"
                        option={i18n.gettext("healthProfessionalGenderPreference2")}
                      />
                      <Checkbox
                        id="healthProfessionalGenderPreference3Checkbox"
                        option={i18n.gettext("healthProfessionalGenderPreference3")}
                      />
                    </div>
                  </div>

                  <div className="my-8">
                    <h1 className="my-4">
                      {i18n.gettext("physicalHealth")}
                    </h1>
                    <div className="md:grid md:grid-cols-3">
                      <Checkbox
                        id="physicalHealthOption1Checkbox"
                        option={i18n.gettext("physicalHealthOption1")}
                      />
                      <Checkbox
                        id="physicalHealthOption2Checkbox"
                        option={i18n.gettext("physicalHealthOption2")}
                      />
                      <Checkbox
                        id="physicalHealthOption3Checkbox"
                        option={i18n.gettext("physicalHealthOption3")}
                      />
                      <Checkbox
                        id="physicalHealthOption4Checkbox"
                        option={i18n.gettext("physicalHealthOption4")}
                      />
                      <Checkbox
                        id="physicalHealthOption5Checkbox"
                        option={i18n.gettext("physicalHealthOption5")}
                      />
                    </div>
                  </div>

                  <div className="my-8">
                    <h1 className="my-4">
                      {i18n.gettext("mentalHealth")}
                    </h1>
                    <div className="md:grid md:grid-cols-3">
                      <Checkbox
                        id="mentalHealthOption1Checkbox"
                        option={i18n.gettext("mentalHealthOption1")}
                      />
                      <Checkbox
                        id="mentalHealthOption2Checkbox"
                        option={i18n.gettext("mentalHealthOption2")}
                      />
                      <Checkbox
                        id="mentalHealthOption3Checkbox"
                        option={i18n.gettext("mentalHealthOption3")}
                      />
                      <Checkbox
                        id="mentalHealthOption4Checkbox"
                        option={i18n.gettext("mentalHealthOption4")}
                      />
                      <Checkbox
                        id="mentalHealthOption5Checkbox"
                        option={i18n.gettext("mentalHealthOption5")}
                      />
                    </div>
                  </div>

                  <div className="my-8">
                    <h1 className="my-4">
                      {i18n.gettext("currentStatus")}
                    </h1>
                    <div>
                      <Checkbox
                        id="currentStatus1Checkbox"
                        option={i18n.gettext("currentStatus1")}
                      />
                      <Checkbox
                        id="currentStatus2Checkbox"
                        option={i18n.gettext("currentStatus2")}
                      />
                    </div>
                  </div>

                  <div className="my-8">
                    <h1 className="my-4">
                      {i18n.gettext("whoSeekingDoctor")}
                    </h1>
                    <div className="md:grid md:grid-cols-3">
                      <Checkbox
                        id="whoSeekingDoctorOption1Checkbox"
                        option={i18n.gettext("whoSeekingDoctorOption1")}
                      />
                      <Checkbox
                        id="whoSeekingDoctorOption2Checkbox"
                        option={i18n.gettext("whoSeekingDoctorOption2")}
                      />
                      <Checkbox
                        id="whoSeekingDoctorOption3Checkbox"
                        option={i18n.gettext("whoSeekingDoctorOption3")}
                      />
                    </div>
                  </div>

                  <div className="my-8">
                    <h1 className="my-4">
                      {i18n.gettext("registerForOthers1")}
                    </h1>
                    <h1 className="my-4">
                      {i18n.gettext("registerForOthers2")}
                    </h1>
                    <h1 className="my-4">
                      {i18n.gettext("registerForOthersQuestion1")}
                    </h1>
                    <div className="md:grid md:grid-cols-3">
                      <Checkbox
                        id="registerForOthersQuestion1Option1Checkbox"
                        option={i18n.gettext("registerForOthersQuestion1Option1")}
                      />
                      <Checkbox
                        id="registerForOthersQuestion1Option2Checkbox"
                        option={i18n.gettext("registerForOthersQuestion1Option2")}
                      />
                    </div>

                    <h1 className="my-4">
                      {i18n.gettext("registerForOthersQuestion2")}
                    </h1>
                    <div className="md:grid md:grid-cols-3">
                      <Checkbox
                        id="registerForOthersQuestion2Option1Checkbox"
                        option={i18n.gettext("registerForOthersQuestion2Option1")}
                      />
                      <Checkbox
                        id="registerForOthersQuestion2Option2Checkbox"
                        option={i18n.gettext("registerForOthersQuestion2Option2")}
                      />
                      <Checkbox
                        id="registerForOthersQuestion2Option3Checkbox"
                        option={i18n.gettext("registerForOthersQuestion2Option3")}
                      />
                      <Checkbox
                        id="registerForOthersQuestion2Option4Checkbox"
                        option={i18n.gettext("registerForOthersQuestion2Option4")}
                      />
                      <Checkbox
                        id="registerForOthersQuestion2Option5Checkbox"
                        option={i18n.gettext("registerForOthersQuestion2Option5")}
                      />
                      <Checkbox
                        id="registerForOthersQuestion2Option6Checkbox"
                        option={i18n.gettext("registerForOthersQuestion2Option6")}
                      />
                      <Checkbox
                        id="registerForOthersQuestion2Option7Checkbox"
                        option={i18n.gettext("registerForOthersQuestion2Option7")}
                      />
                      <Checkbox
                        id="registerForOthersQuestion2Option8Checkbox"
                        option={i18n.gettext("registerForOthersQuestion2Option8")}
                      />
                      <Checkbox
                        id="registerForOthersQuestion2Option9Checkbox"
                        option={i18n.gettext("registerForOthersQuestion2Option9")}
                      />
                      <Checkbox
                        id="registerForOthersQuestion2Option10Checkbox"
                        option={i18n.gettext("registerForOthersQuestion2Option10")}
                      />
                    </div>

                    <h1 className="my-4">
                      {i18n.gettext("contactInformation")}
                    </h1>
                    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        myLabel={i18n.gettext("phoneNumberIs")}
                        type="text"
                        id="phoneNumberInput"
                      />
                      <UserInput
                        myLabel={i18n.gettext("emailAddressIs")}
                        type="text"
                        id="emailAddressIs"
                      />
                    </div>
 
                    <h1 className="my-4">
                      {i18n.gettext("communicationPreference")}
                    </h1>
                    <div className="md:grid md:grid-cols-3">
                      <Checkbox
                        id="communicationPreferenceOption1Checkbox"
                        option={i18n.gettext("communicationPreferenceOption1")}
                      />
                      <Checkbox
                        id="communicationPreferenceOption2Checkbox"
                        option={i18n.gettext("communicationPreferenceOption2")}
                      />
                    </div>  
                  </div>
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
      </div>
  );
}
