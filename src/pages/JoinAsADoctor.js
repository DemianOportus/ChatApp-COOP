import "../index.css";
import { useEffect, useState, useContext } from "react";
import i18n from "../i18";
import { Context } from "../components/Context";

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
    <div>
      <h1 className="text-4xl uppercase text-center pt-[60px]">
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

      <div className="ml-2 text-start sm:ml-4 md:max-w-lg">
        <h1 className="text-4xl font-raleway font-normal block ">
          {i18n.gettext("howToJoin")}
        </h1>

        <div className="mt-4">
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

      <div>
        <div className="flex justify-between">
          <h1 className="uppercase text-4xl p-[20px]">
            what makes this solution different
          </h1>
          <button className="px-[20px]" onClick={toggleWhatMakesItDifferent}>
            <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>
        {whatMakesItDifferent && <p>Lorem Ipsum1</p>}
      </div>

      <div>
        <div className="flex justify-between">
          <h1 className="uppercase text-4xl p-[20px]">
            how to use this solution in your practice
          </h1>
          <button className="p-[20px]" onClick={toggleHowToUse}>
            <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>
        {howToUse && <p>Lorem Ipsum2</p>}
      </div>

      <div>
        <div className="flex justify-between">
          <h1 className="uppercase text-4xl px-[20px]">
            incentives for onboarding new patients
          </h1>
          <button className="px-[20px]" onClick={toggleIncentives}>
            <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>
        {incentives && <p>Lorem Ipsum3</p>}
      </div>
    </div>
  );
}
