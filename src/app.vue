<script setup lang="ts">
const { description, image, link, name, robots, title, url } = useSiteData();

// TODO
// defineOgImage();

useHeadSafe({
    link,
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1",
    meta: [
        {
            name: "theme-color",
            content: "currentColor"
        },
        {
            // @ts-ignore
            "http-equiv": "X-UA-Compatible",
            content: "IE=edge,chrome=1"
        }
    ]
});

useSeoMeta({
    author: name,
    ogUrl: url,
    ogSiteName: name,
    title,
    ogTitle: title,
    twitterTitle: title,
    titleTemplate: (titleChunk) => (titleChunk ? `${titleChunk}` : `${name}`),
    description: description,
    ogDescription: description,
    twitterDescription: description,
    ogImage: image(),
    twitterImage: image(),
    twitterCard: "summary",
    robots: robots()
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
