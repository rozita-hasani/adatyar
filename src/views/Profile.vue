<template>
    <div class="flex flex-col text-center h-vh bg-latte text-silver dark:bg-gunmetal">
        <TopNavbar/>
        <p class="title font-bold tracking-wide shadow-md py-2 mx-24 rounded-3xl z-10 relative top-5 bg-white text-silver dark:bg-silver dark:text-white">پروفایل</p>
        <section class="flex flex-col items-center mx-6 mb-4 rounded-3xl h-full shadow-md bg-macaroni text-silver dark:bg-charcoal ">
            <div class="picture mb-8">
                <UserIcon class="rounded-full w-40 mt-12 mx-auto p-2 shadow-md border-4 dark:text-white "/>
                <img v-if="url" :src="url" class="rounded-full shadow-md border-4 w-40 h-40 mt-12 mx-auto absolute top-25">
                <div>
                    <input type="file" @change="onFileChange" class="h-12 w-12 bg-blush text-latte rounded-full p-2 absolute right-28 top-64 opacity-0 cursor-pointer z-10">
                    <CameraIcon class="h-12 w-12 bg-blush text-latte rounded-full p-2 absolute right-28 top-64" />
                </div>
            </div>
            <span class="name profile">
                <button class="btn-profile" @click="openNameModal()">
                    <label class="mr-1">نام</label>
                    <span class="span-profie">{{ profile.name }}</span>
                </button>
                <UserIcon class="h-8 w-8 ml-6" />
            </span>
            <span class="email profile">
                <button class="btn-profile" @click="openEmailModal()">
                    <label class="mr-1">پست الکترونیک</label>
                    <span class="span-profie">{{ profile.email }}</span>
                </button>
                <EnvelopeIcon class="h-8 w-8 ml-4" />
            </span>
        </section>
        <section v-if="nameIsEditable" class="name-modal mb-5">
            <div class="profile-modal">
                <p class="p-profile-modal">نامت رو وارد کن</p>
                <input v-model="modalName" type="text" class="input-profile-modal">
                <div class="div-profile-modal">
                    <button @click="saveName()" class="ml-8">ذخیره</button>
                    <button @click="closeNameModal()">لغو</button>
                </div>
            </div>
        </section>
        <section v-if="emailIsEditable" class="email-modal mb-5">
            <div class="profile-modal">
                <p class="p-profile-modal">ایمیلت رو وارد کن</p>
                <input v-model="modalEmail" type="email" class="input-profile-modal">
                <div class="div-profile-modal">
                    <button @click="saveEmail()" class="ml-8">ذخیره</button>
                    <button @click="closeEmailModal()">لغو</button>
                </div>
            </div>
        </section>
        <Navbar/>
    </div>
</template>

<script>
import { CameraIcon, UserIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
import TopNavbar from '../components/Top-Navbar.vue'
import Navbar from '../components/Navbar.vue'
import DataStore from '../DataStore.js'

export default {
    name: 'Profile',
    data() {
        return {
            nameIsEditable: false,
            emailIsEditable: false,
            url: null,
            profile: {
                name: null,
                email: null
            }
        }
    },
    components: {
        CameraIcon, UserIcon, EnvelopeIcon, Navbar, TopNavbar
    },
    methods: {
        openNameModal() {
            this.nameIsEditable = true;
            this.closeEmailModal()
        },
        closeNameModal() {
            this.nameIsEditable = false;
            this.modalName = this.profile.name
        },
        openEmailModal() {
            this.emailIsEditable = true;
            this.closeNameModal()
        },
        closeEmailModal() {
            this.emailIsEditable = false;
            this.modalEmail = this.profile.email
        },
        saveName() {
            this.profile.name = this.modalName;
            this.closeNameModal();
            DataStore.saveProfile(this.profile);
        },
        saveEmail() {
            this.profile.email = this.modalEmail;
            this.closeEmailModal();
            DataStore.saveProfile(this.profile);
        },
        onFileChange(image) {
            const file = image.target.files[0];
            this.url = URL.createObjectURL(file);
        },
        loadProfile() {
            this.profile = DataStore.getProfile()
        }
    },
    mounted() {
        this.loadProfile();
    }
}
</script>