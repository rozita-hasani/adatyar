<template>
    <div class="bg-stone-200 flex flex-col text-center h-vh text-silver dark:bg-gunmetal">
        <section class="flex justify-between drop-shadow px-6 py-5 mb-5 text-white dark:text-white bg-yellow-green">
            <button @click="createHabit()">
                <vue-feather type="plus" class="h-6 w-6"></vue-feather>
            </button>
            <h1 class="text-xl font-bold">فهرست عادت ها</h1>
            <button @click="goBack()">
                <vue-feather type="x" class="h-6 w-6"></vue-feather>
            </button>
        </section>
        <div class="habits-list flex flex-col items-center h-90 rounded-3xl shadow-md font-bold mx-5 px-5 py-7 text-silver bg-white dark:bg-charcoal overflow-y-auto overflow-x-hidden">
            <section v-for="habit in habits" :key="habit.id" :class="habit.color"
                class="flex justify-between items-center mx-6 mt-3 p-2 w-full rounded-2xl shadow-md text-center font-semibold tracking-wide">
                <vue-feather type="trash-2" class="text-blush" @click="removeHabit(habit)"></vue-feather>
                <div class="flex justify-end items-center">
                    <p class="mr-5">{{ habit.title }}</p>
                    <vue-feather :type="habit.icon" class="mx-2"></vue-feather>
                </div>
            </section>
        </div>
        <button @click="showHabitList()" class="bg-avocado btn-category mt-8">مرحله بعد</button>
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
        },
        goBack() {
            this.$router.go(-1)
        },
    },
    mounted() {
        this.loadHabits();
    }
}
</script>