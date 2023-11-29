"use client";

import { useState } from "react";
// import Link from "next/link";
import Image from "next/image";
// import logo from "../src/app/icon.png";
// import logo from "../src/app/alder_logo.png";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import { Text } from "./containers/Language";

const Navbar = () => {
  const [currentlyActive, setCurrentlyActive] = useState("Home");

  const scrollIntoTheView = (id) => {
    setCurrentlyActive(id);
    let element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <>
      <div
        className="w-screen hidden lg:flex py-4 px-[25px] lg:px-28 m-0 justify-end bg-white text-blue fixed z-50 shadow items-center"
        id="navbar"
      >
        {/* <div className="flex lg:w-fit justify-between">
          <Link href="/">
            <div className="grid min-w-[150px] lg:w-fit font-sans align-center items-center cursor-pointer">
              <Image
                src={logo}
                className="h-6 lg:h-10 w-[auto]"
                alt="Logo"
                priority
                onClick={() => scrollIntoTheView("home")}
              />
            </div>
          </Link>
        </div> */}
        <div className="hidden lg:flex w-fit justify-around text-[16px] font-sans gap-10 py-5">
          <Link href="/">
            <h2
              className="cursor-pointer uppercase text-sm"
              style={{ fontWeight: currentlyActive === "home" ? "800" : "" }}
              onClick={() => setCurrentlyActive("home")}
            >
              <Text tid={"home_nav"} />
            </h2>
          </Link>
          <Link href="/about">
            <h2
              className="cursor-pointer uppercase text-sm"
              style={{ fontWeight: currentlyActive === "about" ? "800" : "" }}
              onClick={() => setCurrentlyActive("about")}
            >
              <Text tid={"about_nav"} />
            </h2>
          </Link>
          <Link href="/services">
            <h2
              className="cursor-pointer uppercase text-sm"
              style={{
                fontWeight: currentlyActive === "facilities" ? "800" : "",
              }}
              onClick={() => setCurrentlyActive("facilities")}
            >
              <Text tid={"service_nav"} />
            </h2>
          </Link>
          <Link href="/payment">
            <h2
              className="cursor-pointer uppercase text-sm"
              style={{
                fontWeight: currentlyActive === "payment" ? "800" : "",
              }}
              onClick={() => setCurrentlyActive("payment")}
            >
              <Text tid={"payment_nav"} />
            </h2>
          </Link>
          <Link href="/partnership">
            <h2
              className="cursor-pointer uppercase text-sm"
              style={{
                fontWeight: currentlyActive === "partnership" ? "800" : "",
              }}
              onClick={() => setCurrentlyActive("partnership")}
            >
              <Text tid={"partner_nav"} />
            </h2>
          </Link>
          <LanguageSelector />
        </div>
      </div>
    </>
  );
};

export default Navbar;
