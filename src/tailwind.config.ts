import type { Config } from "tailwindcss";

export default {
    content: [
        "./app.vue",
        "./components/**/*.${vue,ts,js,html}",
        "./pages/**/*.{vue,ts,js,html}"
    ],
    theme: {
        fontFamily: {
            display: "Chakra Petch, Courier New, Courier, monospace"
        },
        fontSize: {
            xxl: "3rem",
            xl: "1.75rem",
            lg: "1.25rem",
            md: "1rem",
            sm: "0.85rem"
        },
        backgroundImage: {
            text: "url('~/assets/images/text.webp')",
            gradient: "url('~/assets/images/gradient.webp')",
            tile: "url('~/assets/images/tile.webp')"
        },
        extend: {
            colors: {
                dark: "hsla(228, 14%, 7%, 100%)",
                gray: "hsla(239, 26%, 89%, 100%)"
            }
        }
    },
    plugins: []
} satisfies Config;
