<template>
    <section class="flex flex-wrap drop-shadow justify-between px-6 py-5 dark:text-white bg-indigo-100 dark:bg-gunmetal ">
        <PencilSquareIcon class="h-7 w-7" @click="setCategory()" />
        <div v-if="isDarkmode">
            <SunIcon class="h-7 w-7" @click="setLightMode()" />
        </div>
	    <div>
		    <h1 class="text-xl font-bold">
			    {{ title }}
		    </h1>
	    </div>
        <div v-if="!isDarkmode">
            <MoonIcon class="h-7 w-7" @click="setDarkMode()" />
        </div>
    </section>
</template>

<script>
import { PencilSquareIcon, MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

export default {
    name: 'TopNavigationBar',
	props : ['title'],
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