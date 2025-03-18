<script setup lang="ts">
import Docker from "@/components/icon/Docker.vue";
import Nuxt from "@/components/icon/Nuxt.vue";
import TailwindCSS from "@/components/icon/TailwindCSS.vue";
import TypeScript from "@/components/icon/TypeScript.vue";

const icons = new Array<{ name: string; component: Component; link: URL }>(
    {
        name: "typescript",
        component: TypeScript,
        link: new URL("https://www.typescriptlang.org/")
    },
    {
        name: "nuxt",
        component: Nuxt,
        link: new URL("https://nuxt.com/")
    },
    {
        name: "tailwindcss",
        component: TailwindCSS,
        link: new URL("https://tailwindcss.com/")
    },
    {
        name: "docker",
        component: Docker,
        link: new URL("https://www.docker.com/")
    }
);
</script>

<template>
    <ul class="grid grid-flow-col place-content-center gap-4 px-1 py-1">
        <li v-for="{ name, link, component } in icons" :key="name">
            <NuxtLink
                :title="$t(`components.icons.${name}`)"
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
