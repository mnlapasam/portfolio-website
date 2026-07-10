import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#F8FAFC",
          elevated: "#F1F5F9",
          card: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#0F172A",
          muted: "#475569",
          faint: "#94A3B8",
        },
        accent: {
          DEFAULT: "#2563EB",
          bright: "#3B82F6",
          dim: "#E0F2FE",
          glow: "#22D3EE",
          navy: "#1E3A8A",
        },
        line: "rgba(15, 23, 42, 0.08)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "glass-sheen":
          "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.55) 100%)",
        "radial-glow":
          "radial-gradient(circle at center, rgba(37,99,235,0.12) 0%, rgba(37,99,235,0) 70%)",
        "accent-gradient": "linear-gradient(135deg, #2563EB 0%, #1E3A8A 100%)",
        "page-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.08), transparent), linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)",
      },
      boxShadow: {
        glass: "0 1px 1px rgba(255,255,255,0.8) inset, 0 20px 50px -20px rgba(15,23,42,0.14)",
        card: "0 1px 2px rgba(15,23,42,0.04), 0 12px 32px -12px rgba(15,23,42,0.10)",
        "card-hover": "0 1px 2px rgba(15,23,42,0.05), 0 24px 48px -16px rgba(15,23,42,0.18)",
        "glow-accent": "0 0 0 1px rgba(37,99,235,0.08), 0 20px 45px -12px rgba(37,99,235,0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
