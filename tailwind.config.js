// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        "80pt": ["80px", { lineHeight: "100%" }], // Header 1 | Poppins Semi-Bold 80pt
        "48pt": ["48px", { lineHeight: "100%" }], // Header 2 | Poppins Medium 48pt
        "34pt": ["34px", { lineHeight: "100%" }], // Header 3 | Poppins Medium 34pt
        "32pt": ["32px", { lineHeight: "151%" }], // Sub-header 1 | Poppins Medium 32pt
        "40pt": ["40px", { lineHeight: "156%" }], // Sub-header 2 | Poppins Semi-Bold 40pt
        "36pt": ["36px", { lineHeight: "137%" }], // Sub-header 3 | Open Sans Regular 36pt
        "24pt": ["24px", { lineHeight: "137%" }], // Body 1 | Open Sans Regular 24pt
        "16pt": ["16px", { lineHeight: "137%" }], // Caption | Open Sans Italic 16pt
      },
      fontWeight: {
        400: 400, // Regular
        500: 500, // Medium
        600: 600, // Semi-Bold
        700: 700, // Bold
      },
    },
  },
  plugins: [],
};
