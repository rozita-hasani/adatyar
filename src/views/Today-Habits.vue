<template>
    <div class="flex flex-col text-center h-vh bg-stone-200 text-silver dark:bg-gunmetal">
        <Toolbar :title="'عادت های امروز'"/>
        <div class="h-vh mx-6 flex flex-col justify-center">
        <div class="habit-list flex flex-col items-center bg-white text-silver w-full h-full px-5 shadow-md dark:bg-charcoal pt-2 pb-5 my-22 rounded-3xl overflow-y-auto overflow-x-hidden">
            <section dir="rtl" v-for="habit in todayHabits" :key="habit.id" :class="habit.color"
                class="flex justify-between items-center text-center w-full mt-3 p-2 rounded-2xl shadow-md font-semibold text-sm tracking-wide">
                <div class="flex items-center">
                    <vue-feather :type="habit.icon" class="mx-2"></vue-feather>
                    <div class="mr-5 text-right">
                        <p class="">{{ habit.title }}</p>
                        <p class="font-normal text-sm">{{ habit.description }}</p>
                    </div>
                </div>
                <input v-model="doneHabit[habit.id]" @change="trackHabit()" type="checkbox"
                    class="appearance-none h-7 w-7 rounded-full pb-1 pr-2 text-xl border ml-2 border-avocado checked:bg-avocado dark:bg-charcoal dark:checked:bg-avocado" />
            </section>
        </div>
        </div>
        <Navbar/>
    </div>
</template>

<script>
import { CameraIcon, UserIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import Toolbar from '../components/Toolbar.vue'
import Navbar from '../components/Navbar.vue'
import DataStore from '../datastore.js'


export default {
    name: 'Today-Habits',
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
        CameraIcon, UserIcon, EnvelopeIcon, Navbar, Toolbar
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