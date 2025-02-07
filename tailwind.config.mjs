const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryGreen: "var(--primary-green)",
        primaryBrown: "var(--primary-brown)",
        secondaryGreen: "var(--secondary-green)",
        secondaryBrown: "var(--secondary-brown)",
        accentYellow: "var(--accent-yellow)",
        accentBlue: "var(--accent-blue)",
        neutralLight: "var(--neutral-light)",
        neutralGray: "var(--neutral-gray)",
        darkerGray: "var(--darker-gray)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};

export default config;
