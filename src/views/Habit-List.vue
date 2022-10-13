<template>
    <div class="bg-latte flex flex-col text-center h-vh text-silver dark:bg-gunmetal">
        <section class="mx-6 mt-5 flex flex-wrap justify-between dark:text-white">
            <PencilSquareIcon class="h-10 w-10" @click="setCategory()" />
            <div v-if="isDarkmode">
                <SunIcon class="h-10 w-10" @click="setLightMode()" />
            </div>
            <div v-if="!isDarkmode">
                <MoonIcon class="h-10 w-10" @click="setDarkMode()" />
            </div>
        </section>
        <p class="text-silver font-bold tracking-wide shadow-md py-2 bg-white mx-16 rounded-3xl z-10 relative top-5 dark:bg-silver dark:text-white">لیست عادت های امروز</p>
        <div class="habit-list bg-macaroni mx-6 rounded-3xl shadow-md font-bold text-silver px-7 pt-10 pb-5 flex flex-col items-center dark:bg-charcoal mb-5 h-full overflow-y-auto overflow-x-hidden">
            <section dir="rtl" v-for="habit in todayHabits" :key="habit.id" :class="habit.color" class="flex justify-between items-center mx-6 mt-3 w-full p-2 rounded-2xl shadow-md text-center font-semibold tracking-wide">
                <div class="flex items-center">
                    <vue-feather :type="habit.icon" class="mx-2"></vue-feather>
                    <div class="mr-5 text-right">
                        <p class="">{{habit.title}}</p>
                        <p class="font-normal text-sm">{{habit.description}}</p>
                    </div>
                </div>
                <input v-model="doneHabit[habit.id]" @change="trackHabit()" type="checkbox" class="appearance-none h-7 w-7 rounded-full pb-1 pr-2 bg-white border-blush checked:bg-blush checked:before:content-['✓'] checked:text-white text-xl border dark:text-charcoal ml-2"/>
            </section>
        </div>
        <section class="mx-6 mb-5 flex flex-wrap justify-between flex-row-reverse dark:text-white">
            <UserCircleIcon class="h-10 w-10" @click="goProfile()" />
            <ClipboardDocumentCheckIcon class="h-10 w-10"/>
            <CalendarDaysIcon class="h-10 w-10" @click="goWeeklyHabit()"/>
            <ClockIcon class="h-10 w-10" @click="goHistory()"/>
        </section>
    </div>
</template>

<script>
import { PencilSquareIcon, MoonIcon, SunIcon, ClockIcon, CalendarDaysIcon, CameraIcon, UserIcon, EnvelopeIcon, UserCircleIcon } from '@heroicons/vue/24/outline'
import { ClipboardDocumentCheckIcon } from '@heroicons/vue/24/solid'

import DataStore from '../DataStore.js'

export default {
    name: 'Habit-List',
    data() {
        return {
            isDarkmode: false,
            NameIsEditable: false,
            EmailIsEditable: false,
            habits: null,
            daysName: ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],
            today : new Date(),
            todayName: '',
            todayHabits: null,
            todayDate : new Date().toISOString().split("T")[0],
            doneHabit: []
        }
    },
    components: {
        UserCircleIcon, PencilSquareIcon, MoonIcon, SunIcon, ClockIcon, CalendarDaysIcon, ClipboardDocumentCheckIcon, CameraIcon, UserIcon, EnvelopeIcon
    },
    methods: {
        setCategory() {
            this.$router.push(`/Category`);
        },
        setDarkMode() {
            this.isDarkmode = true;
            document.body.classList.toggle('dark')
        },
        setLightMode() {
            this.isDarkmode = false;
            document.body.classList.remove('dark')
        },
        openNameModal() {
            this.NameIsEditable = true
        },
        closeNameModal(){
            this.NameIsEditable = false
        },
        openEmailModal() {
            this.EmailIsEditable = true
        },
        closeEmailModal(){
            this.EmailIsEditable = false
        },
        goProfile() {
            this.$router.push(`/Profile`);
        },
        goWeeklyHabit() {
            this.$router.push(`/Weekly-Habit`);
        },
        goHistory() {
            this.$router.push(`/History`);
        },
        loadHabits(){
            this.habits=DataStore.getHabits()
        },
        getToday(){
            this.todayName = this.daysName[this.today.getDay()]
        },
        showTodayHabit(){
            this.todayHabits = DataStore.getHabits().filter(a=>a.interval.indexOf(this.todayName) >= 0)
        },
        trackHabit(){
            var todayTracker = Object.entries(this.doneHabit).filter(i=>i[1]).map(i=>i[0]);
            DataStore.saveTracker(this.todayDate, todayTracker)
        },
    },
    mounted(){
        this.loadHabits();
        this.getToday();
        this.showTodayHabit();
        var todayTracker = DataStore.getTracker(this.todayDate);
        for(var item of todayTracker) {
        this.doneHabit[item] = true;
        }
    }
}
</script>