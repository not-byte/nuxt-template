export default {
    nuxtSiteConfig: {
        name: "Szablon NuxtJS",
        description: "Najbystrzejszy sposób na pracę z aplikacjami NuxtJS"
    },
    components: {
        footer: {
            github: "Repozytorium GitHub"
        },
        icons: {
            typescript: "Ikona języka TypeScript",
            nuxt: "Ikonka frameworka NuxtJS",
            tailwindcss: "Ikonka biblioteki TailwindCSS",
            docker: "Ikonka środowiska Docker"
        }
    },
    pages: {
        index: {
            title: "Szablon NuxtJS",
            description:
                "Poznaj nasz szablon dla NuxtJS - open-sourcowego frameworka, którzy pozwala na intulicyjne tworzenie full-stack aplikacji webowych, wydajnych i gotowych na produkcję.",
            content: {
                header: "Najbystrzejszy sposób na {br} tworzenie {link}",
                link: "aplikacji NuxtJS"
            }
        },
        about: {
            title: "O projekcie",
            description: "Szczegóły projektu szablonu NuxtJS",
            content: {}
        }
    }
} satisfies Locale;
