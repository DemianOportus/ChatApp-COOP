import "../index.css";
import { useEffect, useState, useContext } from "react";
import i18n from "../i18";

import { Context } from "./Context";

export default function AppendNavbar() {
  const [size, setSize] = useState(localStorage.getItem("fontSize") ?? 100);
  useEffect(() => {
    document.documentElement.style.fontSize = `${size}%`;
    localStorage.setItem("fontSize", size);
  }, [size]);

  function textSizePlus(facts) {
    if (facts) {
      if (size < 140) {
        setSize((prev) => prev + 10);
      } else {
        alert("Error. Font cannot be bigger");
      }
    } else {
      if (size > 90) {
        setSize((prev) => prev - 10);
      } else {
        alert("Error. Font cannot be smaller");
      }
    }
  }

  const { locale, setLocale } = useContext(Context);

  return (
    <div className="flex items-center justify-center bg-gray-300">
      <div className="inline-flex">
        <button
          className=" hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
          onClick={() => textSizePlus(true)}
        >
          {i18n.gettext("textSizeIncrease")}
        </button>
        <button
          className="hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={() => textSizePlus(false)}
        >
          {i18n.gettext("textSizeDecrease")}
        </button>
        <button
          className="hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
          onClick={() => {
            if (locale === "en") {
              i18n.setLocale("fr");
              // Have to update something in state so changed locale takes effect
              setLocale("fr");
            } else {
              i18n.setLocale("en");
              setLocale("en");
            }
          }}
        >
          {i18n.gettext("language")}
        </button>
      </div>
    </div>
  );
}
