import "../index.css";
import { useState, useContext } from "react";
import i18n from "../i18";
import { Context } from "../components/Context";
import UserInput from "../components/userInput";
import Checkbox from "../components/checkbox";
import chatApp from "../components/images/chatApp.png"
import doctors from "../components/images/doctors.png"

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
    <div className="text-center mt-10 mx-auto text-myDefaultGrey font-[myriadRegular]">
      <h1 className="text-4xl uppercase text-center mb-8 font-[raleway] font-bold">
        {i18n.gettext("joinDoctor")}
      </h1>
      <div className="lg:flex lg:flex-row">
        <div className="md:basis-2/5">
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
        <div className="lg:basis-3/5 ml-2 text-start lg:mx-10">
          <h1 className="text-3xl font-[raleway] font-normal mb-8 mt-10">
            {i18n.gettext("howToJoin")}
          </h1>
          <div className="mt-4">
            <ol className="text-2xl font-light">
              <li className="">
                <a className="hover:underline" href="#registrationForm">{i18n.gettext("li1")}</a>
              </li>
              <li>{i18n.gettext("li2")}</li>
              <li>{i18n.gettext("li3")}</li>
            </ol>
            <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700 lg:hidden" />
          </div>
        </div>
      </div>

      <div className="md:flex md:flex-row">
      <div className="md:basis-1/5 md:mx-8">
        <img src={chatApp} alt="chatApp" />
      </div>
      <div className="md:basis-3/5 pt-10">
        <div className="border-b-[1px] border-myDefaultGrey mx-[15px] pb-[30px] pt-[20px] md:mx-10">
          <div className="flex justify-between">
            <h1 className="uppercase text-4xl">{i18n.gettext("dropdown1")}</h1>
              <button className="px-[20px]" onClick={toggleWhatMakesItDifferent}>
                <i class={`fa-solid fa-angle-down fa-2xl ${whatMakesItDifferent && '-rotate-90'}`} ></i>
              </button>
            </div>
            {whatMakesItDifferent && <p className="text-left text-xl lg:mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat purus arcu, eu varius orci vestibulum vel. Vivamus vel elementum tortor, ut dapibus augue. Vestibulum et porttitor nunc. Phasellus et aliquet purus. Aenean quis vulputate lorem. Cras diam justo, finibus vel condimentum sed, tempus in magna. Nulla malesuada tincidunt ligula, et malesuada ante ornare eu. Praesent scelerisque nulla ut velit euismod lobortis. Aenean congue odio eget venenatis pellentesque. Nullam tristique felis risus, ac ullamcorper nulla sodales sit amet.</p>}
          </div>
          <div className="border-b-[1px] border-myDefaultGrey mx-[15px] pb-[30px] pt-[20px] md:mx-10">
            <div className="flex justify-between">
              <h1 className="uppercase text-4xl">{i18n.gettext("dropdown2")}</h1>
              <button className="px-[20px]" onClick={toggleHowToUse}>
                <i class={`fa-solid fa-angle-down fa-2xl ${howToUse && '-rotate-90'}`}></i>
              </button>              
            </div>
            {howToUse && <p className="text-left text-xl lg:mt-4">Integer convallis ante sit amet pretium pharetra. Vivamus at tellus ut elit pellentesque tempus ac eget ipsum. Mauris auctor finibus ex, et placerat purus sagittis sit amet. Sed tincidunt ipsum sit amet tellus pretium tempus ut quis nulla. Ut interdum vitae lectus vel lacinia. Sed viverra sed elit fermentum faucibus. Etiam fermentum, purus ac feugiat posuere, sapien nisi congue lectus, ut lacinia turpis risus vel ipsum.</p>}
          </div>
          <div className="border-b-[1px] border-myDefaultGrey mx-[15px] pb-[30px] pt-[20px] md:mx-10">
            <div className="flex justify-between">
              <h1 className="uppercase text-4xl">{i18n.gettext("dropdown3")}</h1>
              <button className="px-[20px]" onClick={toggleIncentives}>
                <i class={`fa-solid fa-angle-down fa-2xl ${incentives && '-rotate-90'}`}></i>
              </button>
            </div>
            {incentives && <p className="text-left text-xl lg:mt-4">Ut vulputate quis felis vel convallis. Vivamus magna lectus, consequat in vehicula vitae, vehicula et felis. Nulla facilisi. Suspendisse scelerisque congue arcu sit amet ultricies. Cras congue mollis purus, vitae porta diam efficitur vel. Curabitur commodo scelerisque pharetra. Fusce tincidunt diam sed nunc faucibus gravida.</p>}
          </div>
        </div>
        <div className="md:basis-1/5 md:mx-8 md:my-4">
          <img src={doctors} alt="doctors" />
        </div>
      </div>
      
      <div className="ml-0 sm:ml-4 md:mx-12" id="registrationForm">
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
                <a className="text-2xl underline text-myLightBlue" href="/data-privacy">
                  <i class="fa-solid fa-circle-exclamation text-black pr-4"></i> {i18n.gettext("learnAboutWhyWeAsk")}
                </a>
              </div>

              <div className="mt-4 pt-8 font-[myriadLight] text-2xl">
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <UserInput
                    myLabel={i18n.gettext("clinicName")}
                    type="text"
                    id="clinicNameInput"
                  />
                  <div className="col-span-2 m--2">
                    <UserInput
                      myLabel={i18n.gettext("Address")}
                      type="text"
                      id="homeAddressInput"
                    />
                  </div>
                  <UserInput
                    myLabel={i18n.gettext("phoneNumberIs")}
                    type="text"
                    id="phoneNumberInput"
                  />
                  <UserInput
                    myLabel={i18n.gettext("emailAddress")}
                    type="text"
                    id="emailAddressInput"
                  />
                </div>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <UserInput
                    myLabel={i18n.gettext("providerLastName")}
                    type="text"
                    id="providerLastNameInput"
                  />
                  <UserInput
                    myLabel={i18n.gettext("providerFirstName")}
                    type="text"
                    id="providerFirstNameInput"
                  />
                </div>
                <div className="my-8">
                  <Checkbox
                    id="policyAcceptCheckbox"
                    option={i18n.gettext("policyAccept")}
                  />
                </div>
                <div>
                    <h1 className="my-8">
                      {i18n.gettext("careServicesLanguage")}
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

                    <div className="my-8">
                      <div className="md:grid md:grid-cols-3">
                        <UserInput
                          myLabel={i18n.gettext("numberOfSpots")}
                          type="text"
                          id="numberOfSpotsInput"
                        />
                      </div>
                    </div>

                    <div className="my-8">
                      <h1 className="my-4">
                        {i18n.gettext("providerSpecializations")}
                      </h1>
                      <div className="md:grid md:grid-cols-3">
                        <Checkbox
                          id="providerSpecialtiesOption1Checkbox"
                          option={i18n.gettext("providerSpecialtiesOption1")}
                        />
                        <Checkbox
                          id="providerSpecialtiesOption2Checkbox"
                          option={i18n.gettext("providerSpecialtiesOption2")}
                        />
                        <Checkbox
                          id="providerSpecialtiesOption3Checkbox"
                          option={i18n.gettext("providerSpecialtiesOption3")}
                        />
                        <Checkbox
                          id="providerSpecialtiesOption4Checkbox"
                          option={i18n.gettext("providerSpecialtiesOption4")}
                        />
                        <Checkbox
                          id="providerSpecialtiesOption5Checkbox"
                          option={i18n.gettext("providerSpecialtiesOption5")}
                        />
                        <Checkbox
                          id="providerSpecialtiesOption6Checkbox"
                          option={i18n.gettext("providerSpecialtiesOption6")}
                        />
                        <UserInput
                          myLabel={i18n.gettext("providerOtherSpecialties")}
                          type="text"
                          id="providerOtherSpecialtiesInput"
                      />
                      </div>
                    </div>
                </div>
              </div>

            </div>
          </div>

          <div className="text-center md:my-10 font-bold py-10">
            <button className="btn btn-orange uppercase">{i18n.gettext("submitRegistrationButton")}</button>
          </div>
      </div>

      
              
           
    </div>
  );
}
