/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/hero_sGttUd_Sp.jpg?updatedAt=1701840135758)",
        about:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/ap2_qrbgc1c73.jpeg?updatedAt=1701154634887)",
        map: "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/indo_map_fkh8jheYS.png?updatedAt=1701167783307)",
        triangle:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/pattern_triangle_CdFymBIVy.png?updatedAt=1701220766625)",
        lines:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/lines_BSBSxrvre.png?updatedAt=1701221853184)",
        ship: "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/Icons/2%20kargo%20Laut_1cRtwNKL8_.png?updatedAt=1701361025181)",
        truck:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/Icons/2%20pengiriman%20kendaraan_BIqXKZFIw.png?updatedAt=1701361025105)",
        insurance:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/Icons/2%20Asuransi%20pengiriman_YaqZ-X7mkD.png?updatedAt=1701361024853)",
        carShipping:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/Icons/2%20kargo%20darat_Hd-fO3dlY.png?updatedAt=1701361024996)",
        heavy:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/heavy_g2Mg7vAXP.png?updatedAt=1701230307369)",
        pay: "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/Icons/3%20Flexible%20Payment_HTvm8P0uFN.png?updatedAt=1701361029113)",
        pricing:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/Icons/3%20price_LXZpk60oV.png?updatedAt=1701361029685)",
        shippingIns:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/Icons/4%20Insurance_i-uw3gtYkp.png?updatedAt=1701361028796)",
        discount:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/Icons/3%20discount_XNEwTnFZiA.png?updatedAt=1701361028081)",
        pro: "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/Icons/3%20partnership_6_JOhm9ta.png?updatedAt=1701361029160)",
        dtd: "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/Icons/4%20d2d%20service_mrgxjJY4_.png?updatedAt=1701361028853)",
        tech: "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/tecch_-CbpxU_kc2.png?updatedAt=1701243084537)",
        team: "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/team_adUHg__Z4.png?updatedAt=1701235130848)",
        route:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/route_tNtERnRl7.png?updatedAt=1701235130792)",
        wprice:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/white_pricing_EsymVU31H.png?updatedAt=1701235130635)",
        redroute:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/Icons/4%20route_hI8_bbAQv.png?updatedAt=1701361031405)",
        permit:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/Icons/4%20licensing_j7PIRm0uJ.png?updatedAt=1701361028319)",
        checklist:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/Icons/4%20check%20list_nrPNvYQsU.png?updatedAt=1701361028973)",
        longtruck:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/ap4_47O73-0dq.jpeg?updatedAt=1701238754154)",
        quality:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/Icons/1%20Service%20quality_rh8cOKiN_U.png?updatedAt=1701361024861)",
        vision:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/Icons/1%20Vision_R5MTNrGBrB.png?updatedAt=1701361024807)",
        mission:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/Icons/1%20mision_7PnH0UlTK.png?updatedAt=1701361024972)",
        safety:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/Icons/1%20work%20safety_43VheTnjA.png?updatedAt=1701361024923)",
        inovation:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/Icons/1%20Inovation_erw6glnn_F.png?updatedAt=1701361024878)",
      },
      colors: {
        primary: "#E9E0D6",
        blue: "#102249",
        bluish: "#539ECC",
        cyan: "#1C3AB7",
        red: "#B32428",
        white: "#FFF",
        black: "#2D2C30",
        orange: "#F9934F",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        xxl: "1920px",
      },
      fontFamily: {
        sans: ["var(--font-mulish)"],
        primary: ["Mulish", "sans-serif"],
        secondary: ["Open Sans", "serif"],
        tertiary: ["Fira Sans", "serif"],
        brand: ["Italiana", "serif"],
        content: ["Murecho", "serif"],
      },
    },
  },
  plugins: [],
};
