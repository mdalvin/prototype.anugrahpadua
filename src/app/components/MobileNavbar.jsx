"use client";
"use client";
import { useState } from "react";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import { Text } from "./containers/Language";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";

const MobileNavbar = () => {
  const [currentlyActive, setCurrentlyActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const onSelect = (e) => {
    setCurrentlyActive(e);
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="w-screen grid lg:hidden px-[25px] h-14 lg:px-28 justify-end bg-white text-blue fixed z-50 shadow items-center top-0"
        id="navbar"
      >
        <div className="w-full h-fit relative">
          <button
            className="bg-blue w-fit h-fit rounded-sm font-medium text-white p-1 hover:bg-[#7391C5] ease-in-out duration-200 text-sm lg:text-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CloseIcon /> : <ReorderIcon />}
          </button>
        </div>
      </div>
      {isOpen ? (
        <div className="grid lg:hidden h-72 justify-start text-[16px] font-sans z-40 fixed bg-blue right-0 w-full pt-14 text-white">
          <div
            className={`w-screen h-fit p-2 ${
              currentlyActive === "home" ? "bg-red" : "bg-blue"
            }`}
          >
            <Link href="/">
              <h2
                className="cursor-pointer uppercase text-sm"
                style={{ fontWeight: currentlyActive === "home" ? "800" : "" }}
                onClick={() => onSelect("home")}
              >
                <Text tid={"home_nav"} />
              </h2>
            </Link>
          </div>
          <div
            className={`w-screen h-fit p-2 ${
              currentlyActive === "about" ? "bg-red" : "bg-blue"
            }`}
          >
            <Link href="/about">
              <h2
                className="cursor-pointer uppercase text-sm"
                style={{ fontWeight: currentlyActive === "about" ? "800" : "" }}
                onClick={() => onSelect("about")}
              >
                <Text tid={"about_nav"} />
              </h2>
            </Link>
          </div>
          <div
            className={`w-screen h-fit p-2 ${
              currentlyActive === "service" ? "bg-red" : "bg-blue"
            }`}
          >
            <Link href="/services">
              <h2
                className="cursor-pointer uppercase text-sm"
                style={{
                  fontWeight: currentlyActive === "service" ? "800" : "",
                }}
                onClick={() => onSelect("service")}
              >
                <Text tid={"service_nav"} />
              </h2>
            </Link>
          </div>
          <div
            className={`w-screen h-fit p-2 ${
              currentlyActive === "payment" ? "bg-red" : "bg-blue"
            }`}
          >
            <Link href="/payment">
              <h2
                className="cursor-pointer uppercase text-sm"
                style={{
                  fontWeight: currentlyActive === "payment" ? "800" : "",
                }}
                onClick={() => onSelect("payment")}
              >
                <Text tid={"payment_nav"} />
              </h2>
            </Link>
          </div>
          <div
            className={`w-screen h-fit p-2 ${
              currentlyActive === "partnership" ? "bg-red" : "bg-blue"
            }`}
          >
            <Link href="/partnership">
              <h2
                className="cursor-pointer uppercase text-sm"
                style={{
                  fontWeight: currentlyActive === "partnership" ? "800" : "",
                }}
                onClick={() => onSelect("partnership")}
              >
                <Text tid={"partner_nav"} />
              </h2>
            </Link>
          </div>
          <div className={`w-screen h-fit p-2`}>
            <LanguageSelector />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MobileNavbar;
