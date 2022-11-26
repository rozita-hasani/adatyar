<template>
    <section class="flex flex-col bg-macaroni text-silver mx-6 mt-20 mb-7 rounded-3xl h-full dark:bg-charcoal">
        <div class="title flex justify-end items-end dark:text-white">
            <p class="font-bold tracking-wide text-2xl mt-7 mr-7">ساخت عادت جدید</p>
            <button @click="goBack()">
                <vue-feather type="x" class="text-2xl mx-4"></vue-feather>
            </button>
        </div>
        <div class="habit-title flex flex-col items-end">
            <label class="label-creation">نام عادت</label>
            <span class="flex items-center justify-center bg-buff w-full h-28 dark:bg-gray">
                <input v-model="habitTitle" type="text" class="text-center mx-6 mt-5 p-3 w-full rounded-3xl shadow-md font-semibold text-lg dark:bg-silver dark:text-white">
            </span>
        </div>
        <div class="habit-icon flex flex-col items-end mt-4">
            <label class="label-creation">انتخاب نماد</label>
            <section class="section-creation dark:text-white">
                <div v-for="icon in icons" :key="icon.id">
                    <vue-feather @click="chooseIcon(icon.type)" :type="icon.type" :class="{ 'bg-white dark:bg-silver': habitIcon == icon.type }"
                    class="rounded-full border-4 p-1 m-1 border-white dark:border-silver"></vue-feather>
                </div>
            </section>
        </div>
        <div class="habit-color flex flex-col items-end mt-4">
            <label class="label-creation">انتخاب رنگ</label>
            <section class="section-creation">
                <div @click="chooseColor(color)" v-for="(color, name) in colors" :key="name" :class="color"
                    v-bind:class="{ 'border-silver dark:border-white': habitColor == color }"
                    class="w-12 h-12 p-1 m-1 rounded-full border-4 border-white dark:border-silver">
                </div>
            </section>
        </div>
        <div class="habit-interval flex flex-col items-end mt-4">
            <label class="label-creation">تکرار عادت در هفته</label>
            <section class="section-creation">
                <div @click="chooseDay(name)" v-for="(day, name) in weekDays" :key="name"
                    :class="{ 'border-silver border-4 dark:border-white': habitDay.indexOf(name) >= 0 }"
                    class="mx-6 mt-5 p-3 w-full rounded-3xl shadow-md text-center font-semibold text-lg tracking-wide bg-white dark:bg-silver dark:text-white">
                    {{ day }}
                </div>
            </section>
        </div>
        <div class="habit-description flex flex-col items-end">
            <label class="label-creation">توضیحات</label>
            <span class="flex items-center justify-center w-full pt-5 pb-5 min-h-28 bg-buff dark:bg-gray">
                <textarea v-model="habitDescription" type="text" dir="rtl"
                    class="flex flex-wrap text-center w-full mx-6 mt-5 p-3 rounded-3xl shadow-md font-semibold text-lg dark:bg-silver dark:text-white"></textarea>
            </span>
        </div>
        <div v-if="isVisible"
            class="modal mx-6 mt-7 p-3 rounded-3xl shadow-md text-center bg-orange dark:bg-silver dark:text-white">لطفا موارد موردنیاز بالا را انتخاب کن و سپس گزینه افزودن عادت رو بزن</div>
        <button @click="setCategory()" class="bg-blush py-4 mx-6 mt-10 mb-7 rounded-3xl text-latte font-bold tracking-wide shadow-md">افزودن</button>
    </section>
</template>

<script>
import DataStore from '../DataStore.js'
import { WeekDays } from '../Enums.js'
import { Colors } from '../Enums.js'
import {icons} from '../data.js';

export default {
    name: 'Creation',
    data() {
        return {
            icons: null,
            colors: Colors,
            days: null,
            habitTitle: this.$route.query.title,
            habitIcon: this.$route.query.iconType,
            habitColor: null,
            habitDay: [],
            habitDescription: null,
            weekDays: WeekDays,
            isVisible: false,
        }
    },
    methods: {
        setCategory() {
            if (this.habitTitle == null || this.habitDay.length == 0 || this.habitColor == null || this.habitIcon == null) {
                this.isVisible = true;
                return
            }
            DataStore.createHabit({ title: this.habitTitle, icon: this.habitIcon, color: this.habitColor, interval: this.habitDay, description: this.habitDescription });
            this.$router.push(`/Category`);
        },
        goBack() {
            this.$router.go(-1)
        },
        async loadIcons() {
            this.icons = icons;
        },
        chooseIcon(selectedIcon) {
            this.habitIcon = selectedIcon;
        },
        chooseColor(selectedColor) {
            this.habitColor = selectedColor;
        },
        chooseDay(day) {
            if (this.habitDay.indexOf(day) >= 0) {
                this.habitDay.splice(this.habitDay.indexOf(day), 1);
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