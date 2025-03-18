type Page<Content extends { [key: string]: unknown }> = {
    title: string;
    description: string;
    content: Content;
};

type Locale = {
    nuxtSiteConfig: {
        name: string;
        description: string;
    };
    pages: {
        index: Page<{
            header: string;
            link: string;
        }>;
        about: Page<{}>;
    };
    components: {
        footer: {
            github: string;
        };
        icons: {
            [icon: string]: string;
        };
    };
};
