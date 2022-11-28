<template>
    <section class="flex flex-wrap justify-between drop-shadow flex-row-reverse px-6 py-5 dark:text-white ">
        <ClipboardDocumentCheckIconSolid v-if="route == 'habit-list'" :class=iconClassSize @click="showHabitList()" />
        <ClipboardDocumentCheckIcon v-else :class=iconClassSize @click="showHabitList()" />

        <CalendarDaysIconSolid v-if="route == 'weekly-habit'" :class=iconClassSize   @click="showWeeklyHabit()" />
        <CalendarDaysIcon v-else :class=iconClassSize @click="showWeeklyHabit()" />

        <ClockIconSolid v-if="route == 'history'" :class=iconClassSize @click="showHistory()" />
        <ClockIcon v-else :class=iconClassSize @click="showHistory()" />
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
	        size : 9
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
            this.$router.push(`/habit-list`);
        },
        showWeeklyHabit() {
            this.$router.push(`/weekly-habit`);
        },
        showHistory() {
            this.$router.push(`/history`);
        },
    },
    mounted() {
        this.route = this.$route.path.substring(1);
    }
};
</script>