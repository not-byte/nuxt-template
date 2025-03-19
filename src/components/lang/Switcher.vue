<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() =>
    locales.value.filter((i) => i.code !== locale.value).flatMap((i) => i.code)
);
</script>

<template>
    <ul class="w-fit flex flex-row gap-2">
        <li v-for="code in availableLocales" :key="code">
            <NuxtLink :to="switchLocalePath(code)">
                {{ code.toLocaleUpperCase() }}
            </NuxtLink>
        </li>
    </ul>
</template>
