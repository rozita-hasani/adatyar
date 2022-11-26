<template>
    <section class="flex flex-col bg-macaroni text-silver mx-6 mt-20 mb-7 rounded-3xl h-full dark:bg-charcoal">
        <div class="title flex justify-end items-end dark:text-white">
            <p class="font-bold tracking-wide text-2xl mt-7 mr-7">انتخاب عادت جدید</p>
            <button @click="goBack()">
                <vue-feather type="x" class="text-2xl mx-4"></vue-feather>
            </button>
        </div>
        <div class="categories flex flex-col items-end mt-4">
            <label class="label-suggestion">انتخاب دسته</label>
            <section class="flex flex-wrap items-center justify-center w-full pt-10 pb-5 bg-buff dark:bg-gray">
                <div v-for="category in categories" :key="category.id" @click="showCategoryHabits(category.id)">
                    <div :id="category.id" class="bg-white flex flex-col items-center justify-center w-16 h-16 rounded-2xl shadow-md mx-1 mb-4">
                        <vue-feather :type="category.type" class="w-7 mb-1"></vue-feather>
                        <p class="text-xs">{{ category.name }}</p>
                    </div>
                </div>
            </section>
        </div>
        <div class="habits flex flex-col items-end mt-4">
            <label class="label-suggestion">لیست عادت های دسته منتخب</label>
            <section class="flex flex-col items-center justify-center pt-10 pb-5 px-7 mb-7 w-full bg-buff dark:bg-gray">
                <div v-for="habit in categoryHabits" :key="habit.id" @click="createHabit(habit.title, habit.type)" class="flex w-full">
                    <div :id="habit.id" :categoryId="habit.categoryId" class="flex justify-end items-center mt-3 w-full p-3 rounded-2xl shadow-md text-center font-semibold tracking-wide bg-white dark:bg-silver dark:text-white">
                        <p class="">{{ habit.title }}</p>
                        <vue-feather :type="habit.type" class="mr-2 ml-4"></vue-feather>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>


<script>
import {categories,habits} from '../data.js';
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