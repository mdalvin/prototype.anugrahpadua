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
        hero: "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/ezgif.com-gif-maker_rAl1U1WWp.jpg?updatedAt=1701153830023)",
        about:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/ap2_qrbgc1c73.jpeg?updatedAt=1701154634887)",
        map: "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/indo_map_fkh8jheYS.png?updatedAt=1701167783307)",
        triangle:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/pattern_triangle_CdFymBIVy.png?updatedAt=1701220766625)",
        lines:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/lines_BSBSxrvre.png?updatedAt=1701221853184)",
        ship: "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/ship_qO5PuoAQb.png?updatedAt=1701229071436)",
        truck:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/truck_9HvRTIOKl.png?updatedAt=1701229495097)",
        insurance:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/insurance_J3CDLAd6P.png?updatedAt=1701229705946)",
        carShipping:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/carShipping_nR2Ssn50v.png?updatedAt=1701229982740)",
        heavy:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/heavy_g2Mg7vAXP.png?updatedAt=1701230307369)",
        pay: "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/paymentss_iDc_Wvfvw.png?updatedAt=1701241532995)",
        pricing:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/pricing_TsBN6t_Vn2.png?updatedAt=1701231424746)",
        shippingIns:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/shippingInsurance_DB8X-TixX.png?updatedAt=1701231424713)",
        discount:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/discount__bfD55oS9.png?updatedAt=1701231424634)",
        pro: "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/prof_HJiUjK0ke.png?updatedAt=1701242100159)",
        dtd: "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/dtd_gMJSrxEuF.png?updatedAt=1701231424542)",
        tech: "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/tecch_-CbpxU_kc2.png?updatedAt=1701243084537)",
        team: "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/team_adUHg__Z4.png?updatedAt=1701235130848)",
        route:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/route_tNtERnRl7.png?updatedAt=1701235130792)",
        wprice:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/white_pricing_EsymVU31H.png?updatedAt=1701235130635)",
        redroute:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/redroute_96IhUjHot.png?updatedAt=1701235963407)",
        permit:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/permit_Vt6UpksW9.png?updatedAt=1701235963456)",
        checklist:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/checklits_kVfuX1jem.png?updatedAt=1701235963206)",
        longtruck:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/ap4_47O73-0dq.jpeg?updatedAt=1701238754154)",
        quality:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/quality__a0KEXz4L.png?updatedAt=1701241002626)",
        vision:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/vision_F4ph7wY-A.png?updatedAt=1701241002478)",
        mission:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/mission_A7fJY7SPl.png?updatedAt=1701241002574)",
        safety:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/safety_QizTbHfHv.png?updatedAt=1701241002557)",
        inovation:
          "url(https://ik.imagekit.io/6tebrod5l/anugrahpadua/inovation_uQWpm16Wy.png?updatedAt=1701241002594)",
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
