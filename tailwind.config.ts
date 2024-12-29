import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          900: "#0C4733", // Hover
          800: "#0C4733", // Primary color
          700: "#4E9C79",
          100: "#EEF6F2",
        },
        main: {
          400: "#ebecfa",
          500: "#9d9fe6",
          600: "#30303d",
          700: "#434352",
          800: "#f2f2fc",
          900: "#efaca7",
        },
        secondary: {
          1: "#BCE3F9",
          2: "#FFCA63",
        },
        tertiary: {
          1: "#D92632",
          2: "#FF9852",
          3: "#6126AE",
          4: "#004EB2",
          5: "#2F96F4",
        },
        neutral: {
          900: "#141F33", // Text
          600: "#404855", // Secondary Text
          400: "#E2E1DE", // Border
          200: "#F7F5F2",
          100: "#FFFFFF",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
