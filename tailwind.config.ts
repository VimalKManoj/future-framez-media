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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(68.54% 68.72% at 55.02% 31.46%,hsla(0,0%,85%,.08) 0,hsla(0,0%,55%,.02) 50%,hsla(0,0%,45%,0) 80%)",
      },
    },
  },
  plugins: [],
};
export default config;
