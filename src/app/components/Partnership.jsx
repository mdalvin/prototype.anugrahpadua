"use client";
import React from "react";
import { Text } from "./containers/Language";
import Image from "next/image";

const Partnership = () => {
  const mit_1 = [
    "PT SUN STAR PRIMA MOTOR GROUP",
    "PT MUSTIKA PRIMA BERLIAN GROUP",
    "PT BUMEN REDJA ABADI GROUP",
    "PT SINAR BERLIAN AUTOGRAHA GROUP",
    "PT BATAVIA BINTANG BERLIAN GROUP",
    "PT LAUTAN BERLIAN UTAMA MOTOR GROUP",
    "PT DWINDO BERLIAN SANJAYA GROUP",
    "PT MAHLIGAI PUTRI BERLIAN GROUP",
    "PT BOROBUDUR OTO MOBIL GROUP",
    "PT MAHAKAM BERLIAN SANJAYA GROUP",
    "PT BOSOWA BERLIAN MOTOR GROUP",
    "PT SINAR GORONTALO BERLIAN MOTOR GROUP",
    "PT DIPO INTERNASIONAL PAHALA OTO GROUP",
    "PT SRIKANDI DIAMOND GROUP",
    "PT JUDA TERUNA JAKARTA",
    "PT MANDAU BERLIAN SEJATI BALIKPAPAN",
    "PT BERLIAN MAJU MOTOR PALEMBANG",
  ];

  const hyundai = [
    "HYUNDAI GOWA SURABAYA",
    "HYUNDAI CENTER SURABAYA",
    "HYUNDAI SUNSET ROAD OFFICIAL DENPASAR",
    "HYUNDAI GATSU OFFICIAL DENPASAR",
    "HYUNDAI OFFICIAL BALI",
    "HYUNDAI MAGELANG",
    "HYUNDAI SEMARANG",
    "HYUNDAI YOGYAKARTA",
    "HYUNDAI TEGAL",
    "PT MITRA MAJU MOBILINDO SEMARANG",
  ];

  const hino = [
    "PT PERSADA LAMPUNG RAYA",
    "PT CITRA LESTARI MOBILINDO PALEMBANG",
    "PT GENTA LAMPUNG MAKMUR",
    "PT GITA RIAU MAKMUR PEKANBARU",
    "PT MAYA GRAHA INDAH BANDUNG",
  ];

  const suzu = [
    "SUMBERBARU ANEKA MOTOR YOGYAKARTA",
    "SUMBERBARU ANEKA MOTOR MAGELANG",
    "SUMBERBARU ANEKA MOTOR CILACAP",
    "SUMBERBARU ANEKA MOTOR PURWOKERTO",
  ];
  const mercy = ["PT GOWA KENCANA MOTOR"];

  const bodyworks = [
    "PT SUKSES TUNGGAL MANDIRI TANGGERANG",
    "PT RAINBOW ENGINERING JAKARTA",
    "PT MATRA PERKASA UTAMA NAROGONG",
    "PT HANDAL MITRA PERKASA",
  ];

  const honda = [
    "HONDA MANDALATAMA SEMARANG",
    "HONDA LAMPUNG RAYA",
    "HONDA WILTOP JAMBI",
    "HONDA MAJU MOBILINDO PALEMBANG",
    "HONDA UNIO PALEMBANG",
    "HONDA MAJU MOTOR PALEMBANG",
    "HONDA SM AMIN PALEMBANG",
  ];

  const mazda = [
    "PT CITRA MAHAKAM ABADI SAMARINDA",
    "MAZDA BALIKPAPAN JAYA",
    "MAZDA RADEN SALEH JAKARTA",
  ];

  const nissan = [
    "NISSAN PADANG",
    "NISSAN JAMBI",
    "NISSAN PALEMBANG",
    "NISSAN PEKANBARU",
    "NISSAN LAMPUNG",
  ];

  const tata = ["PT TATA MOTORS INDONESIA - KERAMAT RAYA"];

  const kia = ["PT SILOAM MOTOR - KIA BANDUNG"];

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
  ];

  const company2 = [
    "PT DUTA PALMA JAKARTA",
    "PT SARANA AIRCON JAKARTA",
    "PT MIZAN MEDIA UTAMA JAKARTA",
    "PT MATRA UNIKATAMA JAKARTA",
    "PT GRAHA ISMAYA JAKARTA",
    "PT LIGITA JAYA JAKARTA",
    "PT BARADINAMIKA MUDA SUKSES JAKARTA",
    "PT MULYA PERTAMA JAKARTA",
  ];

  const company3 = [
    "PT TIRTAKENCANA TATAWARNA GROUP",
    "PT ANTIKA RAYA SURABAYA",
    "PT APL LOGISTIC",
    "PT BANDANG MINING COAL",
    "PT AUDY UTAMA INDONESIA",
    "PT COLOMBUS MITRA ADISARANA",
    "PT MUSTIKA CITRA RASA - HOLLAND BAKERY",
  ];

  return (
    // <div
    //   className="h-fit lg:h-fit w-screen bg-about bg-no-repeat bg-cover text-left flex"
    //   id="about"
    // >
    <div className="h-fit lg:h-fit w-screen bg-white text-left px-5 py-20 lg:px-20 lg:py-40 grid align-top bg-opacity-90">
      <div className="w-full text-end lg:pb-10">
        <h1 className="text-blue text-2xl lg:text-4xl font-extrabold uppercase text-center">
          <Text tid="partnership_title" />
        </h1>
      </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center lg:justify-between w-full h-fit text-blue pt-10 lg:pt-20 gap-4 lg:gap-10">
        <div className="grid h-fit w-full text-center items-center justify-center">
          <div className="relative w-28 h-20 lg:w-40 lg:h-28 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/suzuki_1GTv2a6HB.png?updatedAt=1701835905156"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full text-center items-center justify-center">
          <div className="relative w-28 h-20 lg:w-40 lg:h-28 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/nissan_VOYL0rkUF.png?updatedAt=1701835907139"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full text-center items-center justify-center">
          <div className="relative w-28 h-20 lg:w-40 lg:h-28 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/honda_GuOzTHY1pB.png?updatedAt=1701835906244"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full text-center items-center justify-center">
          <div className="relative w-28 h-20 lg:w-40 lg:h-28 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/mazda_sdLTROKd9n.png?updatedAt=1701835906040"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full text-center items-center justify-center">
          <div className="relative w-28 h-20 lg:w-40 lg:h-28 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/tata_M4LmQHbuhy.png?updatedAt=1701835906010"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full text-center items-center justify-center">
          <div className="relative w-28 h-20 lg:w-40 lg:h-28 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/daihatsu_QRVeNyWiHG.png?updatedAt=1701835906312"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full text-center items-center justify-center">
          <div className="relative w-28 h-20 lg:w-40 lg:h-28 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/kia_8D7p_wXpbG.png?updatedAt=1701835905324"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
        <div className="grid h-fit w-full text-center items-center justify-center pt-4 lg:pt-8">
          <div className="relative w-28 h-12 lg:w-40 lg:h-16 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/wuling_L3A5e0omA1F.png?updatedAt=1701835907577"
              }
              alt="Partnership"
              fill
            />
          </div>
        </div>
      </div> */}
      <div className="grid md:flex lg:flex justify-between w-full h-fit text-blue py-2 md:mt-5 lg:py-5">
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center lg:justify-center mb-10 lg:mb-0">
          <div className="relative place-self-center w-60 h-40">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/mitsubishi_KSUhpxd8u.png?updatedAt=1701191934054"
              }
              alt="Partnership"
              fill
            />
          </div>
          <ul className="list-disc px-5 text-blue mt-2 text-left">
            {mit_1.map((mt, i) => (
              <li
                className="text-sm md:text-xs lg:text-sm mt-1 lg:mt-2 font-medium"
                key={i}
              >
                {mt}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center lg:justify-center mb-10 lg:mb-0">
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
              <li
                className="text-sm md:text-xs lg:text-sm mt-1 lg:mt-2 font-medium"
                key={i}
              >
                {hy}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center lg:justify-center mb-10 lg:mb-0">
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
            {hino.map((hn, i) => (
              <li
                className="text-sm md:text-xs lg:text-sm mt-1 lg:mt-2 font-medium"
                key={i}
              >
                {hn}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid md:flex lg:flex justify-between w-full h-fit text-blue py-2 md:mt-5 lg:py-5">
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center lg:justify-center mb-10 lg:mb-0">
          <div className="relative place-self-center w-60 h-40">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/suzuki_1GTv2a6HB.png?updatedAt=1701835905156"
              }
              alt="Partnership"
              fill
            />
          </div>
          <ul className="list-disc px-5 text-blue mt-2 text-left">
            {suzu.map((sz, i) => (
              <li
                className="text-sm md:text-xs lg:text-sm mt-1 lg:mt-2 font-medium"
                key={i}
              >
                {sz}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center lg:justify-center mb-10 lg:mb-0">
          <div className="relative w-60 h-40 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/honda_GuOzTHY1pB.png?updatedAt=1701835906244"
              }
              alt="Partnership"
              fill
            />
          </div>
          <ul className="list-disc px-5 text-blue mt-2 text-left">
            {honda.map((hd, i) => (
              <li
                className="text-sm md:text-xs lg:text-sm mt-1 lg:mt-2 font-medium"
                key={i}
              >
                {hd}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center lg:justify-center mb-10 lg:mb-0">
          <div className="relative w-60 h-40 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/mazda_sdLTROKd9n.png?updatedAt=1701835906040"
              }
              alt="Partnership"
              fill
            />
          </div>
          <ul className="list-disc px-5 text-blue mt-2 text-left">
            {mazda.map((mz, i) => (
              <li
                className="text-sm md:text-xs lg:text-sm mt-1 lg:mt-2 font-medium"
                key={i}
              >
                {mz}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid md:flex lg:flex justify-normal lg:justify-between w-full h-fit text-blue py-2 mt-5 lg:mt-0">
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center lg:justify-center mb-10 lg:mb-0">
          <div className="relative w-40 h-40 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/mercedes_1qYjs_x-t.png?updatedAt=1704529592056"
              }
              alt="Partnership"
              fill
            />
          </div>
          <ul className="list-disc px-5 text-blue mt-2 text-left">
            {mercy.map((mc, i) => (
              <li
                className="text-sm md:text-xs lg:text-sm mt-1 lg:mt-2 font-medium"
                key={i}
              >
                {mc}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center lg:justify-center mb-10 lg:mb-0">
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
            <li className="text-sm md:text-xs lg:text-sm mt-1 lg:mt-2 font-medium">
              PT WAHANA AUTO PERKASA PONTIANAK
            </li>
          </ul>
        </div>
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center lg:justify-center mb-10 lg:mb-0">
          <div className="relative w-60 h-40 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/nissan_VOYL0rkUF.png?updatedAt=1701835907139"
              }
              alt="Partnership"
              fill
            />
          </div>
          <ul className="list-disc px-5 text-blue mt-2 text-left">
            {nissan.map((ns, i) => (
              <li
                className="text-sm md:text-xs lg:text-sm mt-1 lg:mt-2 font-medium"
                key={i}
              >
                {ns}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid md:flex lg:flex justify-normal w-full h-fit text-blue py-2 mt-5 lg:mt-0">
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center lg:justify-center mb-10 lg:mb-0">
          <div className="relative w-40 h-40 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/tata_M4LmQHbuhy.png?updatedAt=1701835906010"
              }
              alt="Partnership"
              fill
            />
          </div>
          <ul className="list-disc px-5 text-blue mt-2 text-left">
            {tata.map((tt, i) => (
              <li
                className="text-sm md:text-xs lg:text-sm mt-1 lg:mt-2 font-medium"
                key={i}
              >
                {tt}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center lg:justify-center mb-10 lg:mb-0">
          <div className="relative w-60 h-40 place-self-center">
            <Image
              src={
                "https://ik.imagekit.io/6tebrod5l/anugrahpadua/logos/kia_8D7p_wXpbG.png?updatedAt=1701835905324"
              }
              alt="Partnership"
              fill
            />
          </div>
          <ul className="list-disc px-5 text-blue mt-2 text-left">
            {kia.map((ki, i) => (
              <li
                className="text-sm md:text-xs lg:text-sm mt-1 lg:mt-2 font-medium"
                key={i}
              >
                {ki}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full text-end lg:pt-16">
        <h1 className="text-blue text-4xl lg:text-4xl font-extrabold uppercase text-center mb-2">
          <Text tid="companies" />
        </h1>
      </div>
      <div className="grid md:flex lg:flex justify-normal lg:justify-between w-full h-fit text-blue py-2 lg:px-5">
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center justify-center">
          <ul className="list-disc px-5 text-blue mt-2 text-left">
            {companies.map((cp, i) => (
              <li
                className="text-sm md:text-xs lg:text-sm mt-1 lg:mt-2 font-medium"
                key={i}
              >
                {cp}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid h-fit w-[350px] lg:w-[33%] text-center items-center justify-center">
          <ul className="list-disc px-5 text-blue lg:mt-2 text-left">
            {company2.map((cp, i) => (
              <li
                className="text-sm md:text-xs lg:text-sm mt-1 lg:mt-2 font-medium"
                key={i}
              >
                {cp}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid h-fit w-[350px] lg:w-[33%] text-center items-center justify-center">
          <ul className="list-disc px-5 text-blue lg:mt-2 text-left">
            {company3.map((cp, i) => (
              <li
                className="text-sm md:text-xs lg:text-sm mt-1 lg:mt-2 font-medium"
                key={i}
              >
                {cp}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid md:flex lg:flex justify-evenly w-full h-fit text-blue py-10 lg:px-7 lg:mt-4">
        <div className="grid h-fit w-full lg:w-[33%] text-center items-center justify-center mb-10 lg:mb-0">
          <h1 className="text-blue text-4xl lg:text-4xl font-extrabold uppercase text-center mb-2">
            <Text tid="bodyworks" />
          </h1>
          <ul className="list-disc px-5 text-blue mt-2 text-left">
            {bodyworks.map((bw, i) => (
              <li
                className="text-sm md:text-xs lg:text-sm mt-1 lg:mt-2 font-medium"
                key={i}
              >
                {bw}
              </li>
            ))}
          </ul>
        </div>{" "}
      </div>
    </div>
    // </div>
  );
};

export default Partnership;
