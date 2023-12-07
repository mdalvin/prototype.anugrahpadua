"use client";
import React from "react";
import { Text } from "./containers/Language";

const VehicleShipment = () => {
  return (
    <div
      className="h-fit lg:h-fit w-screen bg-longtruck bg-no-repeat bg-cover text-left flex"
      id="vehicle-shipment"
    >
      <div className="h-fit lg:h-fit w-screen bg-blue text-left px-5 py-10 lg:px-40 lg:py-20 grid align-top bg-opacity-90">
        <div className="mb-5 lg:mb-10 mt-5">
          <h1 className="text-white text-2xl lg:text-4xl font-extrabold uppercase italic">
            <Text tid="vs_title" />
          </h1>
        </div>
        <div className="w-full h-fit text-white">
          <p className="text-xs lg:text-base font-light">
            <Text tid={"vs_description"} />
          </p>
        </div>
        <ul className="list-disc px-5 text-white mt-2">
          <li className="text-xs lg:text-base mt-1 lg:mt-2 font-light">
            <div className="flex justify-start w-full">
              <div className="w-[100px] lg:w-[120px]">
                <span className="font-bold">
                  <Text tid={"vs_point_title_1"} />
                </span>{" "}
              </div>
              <span className="mx-2">:</span>
              <div className="w-full">
                <Text tid={"vs_point_description_1"} />
              </div>
            </div>
          </li>
          <li className="text-xs lg:text-base mt-1 lg:mt-2 font-light">
            <div className="flex justify-start w-full">
              <div className="w-[100px] lg:w-[120px]">
                <span className="font-bold">
                  <Text tid={"vs_point_title_2"} />
                </span>{" "}
              </div>
              <span className="mx-2">:</span>
              <div className="w-full">
                <Text tid={"vs_point_description_2"} />
              </div>
            </div>
          </li>
          <li className="text-xs lg:text-base mt-1 lg:mt-2 font-light">
            <div className="flex justify-start w-full">
              <div className="w-[100px] lg:w-[120px]">
                <span className="font-bold">
                  <Text tid={"vs_point_title_3"} />
                </span>{" "}
              </div>
              <span className="mx-2">:</span>
              <div className="w-full">
                <Text tid={"vs_point_description_3"} />
              </div>
            </div>
          </li>
          <li className="text-xs lg:text-base mt-1 lg:mt-2 font-light">
            <div className="flex justify-start w-full">
              <div className="w-[100px] lg:w-[120px]">
                <span className="font-bold">
                  <Text tid={"vs_point_title_4"} />
                </span>{" "}
              </div>
              <span className="mx-2">:</span>
              <div className="w-full">
                <Text tid={"vs_point_description_4"} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VehicleShipment;
