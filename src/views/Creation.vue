<template>
    <section class="bg-macaroni text-silver mx-6 mt-20 mb-7 rounded-3xl h-full flex flex-col dark:bg-charcoal">
        <div class="flex justify-end items-end dark:text-white">
            <p class="font-bold tracking-wide mt-7 text-2xl mr-7">ساخت عادت جدید</p>
            <button @click="goBack()">
                <vue-feather type="x" class="text-2xl mx-4"></vue-feather>
            </button>
        </div>
        <div class="flex flex-col items-end">
            <label class="bg-white rounded-l-2xl font-bold text-xl py-2 px-4 w-fit shadow-md relative top-6 dark:bg-silver dark:text-white">نام عادت</label>
            <span class="bg-buff w-full h-28 flex items-center justify-center dark:bg-gray">
                <input v-model="habitTitle" type="text" class="mx-6 mt-5 w-full p-3 rounded-3xl shadow-md text-center font-semibold text-lg dark:bg-silver dark:text-white">
            </span>
        </div>
        <div class="flex flex-col items-end mt-4">
            <label class="bg-white rounded-l-2xl font-bold text-xl py-2 px-4 w-fit shadow-md relative top-6 dark:bg-silver dark:text-white">انتخاب نماد</label>
            <section class="bg-buff w-full flex flex-wrap items-center justify-center pt-10 pb-5 px-2 dark:text-white dark:bg-gray">
                <div v-for="icon in icons" :key="icon.id">
                    <vue-feather @click="chooseIcon(icon.type)" :type="icon.type" :class="{'bg-white dark:bg-silver' : habitIcon == icon.type}" class="rounded-full border-4 border-white p-1 m-1 dark:border-silver"></vue-feather>         
                </div>
            </section>
        </div>
        <div class="flex flex-col items-end mt-4">
            <label class="bg-white rounded-l-2xl font-bold text-xl py-2 px-4 w-fit shadow-md relative top-6  dark:bg-silver dark:text-white">انتخاب رنگ</label>
            <section class="bg-buff w-full flex flex-wrap items-center justify-center pt-10 pb-5 px-2 dark:bg-gray">
                <div
                @click="chooseColor(color)"
                v-for="(color, name) in colors"
                :key="name"
                :class="color"
                v-bind:class="{'border-silver dark:border-white' : habitColor == color}"
                class="w-12 h-12 rounded-full border-4 border-white p-1 m-1 dark:border-silver">
                </div>
            </section>
        </div>
        <div class="flex flex-col items-end mt-4">
            <label class="bg-white rounded-l-2xl font-bold text-xl py-2 px-4 w-fit shadow-md relative top-6  dark:bg-silver dark:text-white">تکرار عادت در هفته</label>
                <section class="bg-buff w-full flex flex-wrap items-center justify-center pt-10 pb-5 px-2 dark:bg-gray">
                    <div @click="chooseDay(name)"
                        :id="name"
                        v-for="(day, name) in weekDays" :key="name"
                        :class="{'border-silver border-4 dark:border-white' : habitDay.indexOf(name) >= 0}"
                        class="mx-6 mt-5 w-full p-3 rounded-3xl shadow-md text-center font-semibold text-lg bg-white tracking-wide dark:bg-silver dark:text-white">
                        {{day}}
                    </div>
                </section>
        </div>
        <div class="flex flex-col items-end">
            <label class="bg-white rounded-l-2xl font-bold text-xl py-2 px-4 w-fit shadow-md relative top-6 dark:bg-silver dark:text-white">توضیحات</label>
            <span class="bg-buff w-full pt-5 pb-5 min-h-28 flex items-center justify-center dark:bg-gray">
                <textarea v-model="habitDescription" type="text" dir="rtl" class="mx-6 mt-5 w-full p-3 rounded-3xl shadow-md text-center font-semibold text-lg dark:bg-silver dark:text-white flex flex-wrap"></textarea>
            </span>
        </div>
        <div v-if="isVisible" class="mx-6 mt-7 p-3 rounded-3xl shadow-md text-center dark:bg-silver dark:text-white bg-orange">لطفا موارد موردنیاز بالا را انتخاب کن و سپس گزینه افزودن عادت رو بزن</div>
        <button @click="setCategory()" class="bg-blush py-4 mx-6 mt-10 mb-7 rounded-3xl text-latte font-bold tracking-wide shadow-md">افزودن</button>
    </section>
</template>

<script>
import DataStore from '../DataStore.js'
import {WeekDays} from '../Enums.js'
import {Colors} from '../Enums.js'
export default {
    name: 'Creation',
    data() {
    return {
        icons: null,
        colors: null,
        days: null,
        habitTitle: this.$route.query.title,
        habitIcon: this.$route.query.iconType,
        habitColor: null,
        habitDay: [],
        habitDescription: null,
        weekDays: WeekDays,
        isVisible: false,
        colors: Colors
    }
    },
    methods: {
        setCategory() {
            if (this.habitTitle == null || this.habitDay.length == 0 || this.habitColor == null || this.habitIcon == null){
                this.isVisible = true;
                return
            }
            DataStore.createHabit({title: this.habitTitle, icon: this.habitIcon, color: this.habitColor, interval: this.habitDay, description: this.habitDescription});
            this.$router.push(`/Category`);
        },
        goBack(){
        this.$router.go(-1)
        },
        async loadIcons() {
        const res = await fetch("../src/api/feather.json");
        const data = await res.json();
        this.icons = data;
        },
        chooseIcon(selectedIcon) {
            this.habitIcon = selectedIcon;
        },
        chooseColor(selectedColor) {
            this.habitColor = selectedColor;
        },
        chooseDay(day) {
            if (this.habitDay.indexOf(day) >=0) {
                this.habitDay.splice(this.habitDay.indexOf(day),1);
            }
            else {
                this.habitDay.push(day)
            }
        },
        hideModal() {
            this.isVisible = false
        },
    },
    mounted() {
        this.loadIcons();
    }
}
    </script>