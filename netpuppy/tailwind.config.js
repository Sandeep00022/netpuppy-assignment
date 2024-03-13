/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        miltonian: ["Miltonian", "sans-serif"],
        mirador: ["Mirador", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
