<template>
    <footer>
        <NuxtLink
            class="w-fit flex flex-row gap-1 items-center px-4 py-1 bg-white"
            :title="$t(`components.footer.github`)"
            to="https://github.com/not-byte/nuxt-template"
            target="_blank"
            external
            no-rel
        >
            <IconGitHub class="w-5 h-5 fill-dark z-10" />
            <span class="text-dark text-sm z-10 mt-[0.15rem]">
                {{ $t(`components.footer.github`) }}
            </span>
        </NuxtLink>
    </footer>
</template>
