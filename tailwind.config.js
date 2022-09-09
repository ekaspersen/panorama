/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        colors: {
            primary_clr: {
                DEFAULT: "#0C314A",
                dark: "#081F31",
            },
            secondary: {
                default: "#D4D0BA",
            },
            gradient: {
                home_logo_shadow:
                    "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.66) 0%, rgba(0, 0, 0, 0) 100%)",
            },
        },
        extend: {
            backgroundImage: {
                "gradient-radial":
                    "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.66) 0%, rgba(0, 0, 0, 0) 100%)",
            },
        },
    },
    plugins: [],
};
