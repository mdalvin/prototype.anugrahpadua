import React from "react";
import { Text } from "./containers/Language";

const Payment = () => {
  return (
    <div
      className="h-fit lg:h-fit w-screen bg-about bg-no-repeat bg-cover text-left flex"
      id="about"
    >
      <div className="h-fit lg:h-fit w-screen bg-blue text-left px-5 py-20 lg:px-40 lg:py-40 grid align-top bg-opacity-90">
        <div className="mb-5 lg:mb-10">
          <h1 className="text-white text-3xl lg:text-6xl font-extrabold uppercase italic">
            <Text tid="payment_guarantee_title" />
          </h1>
        </div>
        <div className="w-full text-left h-fit text-white">
          <p className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
            <Text tid={"payment_guarantee_description_1"} />
          </p>
          <p className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
            <Text tid={"payment_guarantee_description_2"} />
          </p>
        </div>
        <div className="mb-5 mt-16 lg:mb-10 lg:mt-28">
          <h1 className="text-white text-3xl lg:text-6xl font-extrabold uppercase italic">
            <Text tid="system_claims_title" />
          </h1>
        </div>
        <div className="w-full text-left h-fit text-white">
          <ul className="list-disc p-4">
            <li className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
              <Text tid={"payment_and_claims_1"} />
            </li>
            <li className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
              <Text tid={"payment_and_claims_2"} />
            </li>
            <li className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
              <Text tid={"payment_and_claims_3"} />
            </li>
            <li className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
              <Text tid={"payment_and_claims_4"} />
            </li>
            <li className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
              <Text tid={"payment_and_claims_5"} />
            </li>
            <li className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
              <Text tid={"payment_and_claims_6"} />
            </li>
            <li className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
              <Text tid={"payment_and_claims_7"} />
            </li>
            <li className="text-sm lg:text-lg mt-4 lg:mt-4 font-light">
              <Text tid={"payment_and_claims_8"} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Payment;
