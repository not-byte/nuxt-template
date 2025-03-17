<script setup lang="ts">
const { name, url } = useRuntimeConfig().public;
const { t } = useI18n({ useScope: "global" });
const page = useRoute().name?.toString().split("___")[0];

const title = () => {
    const title = t(`pages.${page}.title`);

    console.log(page);

    return title ? `${title} · ${name}` : `${name}`;
};
const description = () => t(`pages.${page}.description`);

useSeoMeta({
    ogUrl: url,
    ogSiteName: name,
    title,
    ogTitle: title,
    twitterTitle: title,
    titleTemplate: (titleChunk) => (titleChunk ? `${titleChunk}` : `${name}`),
    description: description,
    ogDescription: description,
    twitterDescription: description,
    ogImage: "[og:image]",
    twitterImage: "[twitter:image]",
    twitterCard: "summary"
});
</script>

<template>
    <NavigationSection />
    <slot />
    <FooterSection />
</template>
