import React from "react";
import { Text } from "./containers/Language";

const BenefitPoints = () => {
  return (
    <div className="h-fit lg:h-fit w-screen bg-blue bg-cover bg-no-repeat text-left px-5 lg:px-40 grid align-top py-10">
      <div className="w-full lg:mt-5 justify-center">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-bluish to-cyan text-4xl lg:text-6xl font-extrabold uppercase text-center mb-2">
          <Text tid="advantages_title" />
        </h1>
        <p className="text-white text-sm lg:text-lg font-normal text-center my-4 lg:my-10">
          <Text tid={"advantages_description"} />
        </p>
      </div>
      <div className="grid lg:flex lg:justify-evenly justify-evenly w-full h-fit text-white lg:py-2">
        <div className="grid w-full lg:w-[40%] h-fit text-center items-center justify-center">
          <div className="w-24 h-24 grid rounded-full bg-orange border-2 border-white mb-1 place-self-center items-center justify-center">
            <div className="bg-wprice h-20 w-20 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-semibold uppercase text-xs lg:text-lg my-2">
            <Text tid={"advantage_point_title_1"} />
          </p>
          <p className="font-normal text-xs lg:text-sm">
            <Text tid={"advantage_point_description_1"} />
          </p>
        </div>{" "}
        <div className="grid w-full lg:w-[40%] h-fit text-center items-center justify-center mt-5 lg:mt-0">
          <div className="w-24 h-24 grid rounded-full bg-orange border-2 border-white mb-1 place-self-center items-center justify-center">
            <div className="bg-team h-20 w-20 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-semibold uppercase text-xs lg:text-lg my-2">
            <Text tid={"advantage_point_title_2"} />
          </p>
          <p className="font-normal text-xs lg:text-sm">
            <Text tid={"advantage_point_description_2"} />
          </p>
        </div>
      </div>
      <div className="grid lg:flex lg:justify-evenly justify-evenly w-full h-fit text-white lg:py-10">
        <div className="grid w-full lg:w-[40%] h-fit text-center items-center justify-center mt-5 lg:mt-0">
          <div className="w-24 h-24 grid rounded-full bg-orange border-2 border-white mb-1 place-self-center items-center justify-center">
            <div className="bg-route h-20 w-20 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-semibold uppercase text-xs lg:text-lg my-2">
            <Text tid={"advantage_point_title_3"} />
          </p>
          <p className="font-normal text-xs lg:text-sm">
            <Text tid={"advantage_point_description_3"} />
          </p>
        </div>
        <div className="grid w-full lg:w-[40%] h-fit text-center items-center justify-center mt-5 lg:mt-0">
          <div className="w-24 h-24 grid rounded-full bg-orange border-2 border-white mb-1 place-self-center items-center justify-center">
            <div className="bg-tech h-20 w-20 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-semibold uppercase text-xs lg:text-lg my-2">
            <Text tid={"advantage_point_title_4"} />
          </p>
          <p className="font-normal text-xs lg:text-sm">
            <Text tid={"advantage_point_description_4"} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitPoints;
