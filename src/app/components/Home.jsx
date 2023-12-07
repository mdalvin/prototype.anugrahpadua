"use client";
import React from "react";
import { Text } from "./containers/Language";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const logo =
    "https://ik.imagekit.io/6tebrod5l/anugrahpadua/ap_logo_4v_JaExxL.png?updatedAt=1701352957988";
  return (
    <div className="h-[400px] lg:h-[700px] w-screen bg-hero bg-no-repeat bg-cover text-left flex">
      <div className="h-[400px] lg:h-[700px] w-screen bg-blue text-left px-5 lg:px-40 flex bg-opacity-70 items-center pt-10 lg:pt-0">
        <div className="h-fit grid md:w-[70%] lg:w-[75%]">
          <p className="font-semibold tracking-widest text-xl lg:text-3xl italic text-[#7391C5] mb-2">
            PT ANUGRAH PADUA
          </p>
          <h1 className="text-white text-2xl lg:text-4xl font-extrabold uppercase italic tracking-normal lg:tracking-wider leading-normal lg:leading-[3rem]">
            <Text tid="tagline" />
          </h1>
          <Link href={"/services"}>
            <button className="bg-red w-fit rounded-xl font-medium text-white px-5 py-2 hover:bg-[#7391C5] ease-in-out duration-200 text-sm lg:text-lg mt-6">
              <Text tid={"hcta"} />
            </button>
          </Link>
          <div className="grid h-fit right-5 top-80 lg:top-[550px] lg:right-10 absolute">
            <div className="relative w-20 h-20 lg:w-36 lg:h-36">
              <Image src={logo} alt="Partnership" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
