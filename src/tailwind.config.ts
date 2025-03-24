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
            text: "linear-gradient(125deg, hsla(0, 85%, 64%, 1) 20%, hsla(281, 58%, 55%, 1) 50%, hsla(0, 85%, 64%, 1) 67%, hsla(14, 86%, 67%, 1) 100%)",
            gradient: "url('~/assets/images/gradient.webp')",
            tile: "url('~/assets/images/tile.webp')"
        },
        extend: {
            colors: {
                dark: "hsla(228, 14%, 7%, 1)",
                gray: "hsla(239, 26%, 89%, 1)"
            }
        }
    },
    plugins: []
} satisfies Config;
