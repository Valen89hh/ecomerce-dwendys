import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        custom: "400px",
      },
      colors: {
        primary: "#008ecc",
        "background-3": "#f3f9fb",
        "background-2": "#f6f6fc",
        "background-1": "#f5f5f5",
        heading: "#222222",
        light: "#8888",
        line: "#d9d9d9",
        border: "#ededed",
        "yellow-1": "#e3bc01",
        secondary: "#666666",
        "primary-variant": "#0C9BDA",
        "primary-light": "#05ABF3",
        success: "#249B3E",

        facebook: "#1877f2",
        whatsapp: "#25D366",
        twitter: "#1DA1F2",
        instagram: "#fd9644",
      },
    },
  },
  plugins: [],
};
export default config;
