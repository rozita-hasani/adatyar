<template>
    <div class="flex flex-col text-center h-vh bg-stone-200 text-silver dark:bg-gunmetal">
        <TopNavbar :title='"لیست عادت ها"' />
        <section class="flex flex-col items-center h-full mx-6 pt-5 pb-5 overflow-y-auto overflow-x-hidden bg-white text-silver dark:bg-charcoal dark:text-white mt-5 py-5 rounded-3xl shadow-md">
            <div class="month flex items-center mb-5">
                <ChevronLeftIcon class="h-5 w-5" @click="showNextWeek()"/>
                <span class="text-xl font-bold mx-24">{{ monthCalendar.join(' - ') }}</span>
                <ChevronRightIcon class="h-5 w-5" @click="showLastWeek()"/>
            </div>
            <div class="days flex flex-row-reverse mb-5 items-center">
                <section class="flex flex-col text-center items-center" v-for="(day, name) in weekDays" :key="name"
                :class="{ 'bg-avocado rounded-lg': day.weekDayEnName == this.selectedDay }">
                    <span @click="changeCurrentHabits(day.weekDayEnName, day.date)"
                        :class="{ 'bg-white dark:bg-gunmetal': day.weekDayEnName == this.selectedDay, 'bg-stone-200 dark:bg-gunmetal': day.weekDayEnName != this.selectedDay }"
                        class="flex items-center justify-center font-bold text-lg rounded-lg w-9 h-9 m-1 pt-1 ">{{ en2fa(day.monthDay) }}</span>
                    <div dir="rtl" :class="{ 'text-white': day.weekDayEnName == this.selectedDay }" class="text-ss mx-1 mb-1 "> {{ day.weekDayName }}</div>
                </section>
            </div>
            <div class="habit-day flex flex-wrap flex-row-reverse justify-center items-center dark: text-silver ">
                <section dir="rtl" v-for="habit in todayHabits" :key="habit.id" :class="habit.color"
                    class="flex flex-col items-center text-center w-32 min-h-48 rounded-2xl m-2 p-4 shadow-md font-semibold tracking-wide">
                    <span class="w-14 h-14 border-4 border-silver bg-white rounded-full pt-2 mb-2 dark:bg-gunmetal dark:text-white dark:border-white">
                        <vue-feather :type="habit.icon" class="w-8"></vue-feather>
                    </span>
                    <div class="mb-4">
                        <p class="text-sm mb-2">{{ habit.title }}</p>
                        <p class="font-normal text-xs">{{ habit.description }}</p>
                    </div>
                    <div class="flex flex-col mx-2 font-semibold text-xs shadow-md">
                        <span v-if="doneHabit[habit.id]" class="bg-avocado text-white p-2 w-24 rounded-lg">انجام شده</span>
                        <span v-if="!doneHabit[habit.id]" class="bg-white p-2 w-24 rounded-lg dark:bg-gunmetal dark:text-white">انجام نشده</span>
                    </div>
                </section>
            </div>
        </section>
        <Navbar />
    </div>
</template>

<script>
import { CameraIcon, UserIcon, EnvelopeIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import persianDate from 'persian-date'
import DataStore from '../datastore.js'
import TopNavbar from '../components/Top-Navbar.vue'
import Navbar from '../components/Navbar.vue'
import { weekdays } from '../data.js'

export default {
    name: 'Habit-List',
    data() {
        return {
            todayHabits: null,
            weekDays: weekdays,
            doneHabit: [],
            monthCalendar: [],
            currentWeekDay: new persianDate(),
            selectedDay: null,
            selectedDate: null
        }
    },
    components: {
        CameraIcon, UserIcon, EnvelopeIcon, ChevronLeftIcon, ChevronRightIcon, Navbar, TopNavbar
    },
    methods: {
        showCurrentHabits() {
            this.todayHabits = DataStore.getHabits().filter(a => a.interval.indexOf(this.selectedDay) >= 0);
        },
        showWeekDays() {
            var todayNumber = this.currentWeekDay.days();
            var firstWeekDay = this.currentWeekDay.subtract('days', todayNumber - 1);

            var currentWeek = [];
            var monthNames = [];
            for (var i = 0; i <= 6; i++) {
                var firstDay = firstWeekDay.add('days', i);
                var currentDate = {
                    weekDay: firstDay.days(), //which day of week
                    monthDay: firstDay.date(), //which day of month
                    monthName: firstDay.toLocale('fa').format('MMMM'), // آیان
                    weekDayName: firstDay.toLocale('fa').format('dddd'), //  شنبه
                    weekDayEnName: firstDay.toLocale('en').format('dddd').toUpperCase(), // SATURDAY
                    date: firstDay.toCalendar('gregorian').format('YYYY-MM-DD') // 2022-11-12
                }
                currentWeek.push(currentDate)
                if (monthNames.indexOf(currentDate.monthName) == -1) {
                    monthNames.push(currentDate.monthName);
                }
            }
            this.monthCalendar = monthNames;
            this.weekDays = currentWeek;
        },
        showLastWeek() {
            this.currentWeekDay = this.currentWeekDay.subtract("days", 7);
            this.showWeekDays();
        },
        showNextWeek() {
            this.currentWeekDay = this.currentWeekDay.add("days", 7);
            this.showWeekDays();
        },
        showDayTracker() {
            this.doneHabit = [];
            var todayTracker = DataStore.getTracker(this.selectedDate);
            for (var item of todayTracker) {
                this.doneHabit[item] = true;
            }
        },
        changeCurrentHabits(selectedDayName, date) {
            this.selectedDay = selectedDayName;
            this.showCurrentHabits();
            this.selectedDate = date;
            this.showDayTracker();
        },
    },
    mounted() {
        this.selectedDay = new Date().toLocaleDateString("en-US", { weekday: 'long' }).toUpperCase();
        this.showCurrentHabits();

        this.showWeekDays();

        this.selectedDate = new Date().toISOString().split("T")[0];
        this.showDayTracker();
    }
}
</script>