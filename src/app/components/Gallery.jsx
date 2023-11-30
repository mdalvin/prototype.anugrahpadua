"use client";
import React from "react";
import { Text } from "./containers/Language";
import Image from "next/image";

const Gallery = () => {
  const pics = [
    {
      _id: "0",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/g1_mQ_a47fwz.jpeg?updatedAt=1701352958067",
    },
    {
      _id: "1",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/g2_IwC0iSuKwG.jpeg?updatedAt=1701352958136",
    },
    {
      _id: "2",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/g3_P2M2cxQr_.jpeg?updatedAt=1701352957827",
    },
    {
      _id: "3",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/g4_f9wCwfnb8.jpeg?updatedAt=1701352958137",
    },
    {
      _id: "4",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/g5_dz4-IppXYV.jpeg?updatedAt=1701352958122",
    },
    {
      _id: "5",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/g6_v5QOdsk1q.jpeg?updatedAt=1701352958201",
    },
    {
      _id: "6",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/g7_afA9TVu6mH.jpeg?updatedAt=1701352958331",
    },
    {
      _id: "7",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/g8_TKT4G0Uzbj.jpeg?updatedAt=1701352958482",
    },
    {
      _id: "8",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/g9_-P4AO-wfzD.jpeg?updatedAt=1701352958231",
    },
  ];
  return (
    // <div
    //   className="h-fit lg:h-fit w-screen bg-about bg-no-repeat bg-cover text-left flex"
    //   id="about"
    // >
    <div className="h-fit lg:h-fit w-screen bg-white text-left px-5 py-10 lg:px-40 lg:py-20 grid align-top bg-opacity-90">
      <div className="mb-5 lg:mb-10 w-full text-end">
        <h1 className="text-blue text-3xl lg:text-6xl font-extrabold uppercase italic">
          <Text tid="gallery" />
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:w-full h-[500px] lg:h-fit overflow-scroll justify-center">
        {pics.map((p) => (
          <div
            className="relative h-[320px] w-full lg:h-[355px] lg:w-[360px] my-1 lg:m-2"
            key={p._id}
          >
            <Image
              src={p.link}
              alt="Gallery"
              priority
              crossOrigin="anonymous"
              fill
            />
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default Gallery;
