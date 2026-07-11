import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#E5E7EB",
        background: "#FCFCFB",
        foreground: "#1E293B",
        primary: "#0F766E",
        accent: "#84CC16",
        surface: "#FFFFFF",
        muted: "#F5F7F6",
        slate: "#1E293B",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 20px 70px rgba(15, 23, 42, 0.08)",
        line: "0 1px 0 rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
