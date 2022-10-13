<template>
    <section class="bg-macaroni text-silver mx-6 mt-20 mb-7 rounded-3xl h-full flex flex-col dark:bg-charcoal">
        <div class="flex justify-end items-end dark:text-white">
            <p class="font-bold tracking-wide mt-7 text-2xl mr-7">انتخاب عادت جدید</p>
            <button @click="goBack()">
                <vue-feather type="x" class="text-2xl mx-4"></vue-feather>
            </button>
        </div>
        <div class="flex flex-col items-end mt-4">
            <label class="bg-white rounded-l-2xl font-bold text-xl py-2 px-4 w-fit shadow-md relative top-6 dark:bg-silver dark:text-white">انتخاب دسته</label>
            <section class="bg-buff w-full flex flex-wrap items-center justify-center pt-10 pb-5 px-2 dark:bg-gray">
                <div v-for="category in categories" :key="category.id" @click="showCategoryHabits(category.id)">
                    <div :id="category.id" class="bg-white flex flex-col items-center justify-center w-16 h-16 rounded-2xl shadow-md m-1 mr-2 mb-4">
                        <img :src="category.src" class="w-11 rounded-full">
                        <p class="text-xs mb-1">{{category.name}}</p>
                    </div>
                </div>
            </section>
        </div>
        <div class="flex flex-col items-end mt-4">
            <label class="bg-white rounded-l-2xl font-bold text-xl py-2 px-4 w-fit shadow-md relative top-6  dark:bg-silver dark:text-white">لیست عادت های دسته منتخب</label>
            <section class="bg-buff w-full flex flex-col items-center justify-center pt-10 pb-5 px-7 mb-7 dark:bg-gray">
                <div v-for="habit in categoryHabits" :key="habit.id" @click="createHabit(habit.title, habit.type)">
                    <div :id="habit.id" :categoryId="habit.categoryId" class="flex justify-end items-center mx-6 mt-3 w-full p-3 rounded-3xl shadow-md text-center font-semibold text-lg bg-white tracking-wide dark:bg-silver dark:text-white">
                        <p class="mr-14">{{habit.title}}</p>
                        <vue-feather :type="habit.type" class="mx-2"></vue-feather>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
    import dataStore from '../DataStore';

export default {
    name: 'Suggestion',
    data() {
        return {
        categories: null,
        habits: [],
        categoryHabits: null,
        }
    },
    methods: {
        createHabit(title, iconType) {
            this.$router.push({path: `/Category/Creation`, query: {title, iconType}});
        },
        goBack(){
            this.$router.go(-1)
        },
        async loadCategories() {
            const res = await fetch("../src/api/category.json");
            const data = await res.json();
            this.categories = data;
        },
        async loadHabits() {
                const res = await fetch("../src/api/habit.json");
                const data = await res.json();
                this.habits = data;
        },
        showCategoryHabits(categoryId) {
            this.categoryHabits = this.habits.filter(a=>a.categoryId == categoryId);
        }
    },
    mounted() {
        this.loadCategories();
        this.loadHabits();
    }
}
</script>