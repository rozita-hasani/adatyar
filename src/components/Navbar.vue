<template>
    <section class="flex flex-wrap justify-between flex-row-reverse mx-6 mb-5 dark:text-white">
        <UserCircleIconSolid v-if="route == 'profile'" class="h-10 w-10" @click="showProfile()" />
        <UserCircleIcon v-else class="h-10 w-10" @click="showProfile()" />

        <ClipboardDocumentCheckIconSolid v-if="route == 'habit-list'" class="h-10 w-10" @click="showHabitList()" />
        <ClipboardDocumentCheckIcon v-else class="h-10 w-10" @click="showHabitList()" />

        <CalendarDaysIconSolid v-if="route == 'weekly-habit'" class="h-10 w-10" @click="showWeeklyHabit()" />
        <CalendarDaysIcon v-else class="h-10 w-10" @click="showWeeklyHabit()" />

        <ClockIconSolid v-if="route == 'history'" class="h-10 w-10" @click="showHistory()" />
        <ClockIcon v-else class="h-10 w-10" @click="showHistory()" />
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
            route: null
        }
    },
    components: {
        UserCircleIcon, ClockIcon, CalendarDaysIcon, ClipboardDocumentCheckIcon,
        ClockIconSolid, CalendarDaysIconSolid, ClipboardDocumentCheckIconSolid, UserCircleIconSolid
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