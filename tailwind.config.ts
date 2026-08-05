import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FCFCFB",
        foreground: "#1E293B",
        primary: "#0F766E",
        accent: "#84CC16",
        surface: "#FFFFFF",
        alternate: "#F5F7F6",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 23, 42, 0.09)",
        hairline: "inset 0 0 0 1px rgba(226, 232, 240, 0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
