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
        <p class="text-silver font-bold tracking-wide shadow-md py-2 bg-white mx-28 rounded-3xl z-10 relative top-5 dark:bg-silver dark:text-white">پروفایل</p>
        <section class="bg-macaroni text-silver mx-6 mb-5 rounded-3xl h-full flex flex-col items-center shadow-md dark:bg-charcoal ">
            <div class="mb-8">
                <UserIcon class="rounded-full w-40 mt-12 mx-auto shadow-md border-4 p-2 dark:text-white" />
                <img v-if="url" :src="url" class="rounded-full w-40 h-40 mt-12 mx-auto shadow-md border-4 border-red-500 absolute top-25">
                <div>
                    <input type="file" @change="onFileChange" class="h-12 w-12 bg-blush rounded-full p-2 text-latte absolute right-28 top-64 opacity-0 cursor-pointer z-10">
                    <CameraIcon class="h-12 w-12 bg-blush rounded-full p-2 text-latte absolute right-28 top-64"/>
                </div>
            </div>
            <span class="flex items-center px-6 mb-6 w-full dark:text-white">
                <button class="flex flex-col tracking-wide border-b w-full pb-1 items-end " @click="openNameModal()">
                    <label class="mr-1">نام</label>
                    <span class="font-semibold mt-1 mr-1">{{profile.name}}</span>
                </button>
                <UserIcon class="h-8 w-8 ml-6" />
            </span>
            <span class="flex items-center px-6 w-full dark:text-white" >
                <button class="flex flex-col tracking-wide border-b w-full pb-1 items-end " @click="openEmailModal()">
                    <label class="mr-1">پست الکترونیک</label>
                    <span class="font-semibold mt-1 mr-1">{{profile.email}}</span>
                </button>
                <EnvelopeIcon class="h-8 w-8 ml-6" />
            </span>
        </section>
        <section v-if="nameIsEditable" class="mb-5 ">
            <div class="bg-buff text-silver mx-6 rounded-3xl h-full flex flex-col shadow-md dark:bg-gray dark:text-white px-6 py-4">
                <p class="font-bold flex flex-row-reverse mb-4 text">نامت رو وارد کن</p>
                <input v-model="modalName" type="text" class="p-2 rounded-3xl shadow-md text-center font-semibold text-lg h-content dark:bg-silver dark:text-white mb-4">
                <div class="flex flex-row-reverse font-bold">
                    <button @click="saveName()" class="ml-8">ذخیره</button>
                    <button @click="closeNameModal()">لغو</button>
                </div>
            </div>
        </section>
        <section v-if="emailIsEditable" class="mb-5">
            <div class="bg-buff text-silver mx-6 rounded-3xl h-full flex flex-col shadow-md dark:bg-gray dark:text-white px-6 py-4">
                <p class="font-bold flex flex-row-reverse mb-4 text">ایمیلت رو وارد کن</p>
                <input v-model="modalEmail" type="email" class="p-2 rounded-3xl shadow-md text-center font-semibold text-lg h-content dark:bg-silver dark:text-white mb-4">
                <div class="flex flex-row-reverse font-bold">
                    <button @click="saveEmail()" class="ml-8">ذخیره</button>
                    <button @click="closeEmailModal()">لغو</button>
                </div>
            </div>
        </section>
        <section class="mx-6 mb-5 flex flex-wrap justify-between flex-row-reverse dark:text-white">
            <UserCircleIcon class="h-10 w-10"/>
            <ClipboardDocumentCheckIcon class="h-10 w-10" @click="goHabitList()"/>
            <CalendarDaysIcon class="h-10 w-10" @click="goWeeklyHabit()"/>
            <ClockIcon class="h-10 w-10" @click="goHistory()"/>

        </section>
    </div>
</template>

<script>
import { PencilSquareIcon, MoonIcon, SunIcon, ClockIcon, CalendarDaysIcon, ClipboardDocumentCheckIcon, CameraIcon, UserIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import { UserCircleIcon } from '@heroicons/vue/24/solid'

import DataStore from '../DataStore.js'

export default {
    name: 'Profile',
    data() {
        return {
            isDarkmode: false,
            nameIsEditable: false,
            emailIsEditable: false,
            url: null,
            profile: {
                name: null,
                email : null
            }
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
            this.nameIsEditable = true;
            this.closeEmailModal()
        },
        closeNameModal(){
            this.nameIsEditable = false;
            this.modalName = this.profile.name
        },
        openEmailModal() {
            this.emailIsEditable = true;
            this.closeNameModal()
        },
        closeEmailModal(){
            this.emailIsEditable = false;
            this.modalEmail= this.profile.email
        },
        goHabitList() {
            this.$router.push(`/Habit-List`);
        },
        goWeeklyHabit() {
            this.$router.push(`/Weekly-Habit`);
        },
        goHistory() {
            this.$router.push(`/History`);
        },
        saveName(){
            this.profile.name= this.modalName;
            this.closeNameModal();
            DataStore.saveProfile(this.profile);
        },
        saveEmail(){
            this.profile.email = this.modalEmail;
            this.closeEmailModal();
            DataStore.saveProfile(this.profile);
        },
        onFileChange(e) {
            const file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        },
        loadProfile(){
            this.profile=DataStore.getProfile()
        }
    },
    mounted(){
        this.loadProfile();
    }
}
</script>