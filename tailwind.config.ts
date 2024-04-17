import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-red": "#E53B3A",
        "strong-red": "#e53b3a",
        "primary-green": "#228B22",
        "dark-blue-text": "#172554",
        "gray-text": "#666666",
        "border-gray": "#e6e6e6",
        "primary-dark-blue": "#001C48",
        "dark-blue-bg": "#002359",
        "header-bg": "#c3c1c1",
        "light-dark-bg": "bg-[rgba(255,255,255,0.2)]",
      },
      screens: {
        sm: "640px",
        md: "772px",
        lg: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
