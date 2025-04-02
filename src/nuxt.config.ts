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
            url: "https://nuxt.notbyte.com/"
        }
    },
    app: {
        baseURL: process.env.NUXT_PUBLIC_URL,
        rootAttrs: {
            id: "notbyte-root"
        },
        rootTag: "body",
        teleportAttrs: {
            id: "notbyte-teleports"
        },
        teleportTag: "aside"
    },
    ogImage: {
        defaults: {
            cacheMaxAgeSeconds: 60 * 60 * 24 * 7,
            fonts: ["Chakra Petch:400", "Chakra Petch:700"],
            component: "Default"
        },
        fonts: [
            {
                name: "Chakra Petch",
                weight: 400,
                path: "/fonts/chakra-petch-v11-latin_latin-ext-regular.woff"
            },
            {
                name: "Chakra Petch",
                weight: 700,
                path: "/fonts/chakra-petch-v11-latin_latin-ext-700.woff"
            }
        ]
    },
    i18n: {
        baseUrl: process.env.NUXT_PUBLIC_URL,
        bundle: {
            optimizeTranslationDirective: false
        },
        customRoutes: "page",
        defaultLocale: "en",
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: "notbyte-lang",
            redirectOn: "root"
        },
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
        strategy: "prefix_and_default"
    }
});
