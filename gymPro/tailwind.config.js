// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "var(--color-text-base)",
        muted: "var(--color-text-muted)",
        btnText: "var(--btn-text-color)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        btnColor: {
          base: "var(--btn-primary-color)",
          hover: "var(--btn-hover)",
          active: "var(--btn-active)",
          btnSec: "var(--btn-secondary)",
          btnSechover: "var(--btn-secondary-hover)",
          btnActive: "var(--btn-secondary-active)",
        },
        cardBg: "var(--card-background-color)",
        cardFg: "var(--card-foreground-color)",
      },
      fontSize: {
        btnSize: "1.25rem",
        xxs: "0.625rem",
        "2.5xl": "4.875rem",
        "3.5xl": "2rem",
      },
      spacing: {
        primaryCover: "86.11%",
        workOutcardW: "11.563rem",
        workOutcardH: "30.223rem",
        workOutImgH: "25.875rem",
        lgW: "28.25rem",
        lgH: "25rem",
        lgxW: "40.25rem",
        btnH: "3.63rem",
        btnW: "12.6875rem",
        heroH: "32.75rem",
        heroW: "44.125rem",
        merchConW: "15.625rem",
        merchConH: "18.938rem",
        merchImgH: "14.625rem",
        merchImgW: "13.625rem",
      },
      borderRadius: {
        primary: "1.25rem",
        secondary: "50%",
        tertiary: "0.25rem",
        "2xc": "1.25rem",
        lgx: "0.625rem",
        third: "0.3125rem",
        circle: "50%",
        btn: "6.25rem",
        largeBtn: "12.5rem",
      },
      lineHeight: {
        primary: "1.8rem",
        secondary: "4.8rem",
        tertiary: "2.4rem",
        fourth: "1.5rem",
        fifth: "1.2rem",
        sixth: "3.6rem",
        seventh: "1.05rem",
        eight: "2.75rem",
        ninth: "1.35rem",
        tenth: "1.3rem",
        eleventh: "1.26875rem",
        twelfth: "0.85375rem",
        thirteenth: "1.816rem",
        fourteenth: "0.85375rem",
      },
      // fontFamily: {
      //   neue: "'Neue Haas Grotesk Display Pro', sans-serif",
      //   clash: ["var(--font-clash)"],
      //   inter: ["var(--font-inter)"],
      //   avenir: ["var(--font-avenir)"],
      // },
      gridTemplateColumns: {
        footer: "30% 70%",
        custom: "1fr 1fr 1fr 1fr 1fr",
        image1: "repeat(2, 326.65px 191.04px)",
        image2: "repeat(2, 191.04px 326.65px)",
      },
      boxShadow: {
        form: "0px 2px 24px 4px #0000001A",
        toggleBtn: "0px 0.5px 40px 0px #1E1E1E1A",
        card: "10px 40px 40px 0px #0000001A",
        circle: "0px -2px 40px 1px #00000014",
      },    
    },
    // screens: {
    //   xs: "375px",
    //   iphone: "420px",
    //   lgx:"1280",
    //   "1.5xl": "1400px",
    //   tablet: "850px",
    // },
    screens: {
      // '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1535px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }, 
  },
  plugins: [],
};

