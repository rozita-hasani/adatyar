<template>
    <div class="flex flex-col text-center h-vh bg-latte text-silver dark:bg-gunmetal">
        <TopNavbar :title="'عادات های امروز'"/>
        <div class="habit-list flex flex-col  items-center bg-white text-silver   p-5  shadow-md font-bold h-full overflow-y-auto overflow-x-hidden dark:bg-charcoal">
            <section dir="rtl" v-for="habit in todayHabits" :key="habit.id" :class="habit.color"
                class="flex justify-between items-center text-center w-full mx-6 mt-3 p-2 rounded-2xl shadow-md font-semibold tracking-wide">
                <div class="flex items-center">
                    <vue-feather :type="habit.icon" class="mx-2"></vue-feather>
                    <div class="mr-5 text-right">
                        <p class="">{{ habit.title }}</p>
                        <p class="font-normal text-sm">{{ habit.description }}</p>
                    </div>
                </div>
                <input v-model="doneHabit[habit.id]" @change="trackHabit()" type="checkbox"
                    class="appearance-none h-7 w-7 rounded-full pb-1 pr-2 text-xl border ml-2 bg-latte border-blush checked:bg-blush checked:text-latte dark:text-charcoal" />
            </section>
        </div>
        <Navbar/>
    </div>
</template>

<script>
import { CameraIcon, UserIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import TopNavbar from '../components/Top-Navbar.vue'
import Navbar from '../components/Navbar.vue'
import DataStore from '../DataStore.js'
import persianDate from 'persian-date'


export default {
    name: 'Habit-List',
    data() {
        return {
            habits: null,
            daysName: ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],
            todayLongDate: new Date(),
            todayName: '',
            todayHabits: null,
            todayShortDate: new Date().toISOString().split("T")[0],
            doneHabit: []
        }
    },
    components: {
        CameraIcon, UserIcon, EnvelopeIcon, Navbar, TopNavbar
    },
    methods: {
        loadHabits() {
            this.habits = DataStore.getHabits()
        },
        getToday() {
            this.todayName = this.daysName[this.todayLongDate.getDay()]
        },
        showTodayHabit() {
            this.todayHabits = DataStore.getHabits().filter(a => a.interval.indexOf(this.todayName) >= 0)
        },
        trackHabit() {
            var todayTracker = Object.entries(this.doneHabit).filter(i => i[1]).map(i => i[0]);
            DataStore.saveTracker(this.todayShortDate, todayTracker)
        },
    },
    mounted() {
        this.loadHabits();
        this.getToday();
        this.showTodayHabit();
        var todayTracker = DataStore.getTracker(this.todayShortDate);
        for (var item of todayTracker) {
            this.doneHabit[item] = true;
        }
    }
}
</script>