import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
        geist: "var(--font-geist)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
