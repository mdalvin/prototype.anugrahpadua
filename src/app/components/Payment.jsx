"use client";
import React from "react";
import { Text } from "./containers/Language";

const Payment = () => {
  return (
    <div
      className="h-fit lg:h-fit w-screen bg-about bg-no-repeat bg-cover text-left flex"
      id="about"
    >
      <div className="h-fit lg:h-fit w-screen bg-blue text-left px-5 pb-10 lg:pb-20 pt-20 lg:px-40 lg:pt-40 grid align-top bg-opacity-90">
        <div className="lg:mb-5">
          <h1 className="text-white text-2xl lg:text-4xl font-extrabold uppercase italic">
            <Text tid="payment_guarantee_title" />
          </h1>
        </div>
        <div className="w-full text-left h-fit text-white">
          <p className="text-xs lg:text-base mt-4 lg:mt-4 font-light">
            <Text tid={"payment_guarantee_description_1"} />
          </p>
          <p className="text-xs lg:text-base mt-4 lg:mt-4 font-light">
            <Text tid={"payment_guarantee_description_2"} />
          </p>
        </div>
        <div className="mt-10 lg:mt-20">
          <h1 className="text-white text-2xl lg:text-4xl font-extrabold uppercase italic">
            <Text tid="system_claims_title" />
          </h1>
        </div>
        <div className="w-full text-left h-fit text-white">
          <ul className="list-disc p-4">
            <li className="text-xs lg:text-base mt-4 lg:mt-4 font-light">
              <Text tid={"payment_and_claims_1"} />
            </li>
            <li className="text-xs lg:text-base mt-4 lg:mt-4 font-light">
              <Text tid={"payment_and_claims_2"} />
            </li>
            <li className="text-xs lg:text-base mt-4 lg:mt-4 font-light">
              <Text tid={"payment_and_claims_3"} />
            </li>
            <li className="text-xs lg:text-base mt-4 lg:mt-4 font-light">
              <Text tid={"payment_and_claims_4"} />
            </li>
            <li className="text-xs lg:text-base mt-4 lg:mt-4 font-light">
              <Text tid={"payment_and_claims_5"} />
            </li>
            <li className="text-xs lg:text-base mt-4 lg:mt-4 font-light">
              <Text tid={"payment_and_claims_6"} />
            </li>
            <li className="text-xs lg:text-base mt-4 lg:mt-4 font-light">
              <Text tid={"payment_and_claims_7"} />
            </li>
            <li className="text-xs lg:text-base mt-4 lg:mt-4 font-light">
              <Text tid={"payment_and_claims_8"} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Payment;
