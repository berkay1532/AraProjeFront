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
        "auth-pattern": "url('/img/auth.png')",
      },
      colors: {
        primary: "#3699C4",
        secondary: "#262626",
        third: "#18181B",
      },
    },
  },
  plugins: [],
};
export default config;
