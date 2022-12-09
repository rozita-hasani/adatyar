<template>
    <section class="flex flex-wrap justify-between items-center drop-shadow flex-row-reverse px-6 py-5 dark:text-white fixed bottom-0 left-0 right-0 h-[65px] bg-stone-200 bg-opacity-60 dark:bg-[#31364299] dark:bg-opacity-60">
        <ClipboardDocumentCheckIconSolid v-if="route == 'today-habits'" :class=iconClassSize @click="showHabitList()" />
        <ClipboardDocumentCheckIcon v-else :class=iconClassSize @click="showHabitList()" />

        <CalendarDaysIconSolid v-if="route == 'habits-list'" :class=iconClassSize   @click="showHabitsList()" />
        <CalendarDaysIcon v-else :class=iconClassSize @click="showHabitsList()" />

        <ClockIconSolid v-if="route == 'calendar'" :class=iconClassSize @click="showCalendar()" />
        <ClockIcon v-else :class=iconClassSize @click="showCalendar()" />
    </section>
</template>

<script>
import { CalendarDaysIcon, ClipboardDocumentCheckIcon, ClockIcon } from '@heroicons/vue/24/outline';
import ClockIconSolid from '@heroicons/vue/24/solid/ClockIcon';
import CalendarDaysIconSolid from '@heroicons/vue/24/solid/CalendarDaysIcon';
import ClipboardDocumentCheckIconSolid from '@heroicons/vue/24/solid/ClipboardDocumentCheckIcon';

export default {
    name: 'NavigationBar',
    data() {
        return {
            route: null,
	        size : 8
        }
    },
    components: {
        ClockIcon, CalendarDaysIcon, ClipboardDocumentCheckIcon,
        ClockIconSolid, CalendarDaysIconSolid, ClipboardDocumentCheckIconSolid
    },
	computed : {
		iconClassSize() {
			return `h-${this.size} w-${this.size}`;
		}
	},
    methods: {
        showHabitList() {
            this.$router.push(`/today-habits`);
        },
        showHabitsList() {
            this.$router.push(`/habits-list`);
        },
        showCalendar() {
            this.$router.push(`/calendar`);
        },
    },
    mounted() {
        this.route = this.$route.path.substring(1);
    }
};
</script>