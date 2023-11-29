import React from "react";
import { Text } from "./containers/Language";
import Image from "next/image";

const Partnership = () => {
  const mit_1 = [
    "PT SUN STAR MOTOR PRIMA JAKARTA",
    "PT CIWANGI BERLIAN MOTOR JAKARTA",
    "PT BATAVIA BINTANG BERLIAN JAKARTA",
    "PT LAUTAN BERLIAN UTAMA MOTOR JAKARTA",
    "PT DWINDO BERLIAN SANJAYA BINTARO",
    "PT BUMEN REDJA ABADI JAKARTA",
    "PT BUMEN REDJA ABADI CIKUPA",
    "PT MUSTIKA PRIMA BERLIAN NAROGONG",
    "PT MAHLIGAI PUTRI BERLIAN CIMAHI",
    "PT BOROBUDUR OTO MOBIL YOGYAKARTA",
  ];

  const mit_2 = [
    "PT LAUTAN BERLIAN UTAMA MOTOR LAMPUNG",
    "PT LAUTAN BERLIAN UTAMA MOTOR BATU RAJA",
    "PT LAUTAN BERLIAN UTAMA MOTOR LAHAT",
    "PT LAUTAN BERLIAN UTAMA MOTOR PALEMBANG",
    "PT LAUTAN BERLIAN UTAMA MOTOR LUBUK LINGGAU",
    "PT LAUTAN BERLIAN UTAMA MOTOR BENGKULU",
    "PT LAUTAN BERLIAN UTAMA MOTOR PEKANBARU",
    "PT ANDALAS BERLIAN MOTOR PADANG",
    "PT MAHAKAM BERLIAN SANJAYA SAMARINDA",
    "PT MANDAU BERLIAN SEJATI BALIKPAPAN",
  ];

  const hyundai = [
    "PT SEDAYU CITRA MOBIL PEKANBARU",
    "PT CIPTA KARYA PRANATA BANDUNG",
    "PT BUANA HYUNDAI MOTOR PONTIANAK",
  ];

  const showrooms = [
    "PT HANGTUAH PERKASA MOTOR PEKANBARU",
    "PT MULTIPERINDO MOTOR PEKANBARU",
    "PT DUTA PUTRA SUMATRA MEDAN",
    "PT AUTOZONA JAYA PRATAMA JAKARTA",
    "PT MUTIARA BERLIAN INDAH SAMARINDA",
    "PT GANDA AUTO UTAMA JAKARTA",
  ];

  const bodyworks = [
    "PT SUKSES TUNGGAL MANDIRI TANGGERANG",
    "PT RAINBOW ENGINERING JAKARTA",
    "PT MATRA PERKASA UTAMA NAROGONG",
  ];

  const companies = [
    "PT BERLIAN ANUGRAH TRANSPORTASI SURABAYA",
    "PT BEERENT COMMERCIAL BANDUNG",
    "PT CAHAYA SAKTI MULTI INTRACO BOGOR",
    "PT BANGUN KARYA PRATAMA LESTARI JAKARTA",
    "PT KAO INDONESIA, Tbk JAKARTA",
    "PT FASTFOOD INDONESIA JAKARTA",
    "PT AJINOMOTO INDONESIA, Tbk JAKARTA",
    "PT SMART, Tbk JAKARTA",
    "PT AUDY UTAMA INDONESIA JAKARTA",
    "PT DUTA PALMA JAKARTA",
    "PT SARANA AIRCON JAKARTA",
    "PT MIZAN MEDIA UTAMA JAKARTA",
    "PT MATRA UNIKATAMA JAKARTA",
    "PT GRAHA ISMAYA JAKARTA",
    "PT LIGITA JAYA JAKARTA",
    "PT BARADINAMIKA MUDA SUKSES JAKARTA",
    "PT MULYA PERTAMA JAKARTA",
  ];

  return (
    // <div
    //   className="h-fit lg:h-fit w-screen bg-about bg-no-repeat bg-cover text-left flex"
    //   id="about"
    // >
    <div className="h-fit lg:h-fit w-screen bg-white text-left px-5 py-20 lg:px-20 lg:py-40 grid align-top bg-opacity-90">
      <div className="w-full text-end lg:pb-10">
        <h1 className="text-blue text-4xl lg:text-6xl font-extrabold uppercase text-center">
          <Text tid="partnership_title" />
        </h1>
      </div>
      <div className="grid lg:flex justify-between w-full h-fit text-blue py-2 lg:py-5 items-center">
        <div className="grid h-fit w-full lg:w-[30%] text-center justify-center items-center mb-5 lg:mb-0">
          <div className="relative w-60 h-40">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/mitsubishi_KSUhpxd8u.png?updatedAt=1701191934054"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center justify-center">
          <ul className="list-disc px-5 text-blue lg:mt-2 text-left">
            {mit_1.map((mt, i) => (
              <li className="text-sm mt-1 lg:mt-2 font-medium" key={i}>
                {mt}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid h-fit w-full lg:w-[36%] text-center items-center justify-center">
          <ul className="list-disc px-5 text-blue lg:mt-2 text-left">
            {mit_2.map((mt, i) => (
              <li className="text-sm mt-1 lg:mt-2 font-medium" key={i}>
                {mt}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid lg:flex justify-between w-full h-fit text-blue py-2 mt-5 lg:mt-0">
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center justify-center mb-10 lg:mb-0">
          <div className="relative w-60 h-40 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/hyundai_2gEt0EBPC.png?updatedAt=1701191934111"
              }
              alt="Partnership"
              fill
            />
          </div>
          <ul className="list-disc px-5 text-blue mt-2 text-left">
            {hyundai.map((hy, i) => (
              <li className="text-sm mt-1 lg:mt-2 font-medium" key={i}>
                {hy}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center justify-center mb-10 lg:mb-0">
          <div className="relative w-60 h-40 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/udnissan_OKTLOicFN.png?updatedAt=1701191933510"
              }
              alt="Partnership"
              fill
            />
          </div>
          <ul className="list-disc px-5 text-blue mt-2 text-left">
            <li className="text-sm mt-1 lg:mt-2 font-medium">
              PT WAHANA AUTO PERKASA PONTIANAK
            </li>
          </ul>
        </div>
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center justify-center mb-10 lg:mb-0">
          <div className="relative w-60 h-40 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/hino_973K1MvcE.png?updatedAt=1701191934400"
              }
              alt="Partnership"
              fill
            />
          </div>
          <ul className="list-disc px-5 text-blue mt-2 text-left">
            <li className="text-sm mt-1 lg:mt-2 font-medium">
              PT NENGGA PRATAMA INTERNUSA MANADO
            </li>
          </ul>
        </div>
      </div>
      <div className="grid lg:flex justify-between w-full h-fit text-blue py-10 lg:px-7">
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center justify-center mb-10 lg:mb-0">
          <h1 className="text-blue text-4xl lg:text-4xl font-extrabold uppercase text-center mb-2">
            <Text tid="showrooms" />
          </h1>
          <ul className="list-disc px-5 text-blue mt-2 text-left">
            {showrooms.map((sr, i) => (
              <li className="text-sm mt-1 lg:mt-2 font-medium" key={i}>
                {sr}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center justify-center mb-10 lg:mb-0">
          <h1 className="text-blue text-4xl lg:text-4xl font-extrabold uppercase text-center mb-2">
            <Text tid="bodyworks" />
          </h1>
          <ul className="list-disc px-5 text-blue mt-2 text-left">
            {bodyworks.map((bw, i) => (
              <li className="text-sm mt-1 lg:mt-2 font-medium" key={i}>
                {bw}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center justify-center mb-10 lg:mb-0">
          <h1 className="text-blue text-4xl lg:text-4xl font-extrabold uppercase text-center mb-2">
            <Text tid="companies" />
          </h1>
          <ul className="list-disc px-5 text-blue mt-2 text-left">
            {companies.map((cp, i) => (
              <li className="text-sm mt-1 lg:mt-2 font-medium" key={i}>
                {cp}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Partnership;
