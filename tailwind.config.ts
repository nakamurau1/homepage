import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // カスタムフォントの追加
      fontFamily: {
        heading: ["'M PLUS Rounded 1c'", "sans-serif"],
      },
      // カスタムカラーの追加
      colors: {
        grassTeal: "#88ccca",
        sectionTitleDecoration: "#525252",
        linkLight: "#3d7aed",
        linkDark: "#ff63c3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
