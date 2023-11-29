"use client";
import React, { useState, createContext, useContext } from "react";

import { languageOptions, dictionaryList } from "@/app/assets/data";

// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: "eng",
  dictionary: dictionaryList.eng,
});

// it provides the language context to app
export function LanguageProvider({ children }) {
  //   const defaultLanguage = localStorage.getItem("rcml-lang");
  const [userLanguage, setUserLanguage] = useState("en");

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "en";
      setUserLanguage(newLanguage);
      //   localStorage.setItem("rcml-lang", newLanguage);
    },
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

// get text according to id & current language
export function Text({ tid }) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[tid] || tid;
}
