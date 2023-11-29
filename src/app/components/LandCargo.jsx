"use client";
import React from "react";
import { Text } from "./containers/Language";

const LangCargo = () => {
  return (
    <div className="h-fit lg:h-fit w-screen bg-about bg-no-repeat bg-cover text-left flex">
      <div className="h-fit lg:h-fit w-screen bg-blue text-left px-5 py-10 lg:px-40 lg:py-20 grid align-top bg-opacity-90">
        <div className="mb-5 lg:mb-10">
          <h1 className="text-white text-3xl lg:text-6xl font-extrabold uppercase italic">
            <Text tid="land_cargo_title" />
          </h1>
        </div>
        <div className="w-full h-fit text-white">
          <p className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
            <Text tid={"land_cargo_description_1"} />
          </p>
          <p className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
            <Text tid={"land_cargo_description_2"} />
          </p>
          <p className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
            <Text tid={"land_cargo_description_3"} />
          </p>
        </div>
        <ul className="list-disc px-5 text-white mt-2">
          <li className="text-sm lg:text-lg mt-1 lg:mt-2 font-light">
            <Text tid={"land_cargo_point_1"} />
          </li>
          <li className="text-sm lg:text-lg mt-1 lg:mt-2 font-light">
            <Text tid={"land_cargo_point_2"} />
          </li>
          <li className="text-sm lg:text-lg mt-1 lg:mt-2 font-light">
            <Text tid={"land_cargo_point_3"} />
          </li>
          <li className="text-sm lg:text-lg mt-1 lg:mt-2 font-light">
            <Text tid={"land_cargo_point_4"} />
          </li>
          <li className="text-sm lg:text-lg mt-1 lg:mt-2 font-light">
            <Text tid={"land_cargo_point_5"} />
          </li>
        </ul>
        <p className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
          <Text tid={"land_cargo_closing"} />
        </p>
      </div>
    </div>
  );
};

export default LangCargo;
