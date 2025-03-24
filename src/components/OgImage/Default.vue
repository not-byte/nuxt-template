<script setup lang="ts">
const props = withDefaults(
    defineProps<{ title?: string; description?: string }>(),
    {
        title: "nuxt-template",
        description: "description"
    }
);

const title = computed(() => (props.title || "").slice(0, 60));
const description = computed(() => (props.description || "").slice(0, 150));
</script>

<style scoped>
@font-face {
    font-family: "Chakra Petch";
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: url("~/assets/fonts/chakra-petch-v11-latin_latin-ext-regular.woff2")
        format("woff2");
}

@font-face {
    font-family: "Chakra Petch";
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src: url("~/assets/fonts/chakra-petch-v11-latin_latin-ext-700.woff2")
        format("woff2");
}
</style>

<template>
    <aside
        style="font-family: Chakra Petch"
        class="bg-dark bg-tile bg-repeat bg-auto bg-blend-overlay"
    >
        <section
            class="w-[640px] h-[360px] p-[40px] bg-gradient bg-cover bg-center font-display flex flex-col justify-end"
        >
            <img width="300px" src="/assets/images/og-image.png" />
            <h1 v-if="title" class="text-[70px] font-semibold">
                <span class="bg-text bg-cover bg-clip-text text-transparent">
                    {{ title }}
                </span>
            </h1>
            <p v-if="description" class="text-[20px] text-white">
                created by notbyte team
                <!-- {{ description }} -->
            </p>
        </section>
    </aside>
</template>
