import React from "react";
import { Text } from "./containers/Language";

const VehicleShipment = () => {
  return (
    <div className="h-fit lg:h-fit w-screen bg-longtruck bg-no-repeat bg-cover text-left flex">
      <div className="h-fit lg:h-fit w-screen bg-blue text-left px-5 py-10 lg:px-40 lg:py-20 grid align-top bg-opacity-90">
        <div className="mb-5 lg:mb-10">
          <h1 className="text-white text-3xl lg:text-6xl font-extrabold uppercase italic">
            <Text tid="vs_title" />
          </h1>
        </div>
        <div className="w-full h-fit text-white">
          <p className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
            <Text tid={"vs_description"} />
          </p>
        </div>
        <ul className="list-disc px-5 text-white mt-2">
          <li className="text-sm lg:text-lg mt-1 lg:mt-2 font-light">
            <span className="font-bold">
              <Text tid={"vs_point_title_1"} />
            </span>{" "}
            : <Text tid={"vs_point_description_1"} />
          </li>
          <li className="text-sm lg:text-lg mt-1 lg:mt-2 font-light">
            <span className="font-bold">
              <Text tid={"vs_point_title_2"} />
            </span>{" "}
            : <Text tid={"vs_point_description_2"} />
          </li>
          <li className="text-sm lg:text-lg mt-1 lg:mt-2 font-light">
            <span className="font-bold">
              <Text tid={"vs_point_title_3"} />
            </span>{" "}
            : <Text tid={"vs_point_description_3"} />
          </li>
          <li className="text-sm lg:text-lg mt-1 lg:mt-2 font-light">
            <span className="font-bold">
              <Text tid={"vs_point_title_4"} />
            </span>{" "}
            : <Text tid={"vs_point_description_4"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VehicleShipment;
