import { heroui } from "@heroui/react";
import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react\\class-list.json",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1536px",
        xs: "400px",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        geist: "var(--font-geist)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui(), flowbiteReact],
};
