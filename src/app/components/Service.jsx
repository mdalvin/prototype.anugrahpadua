"use client";
import React from "react";
import { Text } from "./containers/Language";
// import Link from "next/link";

const Service = () => {
  return (
    // <div
    //   className="h-fit lg:h-fit w-screen bg-about bg-no-repeat bg-cover text-left flex"
    //   id="about"
    // >
    <div className="h-fit lg:h-fit w-screen bg-white text-left px-5 py-10 lg:px-40 lg:py-20 grid align-top bg-opacity-90">
      <div className="mb-5 lg:mb-10 w-full text-end">
        <h1 className="text-blue text-4xl lg:text-6xl font-extrabold uppercase text-center mb-2">
          <Text tid="service_title" />
        </h1>
        <p className="text-blue text-sm lg:text-lg font-normal text-center mt-5 lg:mt-10">
          <Text tid={"service_description"} />
        </p>
      </div>
      <div className="flex lg:justify-center justify-between w-full h-fit text-blue py-2">
        <div className="grid h-fit w-[33%] text-center items-center justify-center">
          <div className="w-24 h-24 grid rounded-full mb-1 place-self-center items-center justify-center">
            <div className="bg-truck h-24 w-24 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>
          <p className="font-medium uppercase text-xs">
            <Text tid={"service_1"} />
          </p>
        </div>
        <div className="grid h-fit w-[33%] text-center items-center justify-center">
          <div className="w-24 h-24 grid rounded-full mb-1 place-self-center items-center justify-center">
            <div className="bg-ship h-24 w-24 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>
          <p className="font-medium uppercase text-xs">
            <Text tid={"service_2"} />
          </p>
        </div>
        <div className="grid h-fit w-[33%] text-center items-center justify-center">
          <div className="w-24 h-24 grid rounded-full mb-1 place-self-center items-center justify-center">
            <div className="bg-insurance h-24 w-24 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-medium uppercase text-xs">
            <Text tid={"service_3"} />
          </p>
        </div>
      </div>
      <div className="flex justify-left lg:justify-center w-full h-fit text-blue py-2 mt-4 mb-10">
        <div className="grid h-fit w-[33%] lg:w-[33%] text-center items-center justify-center">
          <div className="w-24 h-24 grid rounded-full mb-1 place-self-center items-center justify-center">
            <div className="bg-carShipping h-24 w-24 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-medium uppercase text-xs">
            <Text tid={"service_4"} />
          </p>
        </div>
        <div className="grid h-fit w-[33%] lg:w-[33%] text-center items-center justify-center">
          <div className="w-24 h-24 grid rounded-full mb-1 place-self-center items-center justify-center">
            <div className="bg-heavy h-24 w-24 bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-medium uppercase text-xs">
            <Text tid={"service_5"} />
          </p>
        </div>
      </div>{" "}
      <div className="py-6 lg:py-10 w-full text-end">
        <p className="text-blue text-sm lg:text-lg font-normal text-center">
          <Text tid={"location_description"} />
        </p>
      </div>
      <div className="w-full h-fit bg-map bg-no-repeat bg-cover bg-opacity-80">
        <div className="grid w-full">
          <div className="flex w-full">
            <div className="w-[25%] h-10 bg-red bg-opacity-90 text-white border-white border-[1px] font-medium uppercase items-center text-center grid text-[10px] lg:text-xs italic">
              <Text tid={"head_column_1"} />
            </div>
            <div className="w-[25%] h-10 bg-red bg-opacity-90 text-white border-white border-[1px] font-medium uppercase items-center text-center grid text-[10px] lg:text-xs italic">
              <Text tid={"head_column_2"} />
            </div>
            <div className="w-[50%] h-10 bg-red bg-opacity-90 text-white border-white border-[1px] font-medium uppercase items-center text-center grid text-[10px] lg:text-xs italic">
              <Text tid={"head_column_3"} />
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-[25%] h-40 bg-cyan bg-opacity-80 lg:p-2 text-white border-white border-[1px] font-medium items-center text-center grid text-[10px] lg:text-sm">
              <Text tid={"domestic_land"} />
            </div>
            <div className="w-[25%] h-40 bg-cyan bg-opacity-80 lg:p-2 text-white border-white border-[1px] font-medium items-center text-center grid text-[10px] lg:text-sm">
              <Text tid={"coverage"} />
            </div>
            <div className="w-[50%] h-40 bg-cyan bg-opacity-80 text-white border-white border-[1px] font-medium items-center text-left grid text-[10px] lg:text-sm p-2 lg:p-4">
              <p className="underline">Door to Door</p>
              <Text tid={"land_information"} />
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-[25%] h-36 bg-bluish bg-opacity-80 lg:p-2 text-white border-white border-[1px] font-medium items-center text-center grid text-[10px] lg:text-sm">
              <Text tid={"domestic_sea"} />
            </div>
            <div className="w-[25%] h-36 bg-bluish bg-opacity-80 lg:p-2 text-white border-white border-[1px] font-medium items-center text-center grid text-[10px] lg:text-sm">
              <Text tid={"coverage"} />
            </div>
            <div className="w-[50%] h-36 bg-bluish bg-opacity-80 text-white border-white border-[1px] font-medium items-center text-left grid text-[10px] lg:text-sm p-2 lg:p-4">
              <p className="underline">Door to Door & Port to Port</p>
              <Text tid={"sea_information"} />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 w-full text-end mt-5 lg:mt-20">
        <h1 className="text-blue text-4xl lg:text-6xl font-extrabold uppercase text-center mb-2">
          <Text tid="reason_title" />
        </h1>
      </div>
      <div className="flex lg:justify-center justify-between w-full h-fit text-blue py-2">
        <div className="grid w-[33%] h-fit text-center items-center justify-center">
          <div className="w-24 h-24 grid rounded-full bg-red mb-1 place-self-center items-center justify-center">
            <div className="bg-pricing h-[90px] w-[90px] bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-semibold uppercase text-xs lg:text-lg">
            <Text tid={"reason_1"} />
          </p>
        </div>
        <div className="grid w-[33%] h-fit text-center items-center justify-center">
          <div className="w-24 h-24 grid rounded-full bg-red mb-1 place-self-center items-center justify-center">
            <div className="bg-pro h-[90px] w-[90px] bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-semibold uppercase text-xs lg:text-lg">
            <Text tid={"reason_2"} />
          </p>
        </div>
        <div className="grid w-[33%] h-fit text-center items-center justify-center">
          <div className="w-24 h-24 grid rounded-full bg-red mb-1 place-self-center items-center justify-center">
            <div className="bg-pay h-[90px] w-[90px] bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-semibold uppercase text-xs lg:text-lg">
            <Text tid={"reason_3"} />
          </p>
        </div>
      </div>
      <div className="flex lg:justify-center justify-between w-full h-fit text-blue py-10">
        <div className="grid w-[33%] h-fit text-center items-center justify-center">
          <div className="w-24 h-24 grid rounded-full bg-red mb-1 place-self-center items-center justify-center">
            <div className="bg-discount h-[90px] w-[90px] bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-semibold uppercase text-xs lg:text-lg">
            <Text tid={"reason_4"} />
          </p>
        </div>
        <div className="grid w-[33%] h-fit text-center items-center justify-center">
          <div className="w-24 h-24 grid rounded-full bg-red mb-1 place-self-center items-center justify-center">
            <div className="bg-dtd h-[90px] w-[90px] bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-semibold uppercase text-xs lg:text-lg">
            <Text tid={"reason_5"} />
          </p>
        </div>
        <div className="grid w-[33%] h-fit text-center items-center justify-center">
          <div className="w-24 h-24 grid rounded-full bg-red mb-1 place-self-center items-center justify-center">
            <div className="bg-shippingIns h-[90px] w-[90px] bg-cover bg-no-repeat bg-opacity-20 rounded-full" />
          </div>{" "}
          <p className="font-semibold uppercase text-xs lg:text-lg">
            <Text tid={"reason_6"} />
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Service;
