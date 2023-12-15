"use client";
import React from "react";
import { Text } from "./containers/Language";
import Image from "next/image";

const Gallery = () => {
  const pics = [
    {
      _id: "0",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl1_6g-QSaXd1.jpg?updatedAt=1701844282553",
    },
    {
      _id: "1",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl31_5h8bMS76h.JPG?updatedAt=1702605671343",
    },
    {
      _id: "2",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl3_w-QgTOegu.jpg?updatedAt=1701844282500",
    },
    {
      _id: "3",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl4_i1BVxsGh7.jpg?updatedAt=1701844282757",
    },
    {
      _id: "4",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl5_9wQLCJMFd.JPG?updatedAt=1701844287598",
    },
    {
      _id: "5",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl6_0MPLQcU8E.JPG?updatedAt=1701844287617",
    },
    {
      _id: "6",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl7_DzYZe7Y7N.JPG?updatedAt=1701844289481",
    },
    {
      _id: "7",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl8__k6jhCIII.JPG?updatedAt=1701844289779",
    },
    {
      _id: "8",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl21_rB0nFMhi9.JPG?updatedAt=1701844721836",
    },
    {
      _id: "9",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl10_K4PMAFtS0.JPG?updatedAt=1701844288120",
    },
    {
      _id: "10",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl11_On6BMJgEf.JPG?updatedAt=1701844291821",
    },
    {
      _id: "11",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl12_BX5iDEfbh.JPG?updatedAt=1701844290780",
    },
    {
      _id: "12",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl13_dsIlJcirb.JPG?updatedAt=1701844290257",
    },
    {
      _id: "13",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl14_n8xk8rU1V.JPG?updatedAt=1701844290239",
    },
    {
      _id: "14",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl15_dCMQPpPud.JPG?updatedAt=1701844295749",
    },
    {
      _id: "15",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl16__nzpmSGu7.JPG?updatedAt=1701844296186",
    },
    {
      _id: "16",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl17_SAboGK9uC.JPG?updatedAt=1701844295872",
    },
    {
      _id: "17",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl18_ZoLEvK2iw.JPG?updatedAt=1701844297728",
    },
    {
      _id: "18",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl19_wA7t16_pB.JPG?updatedAt=1701844297874",
    },
    {
      _id: "19",
      link: "https://ik.imagekit.io/6tebrod5l/anugrahpadua/photos/gl20_kcd4a-pGt.JPG?updatedAt=1701844297121",
    },
  ];
  return (
    // <div
    //   className="h-fit lg:h-fit w-screen bg-about bg-no-repeat bg-cover text-left flex"
    //   id="about"
    // >
    <div className="h-fit lg:h-fit w-screen bg-white text-left px-5 py-10 lg:px-40 lg:py-20 grid align-top bg-opacity-90">
      <div className="mb-5 lg:mb-10 w-full text-end">
        <h1 className="text-blue text-2xl lg:text-4xl font-extrabold uppercase italic">
          <Text tid="gallery" />
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xxl:grid-cols-5 txl:grid-cols-7 lg:w-full h-[500px] lg:h-fit overflow-scroll justify-center">
        {pics.map((p) => (
          <div
            className="relative h-[320px] w-full md:h-[160px] md:w-[175px] lg:h-[210px] lg:w-[210px] xxl:h-[280px] xxl:w-[300px] my-1 lg:m-2"
            key={p._id}
          >
            <Image
              src={p.link}
              alt="Gallery"
              priority
              crossOrigin="anonymous"
              fill
              className="rounded-sm"
            />
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default Gallery;
