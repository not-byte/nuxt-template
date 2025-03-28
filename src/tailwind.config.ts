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
        extend: {
            backgroundImage: {
                text: "linear-gradient(125deg, var(--tw-gradient-stops))",
                gradient: "url('/images/gradient.webp')",
                tile: "url('data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAQMAAAAB/jzhAAAABlBMVEVHcEz///+flKJDAAAAAnRSTlMAgJsrThgAAAAWSURBVAjXY2BgYOBhGCTE/////4AJAI9hCUMKPL8IAAAAAElFTkSuQmCC')"
            },
            colors: {
                dark: "rgb(15, 15, 20)",
                gray: "rgb(219, 219, 235)",
                crimson: "rgb(241, 86, 86)",
                velvet: "rgb(163, 73, 206)",
                sunny: "rgb(243, 132, 97)"
            }
        }
    },
    plugins: []
} satisfies Config;
