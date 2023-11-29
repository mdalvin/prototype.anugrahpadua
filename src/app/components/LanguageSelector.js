"use client";
import React, { useContext } from "react";
import { LanguageContext } from "./containers/Language";
import { languageOptions } from "../assets/data";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = (e) => userLanguageChange(e.target.value);

  return (
    // <div className="text-black bg-primary">
    <select
      onChange={handleLanguageChange}
      value={userLanguage}
      className="bg-white uppercase text-sm text-blue font-medium focus:outline-none"
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
    // </div>
  );
}
