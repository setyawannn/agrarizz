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
        primary: "#163224",
        ourblack: "#121212",
        secondary: "#ECAB2E",
        ourwhite: "#FAFAFA",
        purewhite: "#FFFFFF",
        outline: "#F5E9D1",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "space-grotesk": ["var(--font-space-grotesk)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
