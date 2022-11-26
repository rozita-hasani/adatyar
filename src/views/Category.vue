<template>
    <div class="bg-latte flex flex-col text-center h-vh text-silver dark:bg-gunmetal">
        <p class="font-bold tracking-wide shadow-md rounded-3xl relative top-5 z-10 py-2 mt-14 mx-24 bg-white text-silver dark:bg-silver dark:text-white">فهرست عادت ها</p>
        <div class="habits-list flex flex-col items-center h-90 rounded-3xl shadow-md font-bold mx-6 px-7 pt-10 pb-5 text-silver bg-macaroni dark:bg-charcoal overflow-y-auto overflow-x-hidden">
            <section v-for="habit in habits" :key="habit.id" :class="habit.color" class="flex justify-between items-center mx-6 mt-3 p-2 w-full rounded-2xl shadow-md text-center font-semibold tracking-wide">
                <vue-feather type="trash-2" class="text-blush" @click="removeHabit(habit)"></vue-feather>
                <div class="flex justify-end items-center">
                    <p class="mr-5">{{ habit.title }}</p>
                    <vue-feather :type="habit.icon" class="mx-2"></vue-feather>
                </div>
            </section>
        </div>
        <button @click="suggestHabit()" class="bg-orange btn-category mt-8">انتخاب عادت های پیشنهادی</button>
        <button @click="createHabit()" class="bg-green btn-category mt-4">ساخت عادت اختصاصی</button>
        <button @click="showHabitList()" class="bg-blush btn-category mt-8">مشاهده برنامه</button>
    </div>
</template>

<script>
import DataStore from '../DataStore.js'

export default {
    name: 'Category',
    data() {
        return {
            habits: null,
        }
    },
    methods: {
        suggestHabit() {
            this.$router.push(`/category/suggestion`);
        },
        createHabit() {
            this.$router.push(`/category/creation`);
        },
        showHabitList() {
            this.$router.push(`/habit-list`);
        },
        loadHabits() {
            this.habits = DataStore.getHabits()
        },
        removeHabit(habit) {
            const index = this.habits.indexOf(habit);
            if (index > -1) {
                this.habits.splice(index, 1)
            }
            DataStore.saveHabits(this.habits);
        }
    },
    mounted() {
        this.loadHabits();
    }
}
</script>