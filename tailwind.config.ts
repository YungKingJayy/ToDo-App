import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode
        light: {
          background: "#FFFFFF",
          primaryText: "#333333",
          secondaryText: "#666666",
          accent: "#007BFF",
          completedTask: "#28A745",
          pendingTask: "#FFC107",
          error: "#DC3545",
        },
        // Dark Mode
        dark: {
          background: "#121212",
          primaryText: "#E0E0E0",
          secondaryText: "#B3B3B3",
          accent: "#1E90FF",
          completedTask: "#34C759",
          pendingTask: "#FFCA28",
          error: "#FF3B30",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};

export default config;
