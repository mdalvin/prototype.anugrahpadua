"use client";
import React from "react";
import { Text } from "./containers/Language";

const VnM = () => {
  return (
    // <div
    //   className="h-fit lg:h-fit w-screen bg-about bg-no-repeat bg-cover text-left flex"
    //   id="about"
    // >
    <div className="h-fit lg:h-fit w-screen bg-white text-left px-5 py-10 lg:px-40 lg:py-20 grid align-top bg-opacity-90">
      <div className="mb-5 lg:mb-10 w-full text-end">
        <h1 className="text-blue text-2xl lg:text-4xl font-extrabold uppercase italic">
          <Text tid="vnm_title" />
        </h1>
      </div>
      <div className="grid md:flex lg:flex justify-center lg:justify-between w-full h-fit text-blue md:gap-2">
        <div className="w-full grid lg:w-[49%] bg-red bg-opacity-25 p-6 lg:p-10 rounded-sm h-fit md:h-[300px] lg:h-[450px] text-sm lg:text-lg mb-5 lg:mb-0 text-center">
          <div className="grid h-fit">
            <div className="w-20 h-20 grid rounded-full mb-1 place-self-center items-center justify-center lg:mb-4">
              <div className="bg-vision h-20 w-20 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
            </div>{" "}
            <p className="text-sm lg:text-lg uppercase font-bold text-center mb-2 underline align-top">
              <Text tid={"vision"} />
            </p>
            <p className="text-xs lg:text-base">
              <Text tid={"vnm_vision"} />
            </p>
          </div>
        </div>
        <div className="w-full grid lg:w-[49%] bg-red bg-opacity-25 p-6 lg:p-10 rounded-sm h-fit md:h-[300px] lg:h-[450px] text-sm lg:text-lg items-center">
          <div className="text-lg lg:text-2xl uppercase font-bold text-center mb-2 lg:mb-0 underline grid">
            <div className="w-20 h-20 grid rounded-full mb-1 place-self-center items-center justify-center lg:mb-4">
              <div className="bg-mission h-20 w-20 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
            </div>{" "}
            <p className="text-sm lg:text-lg uppercase font-bold text-center underline">
              <Text tid={"mission"} />
            </p>
          </div>
          <ul className="list-disc">
            <li className="mb-2 lg:mb-4 text-xs lg:text-base">
              <Text tid={"vnm_mission_1"} />
            </li>
            <li className="mb-2 lg:mb-4 text-xs lg:text-base">
              <Text tid={"vnm_mission_2"} />
            </li>
            <li className="mb-2 lg:mb-4 text-xs lg:text-base">
              <Text tid={"vnm_mission_3"} />
            </li>
          </ul>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default VnM;
