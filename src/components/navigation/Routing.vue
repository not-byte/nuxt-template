<script setup lang="ts">
const pages = new Array<string>("index", "about");
</script>

<template>
    <ul class="w-fit flex flex-row gap-2">
        <li v-for="page in pages" :key="page">
            <NuxtLinkLocale :to="page" :title="$t(`pages.${page}.title`)">
                {{ $t(`pages.${page}.title`) }}
            </NuxtLinkLocale>
        </li>
    </ul>
</template>
