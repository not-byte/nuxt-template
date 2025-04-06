<script setup lang="ts">
import Docker from "@/components/Icon/Docker.vue";
import Nuxt from "@/components/Icon/Nuxt.vue";
import TailwindCSS from "@/components/Icon/TailwindCSS.vue";
import TypeScript from "@/components/Icon/TypeScript.vue";

const icons = [
    {
        name: "TypeScript",
        component: TypeScript,
        link: new URL("https://www.typescriptlang.org/")
    },
    {
        name: "Nuxt",
        component: Nuxt,
        link: new URL("https://nuxt.com/")
    },
    {
        name: "TailwindCSS",
        component: TailwindCSS,
        link: new URL("https://tailwindcss.com/")
    },
    {
        name: "Docker",
        component: Docker,
        link: new URL("https://www.docker.com/")
    }
] satisfies Icons;
</script>

<template>
    <ul class="grid grid-flow-col place-content-center gap-4 px-1 py-1">
        <li v-for="{ name, link, component } in icons" :key="name">
            <NuxtLink
                :title="$t(`components.icons.${name.toLowerCase()}`)"
                :to="link"
                target="_blank"
                external
                no-rel
            >
                <component :is="component" class="w-10 h-10 fill-white" />
            </NuxtLink>
        </li>
    </ul>
</template>
