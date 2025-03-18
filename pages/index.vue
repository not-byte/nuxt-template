<template>
    <main class="flex-grow grid place-items-center overflow-x-hidden">
        <section class="min-w-48 max-w-2xl flex flex-col gap-4">
            <i18n-t
                tag="h1"
                keypath="pages.index.content.header"
                scope="global"
                class="text-center"
            >
                <template v-slot:br>
                    <br />
                </template>
                <template v-slot:link>
                    <NuxtLink>
                        <span
                            class="bg-text bg-cover bg-clip-text text-transparent"
                        >
                            {{ $t(`pages.index.content.link`) }}
                        </span>
                    </NuxtLink>
                </template>
            </i18n-t>
            <p class="text-center text-gray">
                {{ $t(`pages.index.description`) }}
            </p>
            <IconsGrid />
        </section>
    </main>
</template>
