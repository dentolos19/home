/** @type { import("tailwindcss").Config } */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "beach-date": "url('/beach-date.gif')",
        "city-lights": "url('/city-lights.gif')",
        "dark-forest": "url('/dark-forest.gif')",
        "futuristic-city": "url('/futuristic-city.gif')",
        "green-forest": "url('/green-forest.gif')",
        "idk-city": "url('/idk-city.gif')",
        "japanese-train": "url('/japanese-train.gif')",
        "mountainous-seas": "url('/mountainous-seas.gif')",
        "sea-sunset": "url('/sea-sunset.gif')",
      },
    },
  },
  plugins: [],
};