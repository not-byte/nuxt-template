<script setup lang="ts">
const { name, url } = useRuntimeConfig().public;
const { t } = useI18n({ useScope: "global" });
const page = useRoute().name?.toString().split("___")[0];

const title = () => {
    const title = t(`pages.${page}.title`);

    return title ? `${title} · ${name}` : `${name}`;
};
const description = () => t(`pages.${page}.description`);

useSeoMeta({
    robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
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
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
