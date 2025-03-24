type Link = {
    href: string;
    type: string;
    rel: string;
    sizes?: string;
    media?: string;
};

export function useSiteData() {
    const config = useRuntimeConfig().public;
    const route = useRoute();
    const { t } = useI18n({ useScope: "global" });

    const page = (): string | undefined =>
        route.name?.toString().split("___")[0];

    const name = (): string => config.name;
    const url = (): string => config.url;

    const image = (): string => `/og-image.png`;

    const robots = (): string =>
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

    const description = (): string => t(`pages.${page()}.description`);
    const title = (): string => {
        const title = t(`pages.${page()}.title`);

        return title ? `${title} · ${name()}` : `${name()}`;
    };

    const link = (): Array<Link> => [
        {
            href: "/assets/icons/dark/favicon.ico",
            type: "image/x-icon",
            rel: "icon"
        },
        {
            href: "/assets/icons/dark/favicon-32x32.png",
            type: "image/png",
            sizes: "32x32",
            rel: "icon"
        },
        {
            href: "/assets/icons/dark/favicon-16x16.png",
            type: "image/png",
            sizes: "16x16",
            rel: "icon"
        },
        {
            href: "/assets/icons/dark/apple-touch-icon.png",
            type: "image/png",
            sizes: "180x180",
            rel: "apple-touch-icon"
        },
        {
            href: "/assets/icons/light/favicon.ico",
            type: "image/x-icon",
            media: "(prefers-color-scheme: dark)",
            rel: "icon"
        },
        {
            href: "/assets/icons/light/favicon-32x32.png",
            type: "image/png",
            sizes: "32x32",
            media: "(prefers-color-scheme: dark)",
            rel: "icon"
        },
        {
            href: "/assets/icons/light/favicon-16x16.png",
            type: "image/png",
            sizes: "16x16",
            media: "(prefers-color-scheme: dark)",
            rel: "icon"
        },
        {
            href: "/assets/icons/light/apple-touch-icon.png",
            type: "image/png",
            sizes: "180x180",
            media: "(prefers-color-scheme: dark)",
            rel: "apple-touch-icon"
        }
    ];

    return { description, image, link, name, robots, title, url };
}

export default useSiteData;
