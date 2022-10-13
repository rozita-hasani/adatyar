<template>
    <div class="bg-latte flex flex-col text-center h-vh text-silver dark:bg-gunmetal">
        <p class="text-silver font-bold tracking-wide shadow-md py-2 mt-14 bg-white mx-28 rounded-3xl z-10 relative top-5 dark:bg-silver dark:text-white">فهرست عادت ها</p>
        <div class="habit-list bg-macaroni h-90 mx-6 rounded-3xl shadow-md font-bold text-silver px-7 pt-10 pb-5 flex flex-col items-center dark:bg-charcoal overflow-y-auto overflow-x-hidden">
            <section v-for="habit in habits" :key="habit.id" :class="habit.color" class="flex justify-between items-center mx-6 mt-3 w-full p-2 rounded-2xl shadow-md text-center font-semibold tracking-wide">
                <vue-feather type="trash-2" class="text-blush" @click="removeHabit(habit)"></vue-feather>
                <div class="flex justify-end items-center">
                    <p class="mr-5">{{habit.title}}</p>
                    <vue-feather :type="habit.icon" class="mx-2"></vue-feather>
                </div>
            </section>
        </div>
        <button @click="suggestHabit()" class="bg-orange py-4 mx-6 mt-8 rounded-3xl text-latte font-bold tracking-wide shadow-md">انتخاب عادت های پیشنهادی</button>
        <button @click="createHabit()" class="bg-green py-4 mx-6 mt-4 rounded-3xl text-latte font-bold tracking-wide shadow-md">ساخت عادت اختصاصی</button>
        <button @click="goHabitList()" class="bg-blush py-4 mx-6 mt-8 rounded-3xl text-latte font-bold tracking-wide shadow-md">مشاهده برنامه</button>
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
            this.$router.push(`/Category/Suggestion`);
        },
        createHabit() {
            this.$router.push(`/Category/Creation`);
        },
        goHabitList() {
            this.$router.push(`/Habit-List`);
        },
        loadHabits(){
            this.habits=DataStore.getHabits()
        },
        removeHabit(habit){
            const index = this.habits.indexOf(habit);
            if (index > -1){
                this.habits.splice(index, 1)
            }
            DataStore.saveHabits(this.habits);
        }
    },
    mounted(){
        this.loadHabits();
    }
}
</script>