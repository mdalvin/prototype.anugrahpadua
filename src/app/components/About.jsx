"use client";

import React from "react";
import { Text } from "./containers/Language";

const About = () => {
  return (
    <div
      className="h-fit lg:h-fit w-screen bg-about bg-no-repeat bg-cover text-left flex"
      id="about"
    >
      <div className="h-fit lg:h-fit w-screen bg-blue text-left px-5 py-20 lg:px-40 lg:py-40 grid align-top bg-opacity-90">
        <div className="mb-5 lg:mb-10">
          <h1 className="text-white text-3xl lg:text-6xl font-extrabold uppercase italic">
            <Text tid="about_title" />
          </h1>
        </div>
        <div className="w-full lg:text-left h-fit text-white">
          <p className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
            <Text tid={"about_p1"} />
          </p>
          <p className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
            <Text tid={"about_p2"} />
          </p>
          <p className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
            <Text tid={"about_p3"} />
          </p>
          <p className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
            <Text tid={"about_p4"} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
