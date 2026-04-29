import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F5F5",
        sand: "#F6F3EA",
        paper: "#FCF9F0",
        ink: "#0B2407",
        ardalYellow: "#FFD533",
        ardalYellowSoft: "#FFE680",
        ardalGreen: "#8DC83E",
        ardalGreenDark: "#83BA38",
        ardalGreenDeep: "#133A0D",
        nectarinaPink: "#FF9E9D",
        naranjaOrange: "#FFB170",
        limonYellow: "#FFEF88",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.9s ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
