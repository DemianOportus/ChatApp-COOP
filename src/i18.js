import gettext from "gettext.js";
import en from "./locales/en";
import fr from "./locales/fr";

const i18n = new gettext();

// English translation
i18n.setMessages(
  "messages", // domain, no need to touch this
  "en", // language
  en,
  "nplurals=2; plural=n>1;"
);

// French translation
i18n.setMessages(
  "messages", // domain, no need to touch this
  "fr", // language
  fr,
  "nplurals=2; plural=n>1;"
);

// Default locale
i18n.setLocale("en");

export default i18n;
