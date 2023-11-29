"use client";

import React from "react";
import { Text } from "./containers/Language";

const CompanyValues = () => {
  return (
    // <div
    //   className="h-fit lg:h-fit w-screen bg-about bg-no-repeat bg-cover text-left flex"
    //   id="about"
    // >
    <div className="h-fit lg:h-fit w-screen bg-white text-left px-5 py-5 lg:px-40 lg:py-10 grid align-top bg-opacity-90">
      <div className="mb-5 lg:mb-10 w-full text-start">
        <h1 className="text-blue text-3xl lg:text-6xl font-extrabold uppercase italic">
          <Text tid="cv_title" />
        </h1>
      </div>
      <div className="grid lg:flex justify-center lg:justify-between w-full h-fit text-blue">
        <div className="w-full grid lg:w-[32%] bg-red bg-opacity-25 p-6 lg:p-10 rounded-sm h-fit lg:h-[400px] text-sm lg:text-lg mb-5 lg:mb-0 text-center">
          <div className="h-fit grid">
            <div className="w-20 h-20 grid rounded-full bg-orange border-2 border-white mb-2 place-self-center items-center justify-center lg:mb-4">
              <div className="bg-quality h-16 w-16 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
            </div>{" "}
            <p className="text-lg lg:text-2xl uppercase font-semibold text-center mb-2 align-top">
              <Text tid={"cv_value_1_title"} />
            </p>
            <p className="text-base">
              <Text tid={"cv_value_1_description"} />
            </p>
          </div>
        </div>
        <div className="w-full grid lg:w-[32%] bg-red bg-opacity-25 p-6 lg:p-10 rounded-sm h-fit lg:h-[400px] text-sm lg:text-lg mb-5 lg:mb-0 text-center">
          <div className="h-fit grid">
            <div className="w-20 h-20 grid rounded-full bg-orange border-2 border-white mb-2 place-self-center items-center justify-center lg:mb-4">
              <div className="bg-safety h-16 w-16 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
            </div>{" "}
            <p className="text-lg lg:text-2xl uppercase font-semibold text-center mb-2 align-top">
              <Text tid={"cv_value_2_title"} />
            </p>
            <p className="text-base">
              <Text tid={"cv_value_2_description"} />
            </p>
          </div>
        </div>
        <div className="w-full grid lg:w-[32%] bg-red bg-opacity-25 p-6 lg:p-10 rounded-sm h-fit lg:h-[400px] text-sm lg:text-lg mb-5 lg:mb-0 text-center">
          <div className="h-fit grid">
            <div className="w-20 h-20 grid rounded-full bg-orange border-2 border-white mb-2 place-self-center items-center justify-center lg:mb-4">
              <div className="bg-inovation h-16 w-16 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
            </div>{" "}
            <p className="text-lg lg:text-2xl uppercase font-semibold text-center mb-2 align-top">
              <Text tid={"cv_value_3_title"} />
            </p>
            <p className="text-base">
              <Text tid={"cv_value_1_description"} />
            </p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CompanyValues;
