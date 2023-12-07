"use client";
import React from "react";
import { Text } from "./containers/Language";
import Image from "next/image";
import Link from "next/link";

const Partner = () => {
  return (
    // <div
    //   className="h-fit lg:h-fit w-screen bg-about bg-no-repeat bg-cover text-left flex"
    //   id="about"
    // >
    <div className="h-fit lg:h-fit w-screen bg-white text-left px-5 py-10 lg:px-40 lg:py-20 grid align-top bg-opacity-90">
      <div className="w-full text-end">
        <h1 className="text-blue text-2xl lg:text-4xl font-extrabold uppercase text-center mb-2">
          <Text tid="partnership_title" />
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center lg:justify-between w-full h-fit text-blue py-2 lg:py-20 gap-4 lg:gap-10">
        <div className="grid h-fit w-full text-center items-center justify-center">
          <div className="relative w-28 h-20 lg:w-40 lg:h-28 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/mitsubishi_KSUhpxd8u.png?updatedAt=1701191934054"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full text-center items-center justify-center">
          <div className="relative w-28 h-20 lg:w-40 lg:h-28 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/hyundai_2gEt0EBPC.png?updatedAt=1701191934111"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full text-center items-center justify-center">
          <div className="relative w-28 h-20 lg:w-40 lg:h-28 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/udnissan_OKTLOicFN.png?updatedAt=1701191933510"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full text-center items-center justify-center">
          <div className="relative w-28 h-20 lg:w-40 lg:h-28 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/hino_973K1MvcE.png?updatedAt=1701191934400"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full text-center items-center justify-center">
          <div className="relative w-28 h-20 lg:w-40 lg:h-28 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/suzuki_1GTv2a6HB.png?updatedAt=1701835905156"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full text-center items-center justify-center">
          <div className="relative w-28 h-20 lg:w-40 lg:h-28 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/nissan_VOYL0rkUF.png?updatedAt=1701835907139"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full text-center items-center justify-center">
          <div className="relative w-28 h-20 lg:w-40 lg:h-28 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/honda_GuOzTHY1pB.png?updatedAt=1701835906244"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full text-center items-center justify-center">
          <div className="relative w-28 h-20 lg:w-40 lg:h-28 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/mazda_sdLTROKd9n.png?updatedAt=1701835906040"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full text-center items-center justify-center">
          <div className="relative w-28 h-20 lg:w-40 lg:h-28 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/tata_M4LmQHbuhy.png?updatedAt=1701835906010"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full text-center items-center justify-center">
          <div className="relative w-28 h-20 lg:w-40 lg:h-28 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/daihatsu_QRVeNyWiHG.png?updatedAt=1701835906312"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full text-center items-center justify-center">
          <div className="relative w-28 h-20 lg:w-40 lg:h-28 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/kia_8D7p_wXpbG.png?updatedAt=1701835905324"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full text-center items-center justify-center pt-4 lg:pt-8">
          <div className="relative w-28 h-12 lg:w-40 lg:h-16 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/wuling_L3A5e0omA1F.png?updatedAt=1701835907577"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
      </div>
      <div className="grid justify-center w-full h-fit text-blue mt-12 lg:mt-6">
        <Link href={"/partnership"}>
          <button className="bg-red w-fit rounded-xl font-medium text-white px-5 py-2 hover:bg-[#7391C5] ease-in-out duration-200 text-sm lg:text-lg">
            <Text tid={"pcta"} />
          </button>
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default Partner;
