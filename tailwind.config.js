/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-mobile": "url('../assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('../assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('../assets/home/background-home-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
