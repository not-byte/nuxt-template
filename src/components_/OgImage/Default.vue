<script setup lang="ts">
const props = withDefaults(
    defineProps<{ title?: string; description?: string }>(),
    {
        title: "title",
        description: "description"
    }
);

const title = computed(() => (props.title || "").split(" · ")[0].slice(0, 60));
const description = computed(() => (props.description || "").slice(0, 210));
</script>

<style scoped lang="css">
.test {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAQMAAAAB/jzhAAAABlBMVEVHcEz///+flKJDAAAAAnRSTlMAgJsrThgAAAAWSURBVAjXY2BgYOBhGCTE/////4AJAI9hCUMKPL8IAAAAAElFTkSuQmCC);
    background-repeat: repeat;
    background-blend-mode: overlay;
    background-size: 61px 61px;
}
</style>

<template>
    <aside class="w-full h-full bg-[#0f1014] test">
        <section
            class="w-full h-full flex flex-col justify-end p-[4rem] bg-cover bg-center text-white"
        >
            <h1 v-if="title" class="text-[8rem] -mb-4 font-semibold">
                {{ title }}
            </h1>
            <p v-if="description" class="text-[2rem] -mb-4">
                {{ description }}
            </p>
        </section>
    </aside>
</template>
