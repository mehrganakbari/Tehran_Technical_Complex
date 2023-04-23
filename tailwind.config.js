/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
              xs: "400px",
              xs2: "515px",
              sm: "568px",
              md: "640px",
              lg: "768px",
              lg2: "850px",
              xl: "1024px",
              "2xl": "1280px",
              "3xl": "1536px",
            },
          },
    },
    plugins: [],
}