<template>
    <div class="bg-stone-200 flex flex-col text-center min-h-screen text-silver dark:bg-gunmetal">
        <section class="title flex justify-end drop-shadow px-6 py-5 mb-5 text-white dark:text-white bg-yellow-green fixed top-0 left-0 right-0 h-[65px] z-10">
            <h1 class="text-xl font-bold"> عادت پیش فرض</h1>
            <button @click="goBack()">
                <vue-feather type="x" class="ml-20 h-6 w-6"></vue-feather>
            </button>
        </section>
        <section class="flex flex-col bg-white text-silver mx-6 mb-5 mt-21 rounded-3xl h-full dark:bg-charcoal">
            <div class="categories flex flex-col items-end">
                <label class="label-suggestion">دسته بندی ها</label>
                <section class="flex flex-wrap items-center justify-center w-full pt-10 pb-3 bg-stone-400">
                    <div v-for="category in categories" :key="category.id" @click="showCategoryHabits(category.id)">
                        <div :id="category.id"
                            class="bg-white flex flex-col items-center justify-center w-16 h-16 rounded-2xl shadow-md mx-1 mb-2 dark:bg-silver dark:text-white">
                            <vue-feather :type="category.type" class="w-7 mb-1"></vue-feather>
                            <p class="text-xs">{{ category.name }}</p>
                        </div>
                    </div>
                </section>
            </div>
            <div class="habits flex flex-col items-end">
                <label class="label-suggestion">عادت های دسته منتخب</label>
                <section class="flex flex-col items-center justify-center pt-7 pb-5 px-7 mb-7 w-full bg-stone-400">
                    <div v-for="habit in categoryHabits" :key="habit.id" @click="createHabit(habit.title, habit.type)"
                        class="flex w-full">
                        <div :id="habit.id" :categoryId="habit.categoryId"
                            class="flex justify-end items-center mt-3 w-full p-3 rounded-2xl shadow-md text-center font-semibold tracking-wide bg-white dark:bg-silver dark:text-white">
                            <p class="">{{ habit.title }}</p>
                            <vue-feather :type="habit.type" class="mr-2 ml-4"></vue-feather>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>


<script>
import { categories, habits } from '../data.js';
export default {
    name: 'Suggestion',
    data() {
        return {
            categories: categories,
            habits: habits,
            categoryHabits: null,
        }
    },
    methods: {
        createHabit(title, iconType) {
            this.$router.push({ path: `/category/creation`, query: { title, iconType } });
        },
        goBack() {
            this.$router.go(-1)
        },
        showCategoryHabits(categoryId) {
            this.categoryHabits = this.habits.filter(a => a.categoryId == categoryId);
        }
    },
    mounted() {
    }
}
</script>