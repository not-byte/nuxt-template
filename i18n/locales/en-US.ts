export default {
    nuxtSiteConfig: {
        name: "NuxtJS template",
        description: "The smartest way to setup and develop NuxtJS apps"
    },
    components: {
        footer: {
            github: "GitHub Repository"
        },
        icons: {
            typescript: "Icon of TypeScript language",
            nuxt: "Icon of NuxtJS framework",
            tailwindcss: "Icon of TailwindCSS library",
            docker: "Icon of Docker enviroment"
        }
    },
    pages: {
        index: {
            title: "NuxtJS template",
            description:
                "Discover our template for NuxtJS - an open source framework that makes web development intuitive and powerful. Create performant and production-grade full-stack web apps and websites with confidence.",
            content: {
                header: "The smartest way to setup {br} and develop {link}",
                link: "NuxtJS apps"
            }
        },
        about: {
            title: "About",
            description: "About the project of NuxtJS template",
            content: {}
        }
    }
} satisfies Locale;
