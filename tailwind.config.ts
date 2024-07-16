import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '500px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontSize: {
        "10": "10px",
        "11": "11px",
        "13": "13px",
        "15": "15px",
      },
      colors: {
      },
      backgroundColor: {
        neon: "rgb(1, 10, 92)",
      },
    },
  },
  plugins: [],
};
export default config;
