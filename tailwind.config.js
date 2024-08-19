/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
            },
            colors: {
                primary: "#028174",
                secondary: "#0AB68B",
                tertiary: "#92DE8B",
                quaternary: "#FFE3B3",
            },
            fontFamily: {
                sans: ["JetBrains Mono", "sans-serif"],
            },
        },
    },
    plugins: [],
};