/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}", // ✅ Add this line
  ],

  theme: {
    screens: {
      sm: "600px", // phone
      md: "768px", // tab
      lg: "1024px", // tab
      xl: "1200px",
      "2xl": "1568px",
    },
    extend: {
      colors: {
        // background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#FFFFFF",
        "White-700": "#4D4D4D",
        "background": "#F5F7FA",
        "black-text": "#2D2D34",
        "main-text": "#1A1A1A",
        primary: "#6C63FF",
        subtext: "#596780",
        info: "#4588F7",
        success: "#42CD75",
        "success-89": "#3EB489",
        error: "#EF4444",
        "text-color": "#757575",
        "secondary-400": "#596780",
        "neutral-n700": "#243757",
        "neutral-n600": "#354764",
        "neutral-primary-500": "#6B7280"
      },
      boxShadow: {
        'auth': '0 4px 12px #0000000A',
      },
    },
  },
  important: true,
  plugins: [
  ],
};
