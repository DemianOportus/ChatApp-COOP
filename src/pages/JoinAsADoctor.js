import "../index.css";
import { useState, useContext } from "react";
import i18n from "../i18";
import { Context } from "../components/Context";
import UserInput from "../components/userInput";
import Checkbox from "../components/checkbox";

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
    <div className="mx-auto text-myDefaultGrey">
      <h1 className="text-4xl uppercase text-center pt-[60px] font-[raleway] font-bold">
        {i18n.gettext("joinDoctor")}
      </h1>

      <div className="lg:grid lg:grid-cols-2 lg:items-center">
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

        <div className="text-start font-[myriadRegular] ml-2 sm:ml-4 md:mx-10">
          <h1 className="text-4xl block">{i18n.gettext("howToJoin")}</h1>

          <div className="mt-4">
            <div className="mt-4">
              <ol className="text-2xl md:grid md:grid-cols-2 md:gap-x-12 lg:gap-x-6">
                <li className="">
                  <a className="hover:underline" href="#registrationForm">{i18n.gettext("li1")}</a>
                </li>
                <li>{i18n.gettext("li2")}</li>
                <li>{i18n.gettext("li3")}</li>
                <li>{i18n.gettext("li4")}</li>
              </ol>
              <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700 lg:hidden" />
            </div>
          </div>
        </div>
      </div>

      <div className="font-[myriadRegular] border-b-[1px] border-myDefaultGrey mx-[15px] pb-[30px] md:mx-10">
        <div className="flex justify-between">
          <h1 className="uppercase text-4xl">{i18n.gettext("dropdown1")}</h1>
          <button className="px-[20px]" onClick={toggleWhatMakesItDifferent}>
            <i class={`fa-solid fa-angle-down fa-2xl ${whatMakesItDifferent && '-rotate-90'}`} ></i>
          </button>
        </div>
        {whatMakesItDifferent && <p>Lorem Ipsum1</p>}
      </div>

      <div className="font-[myriadRegular] border-b-[1px] border-myDefaultGrey mx-[15px] pb-[30px] pt-[20px] md:mx-10">
        <div className="flex justify-between">
          <h1 className="uppercase text-4xl">{i18n.gettext("dropdown2")}</h1>
          <button className="px-[20px]" onClick={toggleHowToUse}>
            <i class={`fa-solid fa-angle-down fa-2xl ${howToUse && '-rotate-90'}`}></i>
          </button>
        </div>
        {howToUse && <p>Lorem Ipsum2</p>}
      </div>

      <div className="font-[myriadRegular] border-b-[1px] border-myDefaultGrey mx-[15px] pb-[30px] pt-[20px] md:mx-10">
        <div className="flex justify-between">
          <h1 className="uppercase text-4xl">{i18n.gettext("dropdown3")}</h1>
          <button className="px-[20px]" onClick={toggleIncentives}>
            <i class={`fa-solid fa-angle-down fa-2xl ${incentives && '-rotate-90'}`}></i>
          </button>
        </div>
        {incentives && <p>Lorem Ipsum3</p>}
      </div>

        <div className="ml-0  sm:ml-4" id="registrationForm">
        <h1 className="mt-6 text-4xl font-raleway font-normal block uppercase md:text-center">
          {i18n.gettext("registrationForm")}
        </h1>
        <div className="ml-3 font-[myriadRegular]">
          <div className="mt-4 text-start">
            <div className="lg:text-center my-10">
              <h2 
                className="font-[myriadRegular] text-2xl"
              >
                {i18n.gettext("pleaseFillOut")}
              </h2>

              <a 
                className=" text-2xl underline text-myLightBlue"
                href="/data-privacy"
              >
                <i class="fa-solid fa-circle-exclamation text-black pr-4"></i> {i18n.gettext("learnAboutWhyWeAsk")}
              </a>
            </div>
            <div className="mt-4 font-[myriadLight] text-2xl ">
              <ol>
                <li className="font-[myriadBold]">
                  {i18n.gettext("personalInformation")}
                </li>
                <div className="md:grid md:grid-cols-2">
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
                </div>
                <li className="font-[myriadBold]">
                  {i18n.gettext("professionalInformation")}
                </li>
                <div className="md:grid md:grid-cols-2">
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
                </div>
             
                  <li className="font-[myriadBold]">
                    <h2>{i18n.gettext("languagePreference")}</h2>
                  </li>
                  <p className="pb-6">{i18n.gettext("selectLanguage")}</p>
                  <div className="pl-3 md:grid md:grid-cols-3">
                    <Checkbox
                      id="englishCheckbox"
                      option={i18n.gettext("englishOption")}
                    />
                    <Checkbox
                      id="frenchCheckbox"
                      option={i18n.gettext("frenchOption")}
                    />
                    <Checkbox
                      id="spanishCheckbox"
                      option={i18n.gettext("spanishOption")}
                    />
                    <Checkbox
                      id="arabicCheckbox"
                      option={i18n.gettext("arabicOption")}
                    />
                    <Checkbox
                      id="chineseCheckbox"
                      option={i18n.gettext("chineseOption")}
                    />
                    <Checkbox
                      id="japaneseCheckbox"
                      option={i18n.gettext("japaneseOption")}
                    />
                    <Checkbox
                      id="portugueseCheckbox"
                      option={i18n.gettext("portugueseOption")}
                    />
                    <Checkbox
                      id="otherLanguagesCheckbox"
                      option={i18n.gettext("otherLanguagesOption")}
                    />
                    <UserInput
                      type="text"
                      id="otherLanguagesInput"
                    /> 
                  </div> 

                  <li className="font-[myriadBold]">
                    {i18n.gettext("yourSpecializations")}
                  </li>
                  <p className="pb-6">{i18n.gettext("physicianSpecialties")}</p>
                  <div className="md:grid md:grid-cols-3">
                    <Checkbox
                      id="allergyAndImmunologyCheckbox"
                      option={i18n.gettext("allergyAndImmunologyOption")}
                    />
                    <Checkbox
                      id="anesthesiologyCheckbox"
                      option={i18n.gettext("anesthesiologyOption")}
                    />
                    <Checkbox
                      id="dermatologyCheckbox"
                      option={i18n.gettext("dermatologyOption")}
                    />
                    <Checkbox
                      id="diagnosticRadiologyCheckbox"
                      option={i18n.gettext("diagnosticRadiologyOption")}
                    />
                    <Checkbox
                      id="emergencyMedicineCheckbox"
                      option={i18n.gettext("emergencyMedicineOption")}
                    />
                    <Checkbox
                      id="familyMedicineCheckbox"
                      option={i18n.gettext("familyMedicineOption")}
                    />
                    <Checkbox
                      id="internalMedicineCheckbox"
                      option={i18n.gettext("internalMedicineOption")}
                    />
                    <Checkbox
                      id="medicalGeneticsCheckbox"
                      option={i18n.gettext("medicalGeneticsOption")}
                    />
                    <Checkbox
                      id="neurologyCheckbox"
                      option={i18n.gettext("neurologyOption")}
                    />
                    <Checkbox
                      id="nuclearMedicineCheckbox"
                      option={i18n.gettext("nuclearMedicineOption")}
                    />
                    <Checkbox
                      id="obstetricsAndGynaecologyCheckbox"
                      option={i18n.gettext("obstetricsAndGynaecologyOption")}
                    />
                    <Checkbox
                      id="ophthalmologyCheckbox"
                      option={i18n.gettext("ophthalmologyOption")}
                    />
                    <Checkbox
                      id="pathologyCheckbox"
                      option={i18n.gettext("pathologyOption")}
                    />
                    <Checkbox
                      id="pediatricsCheckbox"
                      option={i18n.gettext("pediatricsOption")}
                    />
                    <Checkbox
                      id="physicalMedicineAndRehabCheckbox"
                      option={i18n.gettext("physicalMedicineAndRehabOption")}
                    />
                    <Checkbox
                      id="preventiveMedicineCheckbox"
                      option={i18n.gettext("preventiveMedicineOption")}
                    />
                    <Checkbox
                      id="psychiatryCheckbox"
                      option={i18n.gettext("psychiatryOption")}
                    />
                    <Checkbox
                      id="radiationOncologyCheckbox"
                      option={i18n.gettext("radiationOncologyOption")}
                    />
                    <Checkbox
                      id="surgeryCheckbox"
                      option={i18n.gettext("surgeryOption")}
                    />
                    <Checkbox
                      id="urologyCheckbox"
                      option={i18n.gettext("urologyOption")}
                    />
                    <Checkbox
                      id="otherSpecialtiesCheckbox"
                      option={i18n.gettext("otherSpecialtiesOption")}
                    />
                    <UserInput
                      type="text"
                      id="otherSpecialtiesInput"
                    /> 
                  </div>

                  <p className="py-6">{i18n.gettext("physicianChronicIllnessSpecialties")}</p>
                    <div className="md:grid md:grid-cols-3">
                      <Checkbox
                        id="ALSCheckbox"
                        option={i18n.gettext("ALSOption")}
                      />
                      <Checkbox
                        id="alzheimersCheckbox"
                        option={i18n.gettext("alzheimersOption")}
                      />
                      <Checkbox
                        id="arthritisCheckbox"
                        option={i18n.gettext("arthritisOption")}
                      />
                      <Checkbox
                        id="asthmaCheckbox"
                        option={i18n.gettext("asthmaOption")}
                      />
                      <Checkbox
                        id="cancerCheckbox"
                        option={i18n.gettext("cancerOption")}
                      />
                      <Checkbox
                        id="chronicObstructiveCheckbox"
                        option={i18n.gettext("chronicObstructiveOption")}
                      />
                      <Checkbox
                        id="crohnsCheckbox"
                        option={i18n.gettext("crohnsOption")}
                      />
                      <Checkbox
                        id="cysticFibrosisCheckbox"
                        option={i18n.gettext("cysticFibrosisOption")}
                      />
                      <Checkbox
                        id="otherChronicIllnessSpecialtiesCheckbox"
                        option={i18n.gettext("otherChronicIllnessSpecialtiesOption")}
                      />
                      <UserInput
                        type="text"
                        id="otherChronicIllnessSpecialtiesInput"
                      />
                    </div>
                    <p className="py-6">{i18n.gettext("physicianMentalHealthSpecialties")}</p>
                    <div className="md:grid md:grid-cols-3">
                      <Checkbox
                        id="alcoholAddictinCheckbox"
                        option={i18n.gettext("alcoholAddictionOption")}
                      />
                      <Checkbox
                        id="prescriptionDrugAddictionCheckbox"
                        option={i18n.gettext("prescriptionDrugAddictionOption")}
                      />
                      <Checkbox
                        id="drugAddictionCheckbox"
                        option={i18n.gettext("drugAddictionOption")}
                      />
                      <Checkbox
                        id="heroinAddictionCheckbox"
                        option={i18n.gettext("heroinAddictionOption")}
                      />
                      <Checkbox
                        id="opioidAddictionCheckbox"
                        option={i18n.gettext("opioidAddictionOption")}
                      />
                      <Checkbox
                        id="moodDisordersCheckbox"
                        option={i18n.gettext("moodDisordersOption")}
                      />
                      <Checkbox
                        id="schizophreniaCheckbox"
                        option={i18n.gettext("schizophreniaOption")}
                      />
                      <Checkbox
                        id="anxietyDisordersCheckbox"
                        option={i18n.gettext("anxietyDisordersOption")}
                      />
                      <Checkbox
                        id="personalityDisordersCheckbox"
                        option={i18n.gettext("personalityDisordersOption")}
                      />
                      <Checkbox
                        id="eatingDisordersCheckbox"
                        option={i18n.gettext("eatingDisordersOption")}
                      />
                      <Checkbox
                        id="problemGamblingCheckbox"
                        option={i18n.gettext("problemGamblingOption")}
                      />
                      <Checkbox
                        id="substanceDependencyCheckbox"
                        option={i18n.gettext("substanceDependencyOption")}
                      />
                    <Checkbox
                        id="otherMentalHealthSpecialtiesCheckbox"
                        option={i18n.gettext("otherMentalHealthSpecialties")}
                      />
                    <UserInput
                      type="text"
                      id="otherMentalHealthSpecialtiesInput"
                    />
                  </div>
                </ol>
              </div>
              <div className="text-center md:my-10">
                <button className="btn btn-orange">{i18n.gettext("submitRegistrationButton")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
