/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        /*Colors | extend ->BackgroundImage*/
        colors: {
            primary_clr: {
                DEFAULT: "#081F31",
                primaryDark: "#040d14",
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
                    "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.1) 100%)",
                "fade-out-hero-gradient":
                    "linear-gradient(90deg, #040d14 33.33%, rgba(4, 16, 26, 0) 100%);",
                "fade-out-hero-gradient-top":
                    "linear-gradient(180deg, #040d14 33.33%, rgba(4, 16, 26, 0) 100%);",
            },
        },
    },
    plugins: [],
};
