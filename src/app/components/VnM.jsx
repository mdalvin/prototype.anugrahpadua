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
        <h1 className="text-blue text-3xl lg:text-6xl font-extrabold uppercase italic">
          <Text tid="vnm_title" />
        </h1>
      </div>
      <div className="grid lg:flex justify-center lg:justify-between w-full h-fit text-blue">
        <div className="w-full grid lg:w-[49%] bg-red bg-opacity-25 p-6 lg:p-10 rounded-sm h-fit lg:h-[500px] text-sm lg:text-lg mb-5 lg:mb-0 text-center">
          <div className="grid h-fit">
            <div className="w-24 h-24 grid rounded-full mb-1 place-self-center items-center justify-center lg:mb-4">
              <div className="bg-vision h-[90px] w-[90px] bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
            </div>{" "}
            <p className="text-lg lg:text-2xl uppercase font-bold text-center mb-2 underline align-top">
              <Text tid={"vision"} />
            </p>
            <p>
              <Text tid={"vnm_vision"} />
            </p>
          </div>
        </div>
        <div className="w-full grid lg:w-[49%] bg-red bg-opacity-25 p-6 lg:p-10 rounded-sm h-fit lg:h-[500px] text-sm lg:text-lg items-center">
          <div className="text-lg lg:text-2xl uppercase font-bold text-center mb-2 underline grid">
            <div className="w-24 h-24 grid rounded-full mb-1 place-self-center items-center justify-center lg:mb-4">
              <div className="bg-mission h-[90px] w-[90px] bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
            </div>{" "}
            <Text tid={"mission"} />
          </div>
          <ul className="list-disc">
            <li className="mb-4">
              <Text tid={"vnm_mission_1"} />
            </li>
            <li className="mb-4">
              <Text tid={"vnm_mission_2"} />
            </li>
            <li className="mb-4">
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
