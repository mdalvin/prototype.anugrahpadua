"use client";

import React from "react";
import Image from "next/image";
import { Text } from "./containers/Language";

const About = () => {
  const director =
    "https://ik.imagekit.io/6tebrod5l/anugrahpadua/director_vgrO7OxLb.png?updatedAt=1701359241105";
  return (
    <div
      className="h-fit lg:h-fit w-screen bg-about bg-no-repeat bg-cover text-left flex"
      id="about"
    >
      <div className="h-fit lg:h-fit w-screen bg-blue text-left px-5 py-20 lg:px-40 lg:py-40 grid align-top bg-opacity-90">
        <div className="mb-5 lg:mb-10">
          <h1 className="text-white text-2xl lg:text-4xl font-extrabold uppercase italic">
            <Text tid="about_title" />
          </h1>
        </div>
        <div className="w-full grid md:flex lg:flex justify-between">
          <div className="w-full lg:w-[60%] lg:text-left h-fit text-white">
            <p className="text-xs lg:text-base font-light">
              <Text tid={"about_p1"} />
            </p>
            <p className="text-xs lg:text-base mt-4 lg:mt-4 font-light">
              <Text tid={"about_p2"} />
            </p>
            <p className="text-xs lg:text-base mt-4 lg:mt-4 font-light">
              <Text tid={"about_p3"} />
            </p>
            <p className="text-xs lg:text-base mt-4 lg:mt-4 font-light">
              <Text tid={"about_p4"} />
            </p>
          </div>
          <div className="w-full lg:w-[40%] grid items-center justify-center h-fit text-white pt-6 md:pt-0 lg:pt-0 place-content-center">
            <div className="relative right-0 h-[250px] w-[250px] lg:h-[350px] lg:w-[350px]">
              <Image
                src={director}
                alt="director"
                priority
                crossOrigin="anonymous"
                fill
              />
            </div>
            <div className="py-2">
              <h1 className="text-[#7391C5] font-bold text-lg lg:text-xl text-center">
                Dadang Marlius Padua
              </h1>
              <p className="text-white text-xs lg:text-base text-center">
                <Text tid={"director"} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
