import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { brand: { DEFAULT: "#1E4D2B", light: "#5BAA2F", cream: "#FAF6EC", gold: "#C9A24B", sale: "#F5C518" } },
    fontFamily: { sans: ["var(--font-cairo)", "sans-serif"] },
    borderRadius: { card: "20px" },
    boxShadow: { soft: "0 8px 24px rgba(30,77,43,.10)" },
  } },
  plugins: [],
} satisfies Config;
