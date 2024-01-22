import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "./locale/en.json";
import frJSON from "./locale/fr.json";

const browserLanguage = navigator.language.split("-")[0]; // Get the user's browser language

i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    fr: { ...frJSON },
  },
  lng: browserLanguage || "en",
});

export default i18n;
