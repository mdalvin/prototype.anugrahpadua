"use client";
import React from "react";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FaTiktok } from "react-icons/fa";
import { Text } from "./containers/Language";

const Footer = () => {
  const scrollIntoTheView = (id) => {
    let element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="h-fit lg:h-fit w-screen bg-lines bg-cover bg-no-repeat text-left flex">
      <div className="h-fit lg:h-fit w-screen bg-blue text-left px-5 lg:px-20 lg:py-0 grid align-top bg-opacity-95">
        <div className="w-full lg:justify-between py-4 flex text-[#7391C5] items-center">
          <div className="w-full lg:w-fit grid lg:flex items-center h-fit">
            <p className="text-xs mt-2 lg:mt-4 font-light flex mr-4 items-center text-white uppercase">
              <span className="mr-1 text-red">
                <EmailIcon />
              </span>
              ap@anugrahpadua.com
            </p>
            <p className="text-xs mt-2 lg:mt-4 font-light flex items-center text-white uppercase">
              <span className="mr-1 text-red">
                <LanguageIcon />
              </span>
              www.anugrahpadua.com
            </p>
          </div>
          <div className="w-fit flex items-center gap-2 lg:gap-2">
            <Link
              href="https://www.instagram.com/anugrahpadua.id/"
              target="_blank"
            >
              <p className="items-center">
                <InstagramIcon />
              </p>
            </Link>
            <Link
              href="https://www.facebook.com/anugrahpadua.id"
              target="_blank"
            >
              <p className="items-center">
                <FacebookIcon />
              </p>
            </Link>
            <Link href="https://www.youtube.com/@anugrahpadua" target="_blank">
              <p className="items-center">
                <YouTubeIcon />
              </p>
            </Link>
            <Link href="https://wa.me/6281181200031" target="_blank">
              <p className="items-center">
                <WhatsAppIcon />
              </p>
            </Link>
            <Link
              href="https://www.tiktok.com/@anugrahpadua.id"
              target="_blank"
            >
              <p className="items-center">
                <FaTiktok />
              </p>
            </Link>
          </div>
        </div>
        <div className="w-full lg:flex h-fit border-y-[1px] border-[#7391C5] py-10 justify-between">
          <div className="w-full lg:w-[50%] flex h-fit justify-between">
            <div className="w-full lg:w-[50%] grid h-fit">
              <div>
                <h1 className="text-[#7391C5] text-sm lg:text-xl font-extrabold uppercase text-left italic">
                  <Text tid="service_title" />
                </h1>
              </div>
              <ul className="list-none text-white uppercase">
                <li className="text-xs mt-2 lg:mt-4 font-light hover:text-red cursor-pointer">
                  <Link href={"/services#land-freight"}>
                    <Text tid={"service_1"} />
                  </Link>
                </li>
                <li className="text-xs mt-2 lg:mt-4 font-light hover:text-red cursor-pointer">
                  <Link href={"/services#sea-freight"}>
                    <Text tid={"service_2"} />
                  </Link>
                </li>
                <li className="text-xs mt-2 lg:mt-4 font-light hover:text-red cursor-pointer">
                  <Link href={"/services#vehicle-shipment"}>
                    <Text tid={"service_4"} />
                  </Link>
                </li>
                <li className="text-xs mt-2 lg:mt-4 font-light hover:text-red cursor-pointer w-[90%] lg:w-full">
                  <Link href={"/services#heavy-equipment-shipment"}>
                    <Text tid={"service_5"} />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[50%] grid h-fit">
              <div>
                <h1 className="text-[#7391C5] text-sm lg:text-xl font-extrabold uppercase text-left italic">
                  <Text tid="company" />
                </h1>
              </div>
              <ul className="list-none text-white uppercase">
                <Link href={"/"}>
                  <li className="text-xs mt-2 lg:mt-4 font-light hover:text-red cursor-pointer">
                    <Text tid={"home_nav"} />
                  </li>
                </Link>
                <Link href={"/about"}>
                  <li className="text-xs mt-2 lg:mt-4 font-light hover:text-red cursor-pointer">
                    <Text tid={"about_nav"} />
                  </li>
                </Link>
                <Link href={"/services"}>
                  <li className="text-xs mt-2 lg:mt-4 font-light hover:text-red cursor-pointer">
                    <Text tid={"service_nav"} />
                  </li>
                </Link>
                <Link href={"/payment"}>
                  <li className="text-xs mt-2 lg:mt-4 font-light hover:text-red cursor-pointer">
                    <Text tid={"payment_nav"} />
                  </li>
                </Link>
                <Link href={"/partnership"}>
                  <li className="text-xs mt-2 lg:mt-4 font-light hover:text-red cursor-pointer">
                    <Text tid={"partner_nav"} />
                  </li>
                </Link>
                <Link href={"/contact-us"}>
                  <li className="text-xs mt-2 lg:mt-4 font-light hover:text-red cursor-pointer">
                    <Text tid={"contact_nav"} />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex h-fit lg:justify-between mt-10 lg:mt-0">
            <div className="w-[50%] grid h-fit">
              <div>
                <h1 className="text-[#7391C5] text-sm lg:text-xl font-extrabold uppercase text-left italic">
                  <Text tid="head office" />
                </h1>
              </div>
              <ul className="list-none text-white uppercase">
                <li className="text-xs mt-2 lg:mt-4 font-light flex items-center">
                  <span className="mr-1 text-red">
                    <PhoneIcon />
                  </span>
                  021-28519810
                </li>
                <li className="text-xs mt-2 lg:mt-4 font-light flex items-center">
                  <span className="mr-1 text-red">
                    <PhoneIcon />
                  </span>
                  021-8843140
                </li>
                <li className="text-xs mt-2 lg:mt-4 font-light w-[90%] flex">
                  <span className="mr-1 text-red">
                    <BusinessIcon />
                  </span>
                  JL. RAYA HARAPAN BARU II D8 NO.8 KOTA BARU, BEKASI
                </li>
              </ul>
            </div>
            <div className="w-[50%] grid h-fit">
              <div>
                <h1 className="text-[#7391C5] text-sm lg:text-xl font-extrabold uppercase text-left italic">
                  Warehouse
                </h1>
              </div>
              <ul className="list-none text-white uppercase">
                <li className="text-xs mt-2 lg:mt-4 font-light flex items-center">
                  <span className="mr-1 text-red">
                    <PhoneIcon />
                  </span>
                  08129316841
                </li>
                <li className="text-xs mt-2 lg:mt-4 font-light flex uppercase">
                  <span className="mr-1 text-red">
                    <WarehouseIcon />
                  </span>
                  Jl. Raya Lemahabang, Simpangan, Kec. Cikarang Utara, Kabupaten
                  Bekasi, Jawa Barat 17530
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full text-center justify-center py-2 flex text-[#7391C5] items-center uppercase text-xs text-opacity-20">
          <p className="cursor-pointer">
            TECHNOLOGY WEBSITE DEVELOPED BY CODENOVELTY
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
