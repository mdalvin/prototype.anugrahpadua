import React from "react";
import { Text } from "./containers/Language";

const SeaCargo = () => {
  return (
    <div className="h-fit lg:h-fit w-screen bg-white text-left flex p-2">
      <div className="h-fit lg:h-fit w-screen bg-red text-end px-5 py-10 lg:px-40 lg:py-20 grid align-top bg-opacity-25">
        <div className="mb-5 lg:mb-10">
          <h1 className="text-blue text-3xl lg:text-6xl font-extrabold uppercase italic">
            <Text tid="sea_cargo_title" />
          </h1>
        </div>
        <div className="w-full text-left h-fit text-blue">
          <p className="text-sm lg:text-lg mt-4 lg:mt-4 font-normal">
            <Text tid={"sea_cargo_description_1"} />
          </p>
          <p className="text-sm lg:text-lg mt-4 lg:mt-4 font-normal">
            <Text tid={"sea_cargo_description_2"} />
          </p>
        </div>
        <ul className="list-disc px-5 text-blue text-left mt-2">
          <li className="text-sm lg:text-lg mt-1 lg:mt-2 font-normal">
            <Text tid={"sea_cargo_point_1"} />
          </li>
          <li className="text-sm lg:text-lg mt-1 lg:mt-2 font-normal">
            <Text tid={"sea_cargo_point_2"} />
          </li>
          <li className="text-sm lg:text-lg mt-1 lg:mt-2 font-normal">
            <Text tid={"sea_cargo_point_3"} />
          </li>
          <li className="text-sm lg:text-lg mt-1 lg:mt-2 font-normal">
            <Text tid={"sea_cargo_point_4"} />
          </li>
          <li className="text-sm lg:text-lg mt-1 lg:mt-2 font-normal">
            <Text tid={"sea_cargo_point_5"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SeaCargo;
