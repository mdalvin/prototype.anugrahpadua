"use client";

import React, { useState } from "react";
import { Text } from "./containers/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExploreIcon from "@mui/icons-material/Explore";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const template = `*${name}* / *${email}* : ${message}`;

  return (
    <div
      className="h-fit w-screen bg-white text-left grid lg:h-[900px] px-5 lg:px-40 pt-20 pb-10 lg:pt-0 lg:pb-0 justify-center align-middle items-center"
      id="contact-us"
    >
      <div className="bg-white w-full lg:w-[1200px] h-fit rounded-2xl grid md:flex lg:flex justify-between gap-6 md:gap-2 lg:gap-0">
        <div className="h-fit md:h-[500px] lg:h-[600px] md:w-[60%] lg:w-[50%] bg-blue rounded-xl lg:rounded-none lg:rounded-l-2xl p-4 lg:p-10 grid">
          <div className="h-fit w-full grid">
            <div className="flex w-full h-fit lg:mb-5">
              <h1 className="text-white font-extrabold text-3xl lg:text-5xl capitalize">
                <Text tid={"find"} />
              </h1>
            </div>
            <div className="grid grid-cols-2 w-full h-fit mb-4 mt-4 lg:mb-10 lg:mt-0 gap-4">
              <Link
                href="https://www.facebook.com/anugrahpadua.id"
                target="_blank"
              >
                <div className="grid w-full py-1 h-20 md:h-20 text-left items-center justify-center align-middle bg-[#7391C5] rounded-sm hover:bg-bluish hover:text-blue ease-in-out duration-200 cursor-pointer">
                  <div>
                    <p className="items-center text-xs">
                      <FacebookIcon />
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/anugrahpadua.id"
                target="_blank"
              >
                <div className="grid w-full py-1 h-20 md:h-20 text-left items-center justify-center align-middle bg-[#7391C5] rounded-sm hover:bg-bluish hover:text-blue ease-in-out duration-200 cursor-pointer">
                  <div>
                    <p className="items-center text-xs">
                      <InstagramIcon />
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="https://id.linkedin.com/company/pt-anugrah-padua"
                target="_blank"
              >
                <div
                  className={`grid w-full py-1 h-20 md:h-20 text-left items-center justify-center align-middle bg-[#7391C5] rounded-sm hover:bg-bluish hover:text-blue ease-in-out duration-200 cursor-pointer`}
                >
                  <div>
                    <p className="items-center text-xs">
                      <LinkedInIcon />
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="mailto:adm@anugrahpadua.com" target="_blank">
                <div className="grid w-full py-1 h-20 md:h-20 text-left items-center justify-center align-middle bg-[#7391C5] rounded-sm hover:bg-bluish hover:text-blue ease-in-out duration-200 cursor-pointer">
                  <div>
                    <p className="items-center text-xs">
                      <EmailIcon />
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="grid md:flex lg:flex w-full md:gap-2 lg:gap-4 h-fit justify-between">
              <div className="w-full md:w-[50%] lg:w-[50%] grid h-fit gap-1">
                <div className="flex w-full h-fit lg:mb-1 border-b-[1px] border-white pb-2">
                  <h1 className="text-white font-extrabold text-xl lg:text-2xl md:text-lg">
                    Head Office
                  </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 w-full h-fit mb-4 lg:mb-10 lg:mt-0 gap-2 md:gap-1">
                  <div className="flex w-full py-1 h-fit text-left items-center">
                    <div className="text-white mr-2">
                      <Link
                        href="https://www.facebook.com/anugrahpadua"
                        target="_blank"
                      >
                        <p className="items-center text-xs">
                          <PhoneIcon />
                        </p>
                      </Link>
                    </div>
                    <div className="w-[75%] text-white text-sm md:text-xs lg:text-sm">
                      <p>021-28519810</p>
                    </div>
                  </div>
                  <div className="flex w-full py-1 h-fit text-left items-center">
                    <div className="text-white mr-2">
                      <Link
                        href="https://www.facebook.com/anugrahpadua"
                        target="_blank"
                      >
                        <p className="items-center text-xs">
                          <PhoneIcon />
                        </p>
                      </Link>
                    </div>
                    <div className="w-[75%] text-white text-sm md:text-xs lg:text-sm">
                      <p>021-8843140</p>
                    </div>
                  </div>
                  <div className="flex w-full py-1 h-fit text-left">
                    <div className="text-white mr-2">
                      <Link
                        href="https://maps.app.goo.gl/xCwKGiWPbxqj1yE27"
                        target="_blank"
                      >
                        <p className="items-center text-xs">
                          <LocationOnIcon />
                        </p>
                      </Link>
                    </div>
                    <div className="w-full text-white text-sm md:text-xs lg:text-sm">
                      <Link
                        href="https://maps.app.goo.gl/xCwKGiWPbxqj1yE27"
                        target="_blank"
                      >
                        <p>
                          JL. Raya Harapan Baru II D8 NO.8 Kota Baru, Bekasi
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="flex w-fit p-1 h-fit text-left items-center bg-[#7391C5] rounded-md hover:bg-bluish hover:text-blue">
                    <div className="text-white mr-2">
                      <Link
                        href="https://maps.app.goo.gl/xCwKGiWPbxqj1yE27"
                        target="_blank"
                      >
                        <p className="items-center text-xs">
                          <ExploreIcon />
                        </p>
                      </Link>
                    </div>
                    <div className="w-full text-white text-sm md:text-xs lg:text-sm">
                      <Link
                        href="https://maps.app.goo.gl/xCwKGiWPbxqj1yE27"
                        target="_blank"
                      >
                        <p>
                          <Text tid={"find_map"} />
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[50%] lg:w-[50%] grid h-fit gap-1">
                <div className="flex w-full h-fit lg:mb-1 border-b-[1px] border-white pb-2">
                  <h1 className="text-white font-extrabold text-xl lg:text-2xl md:text-lg">
                    Warehouse
                  </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 w-full h-fit mb-4 lg:mb-10 lg:mt-0 gap-2">
                  <div className="flex w-full py-1 h-fit text-left items-center">
                    <div className="text-white mr-2">
                      <Link
                        href="https://www.facebook.com/anugrahpadua"
                        target="_blank"
                      >
                        <p className="items-center text-xs">
                          <PhoneIcon />
                        </p>
                      </Link>
                    </div>
                    <div className="w-[75%] text-white text-sm md:text-xs lg:text-sm">
                      <p>08129316841</p>
                    </div>
                  </div>
                  <div className="flex w-full py-1 h-fit text-left">
                    <div className="text-white mr-2">
                      <Link
                        href="https://maps.app.goo.gl/v5Mbc9Zm8PMjtfba9"
                        target="_blank"
                      >
                        <p className="items-center text-xs">
                          <LocationOnIcon />
                        </p>
                      </Link>
                    </div>
                    <div className="w-full text-white text-sm md:text-xs lg:text-sm">
                      <Link
                        href="https://maps.app.goo.gl/v5Mbc9Zm8PMjtfba9"
                        target="_blank"
                      >
                        <p>
                          Jl. Raya Lemahabang, Simpangan, Kec. Cikarang Utara,
                          Kabupaten Bekasi, Jawa Barat 17530
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div className="flex w-fit p-1 h-fit text-left items-center bg-[#7391C5] rounded-md hover:bg-bluish hover:text-blue">
                    <div className="text-white mr-2">
                      <Link
                        href="https://maps.app.goo.gl/v5Mbc9Zm8PMjtfba9"
                        target="_blank"
                      >
                        <p className="items-center text-xs">
                          <ExploreIcon />
                        </p>
                      </Link>
                    </div>
                    <div className="w-full text-white text-sm md:text-xs lg:text-sm">
                      <Link
                        href="https://maps.app.goo.gl/v5Mbc9Zm8PMjtfba9"
                        target="_blank"
                      >
                        <p>
                          <Text tid={"find_map"} />
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-fit lg:h-[600px] md:h-[500px] lg:w-[50%] bg-white rounded-xl lg:rounded-none lg:rounded-r-2xl shadow-lg p-4 lg:p-10 grid">
          <div className="grid w-full h-fit lg:mb-4 gap-2">
            <h1 className="text-blue font-extrabold text-3xl lg:text-5xl capitalize">
              <Text tid={"touch"} />
            </h1>
            <p className="text-blue text-sm lg:text-sm lg:mt-2">
              <Text tid={"touch_description"} />
            </p>
          </div>
          <div className="grid w-full gap-2 lg:gap-4 h-fit lg:mb-10 mt-2 lg:mt-0">
            <div className="flex w-full py-1 h-fit text-left items-center">
              <div className="text-blue grid w-full gap-2">
                <label className="text-sm font-bold">
                  <Text tid={"touch_name"} />
                </label>
                <input
                  className="p-4 w-full h-10 border-2 border-blue rounded-3xl focus:outline-none"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex w-full py-1 h-fit text-left items-center">
              <div className="text-blue grid w-full gap-2">
                <label className="text-sm font-bold">
                  <Text tid={"touch_email"} />
                </label>
                <input
                  className="p-4 w-full h-10 border-2 border-blue rounded-3xl focus:outline-none"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex w-full py-1 h-fit text-left items-center">
              <div className="text-blue grid w-full gap-2">
                <label className="text-sm font-bold">
                  <Text tid={"touch_message"} />
                </label>
                <textarea
                  className="p-4 w-full h-28 border-2 border-blue rounded-3xl focus:outline-none"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            <div className="flex w-full h-fit text-left items-end justify-end">
              <Link
                href={`https://wa.me/8118113956?text=${template}`}
                target="_blank"
              >
                <button
                  className={`w-fit py-2 px-5 ${
                    name === "" || email === "" || message === ""
                      ? "bg-[#b6b6b6]"
                      : "bg-blue"
                  } text-white rounded-full border-2 border-white text-sm`}
                  disabled={
                    name === "" || email === "" || message === "" ? true : false
                  }
                >
                  <Text tid={"touch_button"} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
