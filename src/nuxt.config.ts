export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: {
        enabled: true,
        timeline: {
            enabled: true
        }
    },
    modules: [
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
            url: "https://nuxt.notbyte.com/",
            prefix: "/"
        }
    },
    app: {
        baseURL: process.env.NUXT_PUBLIC_PREFIX || "/",
        buildAssetsDir: "/",
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
        allow: ["/"]
    },
    ogImage: {
        defaults: {
            cacheMaxAgeSeconds: 60 * 60 * 24 * 7
        }
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
