<template>
    <div class="flex flex-col text-center h-vh bg-latte text-silver dark:bg-gunmetal">
        <TopNavbar :title="'نیم نگاه'" />
        <section
            class="flex flex-col items-center mt-5 mx-6 mb-5 pt-10 pb-5 rounded-3xl h-full shadow-md bg-white text-silver dark:bg-charcoal dark:text-white overflow-y-auto overflow-x-hidden">
            <div class="flex items-center mt-2 mb-5">
                <ChevronLeftIcon class="h-5 w-5" @click="showNextMonth()" />
                <span class="text-xl font-bold mx-24">{{ currentMonth.toLocale('fa').format('MMMM') }}</span>
                <ChevronRightIcon class="h-5 w-5" @click="showLastMonth()" />
            </div>
            <div class="flex flex-wrap flex-row-reverse mx-4 mb-7 dark:text-silver">
                <div v-for="item in days" :key="item.day">
                    <span @click="showHabits(item.habits)"
                        class="flex text-center items-center justify-center p-1 mr-1 my-1 rounded-lg w-9 h-9 text-gunmetal dark:text-white"
                        :class=calculateColorRange(item.progress)>{{ en2fa(item.day) }}</span>
                </div>
            </div>
            <div v-if="isVisible"
                class="absolute top-25 w-79 h-100 rounded-3xl bg-cream bg-opacity-50 dark:bg-gray900 dark:bg-opacity-80">
                <div class="w-66 top-36 right-0 left-0 mx-auto relative">
                    <div
                        class="flex flex-col items-end rounded-3xl shadow-md p-4 overflow-y-auto overflow-x-hidden bg-latte dark:bg-gunmetal">
                        <XMarkIcon @click="hideModal()" class="h-5 w-5 mb-2" />
                        <div class="flex items-center mb-1" v-for="item in habitsList" :key="item.id">
                            <span>{{ item.title }}</span>
                            <CheckCircleIcon class="h-6 w-6 mr-4 ml-2 text-done" v-if="item.isDone" />
                            <XCircleIcon class="h-6 w-6 mr-4 ml-2 text-notDone" v-if="!item.isDone" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col text-center justify-center items-end mt-36">
                <div class="text-ss pb-1">:پیشرفت عادت ها</div>
                <div class="flex flex-wrap justify-center flex-row-reverse">
                    <div v-for="item in scoreRange" :key="item.id"
                        class="flex flex-col items-center justify-center mr-1">
                        <label class="text-ss">{{ item.mask }}</label>
                        <span class="w-9 h-5 rounded-lg" :class="item.color"></span>
                    </div>
                </div>
            </div>
        </section>
        <Navbar />
    </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon, XCircleIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import persianDate from 'persian-date'

import DataStore from '../DataStore.js'
import TopNavbar from '../components/Top-Navbar.vue'
import Navbar from '../components/Navbar.vue'

export default {
    name: 'Habit-List',
    data() {
        return {
            currentMonth: new persianDate(),
            daysInMonth: null,
            days: [],
            habitsList: [],
            isVisible: false,
            scoreRange: [
                { "low": 0, "high": 0, "color": 'bg-latte dark:bg-gunmetal', "mask": "۰٪" },
                { "low": 1, "high": 20, "color": 'bg-per1', "mask": "٪۲۰-۱" },
                { "low": 21, "high": 40, "color": 'bg-per2', "mask": "٪۴۰-۲۱" },
                { "low": 41, "high": 60, "color": 'bg-per3', "mask": "٪۶۰-۴۱" },
                { "low": 61, "high": 80, "color": 'bg-per4', "mask": "٪۸۰-۶۱" },
                { "low": 81, "high": 100, "color": 'bg-per5', "mask": "٪۱۰۰-۸۱" }
            ]
        }
    },
    components: {
        ChevronLeftIcon, ChevronRightIcon, Navbar, XCircleIcon, CheckCircleIcon, XMarkIcon, TopNavbar
    },
    methods: {
        showCurrentMonth() {
            this.days = [];
            this.daysInMonth = this.currentMonth.daysInMonth();
            for (var i = 1; i <= this.daysInMonth; i++) {
                var day = i; //1
                var currentDate = this.currentMonth.clone().date(i); //1401-08-01
                var currentDateFormatted = currentDate.toLocale('en').toCalendar('gregorian').format('YYYY-MM-DD'); //2022-10-23 first day of month
                var currentTracker = DataStore.getTracker(currentDateFormatted); // ['1','4'] id of done habits
                var DayName = currentDate.toLocale('en').format('dddd').toUpperCase(); //SUNDAY
                var currentHabtis = DataStore.getHabits().filter(a => a.interval.indexOf(DayName) >= 0).map(i => { //habits
                    return {
                        id: i.id,
                        title: i.title,
                        isDone: currentTracker.indexOf(i.id.toString()) >= 0
                    };
                })

                var progress = (currentHabtis.filter(i => i.isDone).length / currentHabtis.length) * 100;

                this.days.push({
                    day: day,
                    date: currentDateFormatted,
                    faDate: currentDate.toCalendar('persian').format(),
                    habits: currentHabtis,
                    progress: progress,
                    name: DayName
                });
            }
        },
        showLastMonth() {
            this.currentMonth = this.currentMonth.subtract('months', 1);
            this.showCurrentMonth();
        },
        showNextMonth() {
            this.currentMonth = this.currentMonth.add('months', 1);
            this.showCurrentMonth();
        },
        showHabits(habitsDay) {
            this.isVisible = true;
            this.habitsList = habitsDay
        },
        hideModal() {
            this.isVisible = false
        },
        calculateColorRange(item) {
            for (let key of this.scoreRange) {
                if (item >= key.low && item <= key.high) {
                    return key.color
                }
            }
        }
    },
    mounted() {
        this.showCurrentMonth();


    }
}
</script>