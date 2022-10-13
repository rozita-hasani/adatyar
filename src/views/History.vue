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
        <p class="text-silver font-bold tracking-wide shadow-md py-2 bg-white mx-28 rounded-3xl z-10 relative top-5 dark:bg-silver dark:text-white">جدول عادت های هفته</p>
        <section class="bg-macaroni text-silver mx-6 mb-5 rounded-3xl h-full flex flex-col items-end shadow-md dark:bg-charcoal dark:text-white pt-8 pb-5">
            <label dir="rtl" class="bg-white rounded-l-2xl font-bold py-2 px-4 w-fit shadow-md relative top-5 dark:bg-silver dark:text-white">۲ تا ۸ مهر ۱۴۰۱</label>
            <div class="bg-buff dark:bg-gray w-full flex flex-wrap items-center justify-center pt-8 pb-5 px-2 mb-4">
            <table class="text-xs mt-2">
                <!-- Sample -->
                <thead class="">
                    <tr dir="rtl" class="border-b text-gray dark:text-buff">
                        <th class="pl-2 pb-1">جمعه</th>
                        <th class="pl-2">5شنبه</th>
                        <th class="pl-2">4شنبه</th>
                        <th class="pl-2">3شنبه</th>
                        <th class="pl-2">2شنبه</th>
                        <th class="pl-2">1شنبه</th>
                        <th class="pl-2">شنبه</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class=" tracking-tighter">
                    <tr class="border-b">
                        <th>✓</th>
                        <th></th>
                        <th>×</th>
                        <th></th>
                        <th>✓</th>
                        <th></th>
                        <th></th>
                        <th class="text-right py-2 text-gunmetal dark:text-latte">ورزش کنم</th>
                    </tr>
                    <tr class="border-b">
                        <th></th>
                        <th></th>
                        <th>✓</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>✓</th>
                        <th class="text-right py-2 text-gunmetal dark:text-latte">به گیاه ها آب بدم</th>
                    </tr>
                    <tr class="border-b">
                        <th></th>
                        <th>✓</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>×</th>
                        <th></th>
                        <th class="text-right py-2 text-gunmetal dark:text-latte">زبان بخونم</th>
                    </tr>
                </tbody>
            </table>
            </div>

            <label dir="rtl" class="bg-white rounded-l-2xl font-bold py-2 px-4 w-fit shadow-md relative top-5 dark:bg-silver dark:text-white">۹ تا ۱۵ مهر ۱۴۰۱</label>
            <div class="bg-buff dark:bg-gray w-full flex flex-wrap items-center justify-center pt-8 pb-5 px-2 mb-4">
            <table class="text-xs mt-2">
                <!-- Sample -->
                <thead class="">
                    <tr dir="rtl" class="border-b text-gray dark:text-buff">
                        <th class="pl-2 pb-1">جمعه</th>
                        <th class="pl-2">5شنبه</th>
                        <th class="pl-2">4شنبه</th>
                        <th class="pl-2">3شنبه</th>
                        <th class="pl-2">2شنبه</th>
                        <th class="pl-2">1شنبه</th>
                        <th class="pl-2">شنبه</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class=" tracking-tighter">
                    <tr class="border-b">
                        <th>✓</th>
                        <th></th>
                        <th>×</th>
                        <th></th>
                        <th>✓</th>
                        <th></th>
                        <th></th>
                        <th class="text-right py-2 text-gunmetal dark:text-latte">ورزش کنم</th>
                    </tr>
                    <tr class="border-b">
                        <th></th>
                        <th></th>
                        <th>✓</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>✓</th>
                        <th class="text-right py-2 text-gunmetal dark:text-latte">به گیاه ها آب بدم</th>
                    </tr>
                    <tr class="border-b">
                        <th></th>
                        <th>✓</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>×</th>
                        <th></th>
                        <th class="text-right py-2 text-gunmetal dark:text-latte">زبان بخونم</th>
                    </tr>
                </tbody>
            </table>
            </div>
        </section>
        <section class="mx-6 mb-5 flex flex-wrap justify-between flex-row-reverse dark:text-white">
            <UserCircleIcon class="h-10 w-10" @click="goProfile()" />
            <ClipboardDocumentCheckIcon class="h-10 w-10" @click="goHabitList()"/>
            <CalendarDaysIcon class="h-10 w-10" @click="goWeeklyHabit()"/>
            <ClockIcon class="h-10 w-10" />
        </section>
    </div>
</template>

<script>
import { PencilSquareIcon, MoonIcon, SunIcon, ClipboardDocumentCheckIcon, CameraIcon, UserIcon, EnvelopeIcon, UserCircleIcon, CalendarDaysIcon } from '@heroicons/vue/24/outline'
import { ClockIcon } from '@heroicons/vue/24/solid'

export default {
    name: 'Habit-List',
    data() {
        return {
            isDarkmode: false,
            NameIsEditable: false,
            EmailIsEditable: false,
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
            this.NameIsEditable = true
        },
        closeNameModal(){
            this.NameIsEditable = false
        },
        openEmailModal() {
            this.EmailIsEditable = true
        },
        closeEmailModal(){
            this.EmailIsEditable = false
        },
        goProfile() {
            this.$router.push(`/Profile`);
        },
        goHabitList() {
            this.$router.push(`/Habit-List`);
        },
        goWeeklyHabit() {
            this.$router.push(`/Weekly-Habit`);
        },
    }
}
</script>