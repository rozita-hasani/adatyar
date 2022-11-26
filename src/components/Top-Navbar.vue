<template>
    <section class="flex flex-wrap justify-between mx-6 mt-5 dark:text-white">
        <PencilSquareIcon class="h-10 w-10" @click="setCategory()" />
        <div v-if="isDarkmode">
            <SunIcon class="h-10 w-10" @click="setLightMode()" />
        </div>
        <div v-if="!isDarkmode">
            <MoonIcon class="h-10 w-10" @click="setDarkMode()" />
        </div>
    </section>
</template>

<script>
import { PencilSquareIcon, MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

export default {
    name: 'TopNavigationBar',
    data() {
        return {
            isDarkmode: false,
        }
    },
    components: {
        PencilSquareIcon,
        MoonIcon,
        SunIcon
    },
    methods: {
        setCategory() {
            this.$router.push(`/category`);
        },
        setDarkMode() {
            this.isDarkmode = true;
            document.body.classList.toggle('dark')
        },
        setLightMode() {
            this.isDarkmode = false;
            document.body.classList.remove('dark')
        },
    }
}
</script>