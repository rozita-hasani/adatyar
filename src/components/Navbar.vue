<template>
    <section class="flex flex-wrap justify-between drop-shadow flex-row-reverse px-6 py-5 dark:text-white ">
<!--        <UserCircleIconSolid v-if="route == 'profile'" :class=iconClassSize @click="showProfile()" />-->
<!--        <UserCircleIcon v-else :class=iconClassSize @click="showProfile()" />-->

        <ClipboardDocumentCheckIconSolid v-if="route == 'habit-list'" :class=iconClassSize @click="showHabitList()" />
        <ClipboardDocumentCheckIcon v-else :class=iconClassSize @click="showHabitList()" />

        <CalendarDaysIconSolid v-if="route == 'weekly-habit'" :class=iconClassSize   @click="showWeeklyHabit()" />
        <CalendarDaysIcon v-else :class=iconClassSize @click="showWeeklyHabit()" />

        <ClockIconSolid v-if="route == 'history'" :class=iconClassSize @click="showHistory()" />
        <ClockIcon v-else :class=iconClassSize @click="showHistory()" />
    </section>
</template>

<script>
import { CalendarDaysIcon, ClipboardDocumentCheckIcon, UserCircleIcon, ClockIcon } from '@heroicons/vue/24/outline';
import ClockIconSolid from '@heroicons/vue/24/solid/ClockIcon';
import CalendarDaysIconSolid from '@heroicons/vue/24/solid/CalendarDaysIcon';
import ClipboardDocumentCheckIconSolid from '@heroicons/vue/24/solid/ClipboardDocumentCheckIcon';
import UserCircleIconSolid from '@heroicons/vue/24/solid/UserCircleIcon';

export default {
    name: 'NavigationBar',
    data() {
        return {
            route: null,
	        size : 9
        }
    },
    components: {
        UserCircleIcon, ClockIcon, CalendarDaysIcon, ClipboardDocumentCheckIcon,
        ClockIconSolid, CalendarDaysIconSolid, ClipboardDocumentCheckIconSolid, UserCircleIconSolid
    },
	computed : {
		iconClassSize() {
			return `h-${this.size} w-${this.size}`;
		}
	},
    methods: {
        showProfile() {
            this.$router.push(`/profile`);
        },
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