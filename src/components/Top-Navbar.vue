<template>
    <section class="flex flex-wrap items-center drop-shadow justify-between px-6 py-5 text-white bg-yellow-green">
        <PencilIcon class="h-5 w-5" @click="setCategory()" />
        <div>
		    <h1 class="text-xl font-bold">{{ title }}</h1>
	    </div>
        <div v-if="isDarkmode">
            <SunIcon class="h-7 w-7" @click="toggleDarkMode()" />
        </div>
        <div v-if="!isDarkmode">
            <MoonIcon class="h-7 w-7" @click="toggleDarkMode()" />
        </div>
    </section>
</template>

<script>
import { PencilIcon, MoonIcon, SunIcon } from '@heroicons/vue/24/outline'
import { getMemoedVNodeCall } from '@vue/compiler-core';
import DataStore from '../datastore.js'

export default {
    name: 'TopNavigationBar',
	props : ['title'],
    data() {
        return {
            isDarkmode : DataStore.getMode()
        }
    },
    components: {
        PencilIcon,
        MoonIcon,
        SunIcon
    },
    methods: {
        setCategory() {
            this.$router.push(`/category`);
        },
        toggleDarkMode(){
            document.body.classList.toggle('dark');
            this.isDarkmode =! this.isDarkmode;
            DataStore.saveMode(this.isDarkmode)
        }
    },
    mounted(){
        if (this.isDarkmode) {
            document.body.classList.add('dark');
        }
    }
}
</script>