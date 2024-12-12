import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        lightGray: "#F7F7F7", 
        mediumGray: "#717171", 
        highlight: "#FF385C",
        hover: "#EBF3FF",
        white: "#FFFFFF",
        gray2: "#F7F7F7",
        gray3: "#E8E8E8",
        gray4: "#CCCCCC",
        gray5: "#B8B8B8",
        gray6: "#A3A3A3",
        gray7: "#8F8F8F",
        gray8: "#7A7A7A",
        gray9: "#666666",
        gray10: "#525252",
        gray11: "#3D3D3D",
        gray12: "#292929",
        gray13: "#1F1F1F",
        gray14: "#0F0F0F",
        b1: "#157AFF",
        b2: "#6eadff",
      },
    },
  },
  plugins: [],
} satisfies Config;
