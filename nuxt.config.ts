const link = [
    {
        href: "/dark/favicon.ico",
        type: "image/x-icon",
        rel: "icon"
    },
    {
        href: "/dark/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
        rel: "icon"
    },
    {
        href: "/dark/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
        rel: "icon"
    },
    {
        href: "/dark/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
        rel: "apple-touch-icon"
    },
    {
        href: "/light/favicon.ico",
        type: "image/x-icon",
        media: "(prefers-color-scheme: dark)",
        rel: "icon"
    },
    {
        href: "/light/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
        media: "(prefers-color-scheme: dark)",
        rel: "icon"
    },
    {
        href: "/light/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
        media: "(prefers-color-scheme: dark)",
        rel: "icon"
    },
    {
        href: "/light/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
        media: "(prefers-color-scheme: dark)",
        rel: "apple-touch-icon"
    }
];

const meta = [
    {
        name: "author",
        content: "notbyte.com"
    },
    {
        name: "theme-color",
        content: "currentColor"
    },
    {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
    }
];

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: {
        enabled: true,
        timeline: {
            enabled: true
        }
    },
    modules: [
        "@nuxtjs/robots",
        "@nuxtjs/sitemap",
        "@nuxtjs/seo",
        "@nuxtjs/i18n",
        "@nuxtjs/tailwindcss",
        "@nuxt/eslint",
        "@nuxt/test-utils",
        "@nuxt/image"
    ],
    runtimeConfig: {
        public: {
            name: "notbyte",
            url: "https://notbyte.com/",
            prefix: "/"
        }
    },
    app: {
        baseURL: process.env.NUXT_PUBLIC_PREFIX || "/",
        buildAssetsDir: "/",
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            link: link,
            meta: meta
        },
        rootAttrs: {
            id: "notbyte-root"
        },
        rootTag: "body",
        teleportAttrs: {
            id: "notbyte-teleports"
        },
        teleportTag: "aside"
    },
    robots: {
        disallow: ["/about-us"]
    },
    i18n: {
        baseUrl: process.env.NUXT_PUBLIC_URL || "http://localhost:3000/",
        strategy: "prefix_and_default",
        defaultLocale: "en",
        locales: [
            {
                code: "en",
                name: "English",
                language: "en-US",
                file: "en-US.ts"
            },
            {
                code: "pl",
                name: "Polski",
                language: "pl-PL",
                file: "pl-PL.ts"
            }
        ],
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "notbyte-lang",
            redirectOn: "root"
        },
        customRoutes: "page"
    }
});
