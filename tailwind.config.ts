import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1E3A8A",
          gold: "#F59E0B",
          light: "#EFF6FF"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

