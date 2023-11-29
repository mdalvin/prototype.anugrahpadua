import React from "react";
import { Text } from "./containers/Language";

const Advantages = () => {
  return (
    <div className="h-fit lg:h-fit w-screen bg-white text-left px-5 lg:px-40 py-10 lg:py-20 grid align-top bg-opacity-90">
      <div className="py-10 w-full text-end lg:mt-5">
        <h1 className="text-blue text-4xl lg:text-6xl font-extrabold uppercase text-center mb-2">
          <Text tid="strong_point" />
        </h1>
      </div>
      <div className="flex lg:justify-center justify-between w-full h-fit text-blue py-2">
        <div className="grid w-[33%] h-fit text-center items-center justify-center">
          <div className="w-24 h-24 grid rounded-full bg-orange border-2 border-red mb-1 place-self-center items-center justify-center">
            <div className="bg-pricing h-20 w-20 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-semibold uppercase text-xs lg:text-lg">
            <Text tid={"point_1"} />
          </p>
        </div>
        <div className="grid w-[33%] h-fit text-center items-center justify-center">
          <div className="w-24 h-24 grid rounded-full bg-orange border-2 border-red mb-1 place-self-center items-center justify-center">
            <div className="bg-redroute h-20 w-20 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-semibold uppercase text-xs lg:text-lg">
            <Text tid={"point_2"} />
          </p>
        </div>
        <div className="grid w-[33%] h-fit text-center items-center justify-center">
          <div className="w-24 h-24 grid rounded-full bg-orange border-2 border-red mb-1 place-self-center items-center justify-center">
            <div className="bg-checklist h-20 w-20 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-semibold uppercase text-xs lg:text-lg">
            <Text tid={"point_3"} />
          </p>
        </div>
      </div>
      <div className="flex lg:justify-center justify-between w-full h-fit text-blue py-10">
        <div className="grid w-[33%] h-fit text-center items-center justify-center">
          <div className="w-24 h-24 grid rounded-full bg-orange border-2 border-red mb-1 place-self-center items-center justify-center">
            <div className="bg-permit h-20 w-20 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-semibold uppercase text-xs lg:text-lg">
            <Text tid={"point_4"} />
          </p>
        </div>
        <div className="grid w-[33%] h-fit text-center items-center justify-center">
          <div className="w-24 h-24 grid rounded-full bg-orange border-2 border-red mb-1 place-self-center items-center justify-center">
            <div className="bg-dtd h-20 w-20 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-semibold uppercase text-xs lg:text-lg">
            <Text tid={"point_5"} />
          </p>
        </div>
        <div className="grid w-[33%] h-fit text-center items-center justify-center">
          <div className="w-24 h-24 grid rounded-full bg-orange border-2 border-red mb-1 place-self-center items-center justify-center">
            <div className="bg-shippingIns h-20 w-20 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-semibold uppercase text-xs lg:text-lg">
            <Text tid={"point_6"} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
