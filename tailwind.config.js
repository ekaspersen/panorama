/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        /*Colors | extend ->BackgroundImage*/
        colors: {
            primary_clr: {
                DEFAULT: "#081F31",
                primaryDark: "#04101A",
                menuBg: "#0F3A5C",
                dark: "#000",
                light: "#fff",
            },
            secondary: {
                default: "#D4D0BA",
            },
        },
        extend: {
            backgroundImage: {
                "gradient-radial":
                    "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.66) 0%, rgba(0, 0, 0, 0) 100%)",
                "fade-out-hero-gradient":
                    "linear-gradient(90deg, #000 33.33%, rgba(0, 0, 0, 0) 100%);",
            },
        },
    },
    plugins: [],
};
