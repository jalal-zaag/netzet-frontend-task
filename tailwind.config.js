/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}", // ✅ Add this line
    ],

    theme: {
        extend: {
            colors: {
                // background: "var(--background)",
                foreground: "var(--foreground)",
                white: "#FFFFFF",
                primary: "#FC004E",
                subtext: "#00E7F9",
                "subtext-2": "#ABABAB",
                "subtext-3": "#10CBE0"
            },
        },
    },
    important: true,
    plugins: [],
};
