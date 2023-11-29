import React from "react";
import { Text } from "./containers/Language";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[500px] lg:h-[700px] w-screen bg-hero bg-no-repeat bg-cover text-left flex">
      <div className="h-[500px] lg:h-[700px] w-screen bg-blue text-left px-5 py-20 lg:px-40 lg:py-40 flex bg-opacity-80 items-center">
        <div className="h-fit grid lg:w-[90%]">
          <p className="font-semibold tracking-widest text-xl lg:text-3xl italic text-[#7391C5] mb-2">
            PT ANUGRAH PADUA
          </p>
          <h1 className="text-white text-3xl lg:text-6xl font-extrabold uppercase italic">
            <Text tid="tagline" />
          </h1>
          <Link href={"/services"}>
            <button className="bg-red w-fit rounded-xl font-medium text-white px-5 py-2 hover:bg-[#7391C5] ease-in-out duration-200 text-sm lg:text-lg mt-6">
              See All Service
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
