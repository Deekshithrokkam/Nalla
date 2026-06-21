import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: "#FFF8F0",
          100: "#FFEFD6",
          200: "#FFD9A0",
          300: "#FFBE63",
          400: "#FF9A2E",
          500: "#FF7A00",
          600: "#E86200",
          700: "#C24A00",
          800: "#9A3700",
          900: "#7A2A00",
        },
        gold: {
          50: "#FFFDF0",
          100: "#FFF9D6",
          200: "#FFF0A0",
          300: "#FFE363",
          400: "#FFD12E",
          500: "#FFBF00",
          600: "#D4A000",
          700: "#A87E00",
          800: "#7C5C00",
          900: "#5C4500",
        },
        crimson: {
          50: "#FFF0F3",
          100: "#FFD6DE",
          200: "#FFA0B4",
          300: "#FF6385",
          400: "#FF2E5C",
          500: "#CC0033",
          600: "#A8002A",
          700: "#850020",
          800: "#620018",
          900: "#3D000F",
        },
        ivory: {
          50: "#FFFEF8",
          100: "#FFFCF0",
          200: "#FFF7DC",
          300: "#FFF0C0",
          400: "#FFE69A",
          500: "#FFD96E",
          600: "#E8BF42",
          700: "#C2A020",
          800: "#9A7C00",
          900: "#7A6200",
        },
        temple: {
          bg: "#FAF6F0",
          warm: "#F5EDE0",
          accent: "#E8D5B7",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        devanagari: ["'Noto Serif Devanagari'", "serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "shimmer": "shimmer 3s linear infinite",
        "mandala-rotate": "spin 40s linear infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-saffron": "linear-gradient(135deg, #FF7A00 0%, #FFBF00 100%)",
        "gradient-temple": "linear-gradient(180deg, #FAF6F0 0%, #FFF8F0 100%)",
        "gradient-hero": "linear-gradient(135deg, #2D0A00 0%, #6B1A00 50%, #2D0A00 100%)",
        "gradient-gold": "linear-gradient(90deg, #FFD12E, #FFBF00, #E8BF42, #FFBF00, #FFD12E)",
      },
      boxShadow: {
        "gold": "0 4px 30px rgba(255, 191, 0, 0.3)",
        "saffron": "0 4px 30px rgba(255, 122, 0, 0.3)",
        "luxury": "0 20px 60px rgba(0, 0, 0, 0.15), 0 4px 20px rgba(255, 191, 0, 0.15)",
        "card": "0 10px 40px rgba(0, 0, 0, 0.08), 0 2px 10px rgba(0, 0, 0, 0.05)",
        "glow": "0 0 40px rgba(255, 191, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
