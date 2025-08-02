/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}", // ✅ Add this line
    ],

    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {
                DEFAULT: "100%",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1124px",
                '2xl': "1124px",
            },
        },
        extend: {
            colors: {
                foreground: "var(--foreground)",
                black: "#000000",
                white: "#FFFFFF",
                primary: "#FC004E",
                "subtext-f9": "#00E7F9",
                "subtext-AB": "#ABABAB",
                "subtext-E0": "#10CBE0"
            },
            boxShadow: {
                pinkGlow: '0px 4px 4px #FC004E',
                btnGlow: '2px 2px 10px 0px #00E7F9',
            },
        },
    },
    important: true,
    plugins: [],
};
