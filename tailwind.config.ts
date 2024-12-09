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
        background: "#FFFFFF", // Branco puro (fundo principal)
        black: "#000000", // Preto suave (textos principais)
        lightGray: "#F7F7F7", // Cinza claro (fundo secundário)
        mediumGray: "#717171", // Cinza médio (textos secundários)
        highlight: "#FF385C", // Vermelho (destaques como botões)
        hover: "#EBF3FF", // Azul claro translúcido (hover e interatividade)
        gold: "#FFB400", // Dourado (estrelas de avaliação)
      },
    },
  },
  plugins: [],
} satisfies Config;
