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
          background: "#F5F7FA", // Soft light gray
          lighterBackground: "#EFF2F5", // Lighter than foreground
          foreground: "#FFFFFF", // Pure white for elements
          primaryText: "#2C3E50", // Dark slate for text
          secondaryText: "#7F8C8D", // Muted gray for secondary text
          accent: "#1ABC9C", // Soft teal for accents
          accentHover: "#16A085", // Darker teal for hover states
          completedTask: "#27AE60", // Fresh green for completed tasks
          pendingTask: "#F39C12", // Warm yellow for pending tasks
          error: "#E74C3C", // Bright red for error states
        },
        // Dark Mode
        dark: {
          background: "#181A1B", // Deep dark background
          lighterBackground: "#22272A", // Lighter than foreground
          foreground: "#2C3E50", // Dark slate for foreground
          primaryText: "#ECF0F1", // Light text for readability
          secondaryText: "#95A5A6", // Soft gray for secondary text
          accent: "#1ABC9C", // Same teal for accents
          accentHover: "#16A085", // Teal hover for dark mode
          completedTask: "#2ECC71", // Vibrant green for completed tasks
          pendingTask: "#F39C12", // Same warm yellow for pending tasks
          error: "#E74C3C", // Consistent red for errors
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
