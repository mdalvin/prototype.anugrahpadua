import React from "react";
import { Text } from "./containers/Language";

const HES = () => {
  return (
    <div className="h-fit lg:h-fit w-screen bg-white text-left flex p-2">
      <div className="h-fit lg:h-fit w-screen bg-blue text-end px-5 py-10 lg:px-40 lg:py-20 grid align-top bg-opacity-90">
        <div className="mb-5 lg:mb-10">
          <h1 className="text-white text-3xl lg:text-6xl font-extrabold uppercase italic">
            <Text tid="hes_title" />
          </h1>
        </div>
        <div className="w-full text-left h-fit text-white">
          <p className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
            <Text tid={"hes_description_1"} />
          </p>
          <p className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
            <Text tid={"hes_description_2"} />
          </p>
          <p className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
            <Text tid={"hes_description_3"} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HES;
