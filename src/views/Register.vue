<template>
    <div class="bg-latte flex flex-col text-center h-vh">
        <img class="mx-auto mt-64 mb-8 w-40 h-40 rounded-full" src="../assets/register2.png" />
        <p class="text-silver font-bold text-3xl">HabiTrack</p>
        <p class="text-silver mt-32 text-sm">برای شروع، برنامه عاداتت رو بساز</p>
        <button @click="setCategory()" class="bg-blush py-4 mx-6 mt-4 rounded-3xl text-latte font-bold tracking-wide shadow-md">ساخت برنامه</button>
    </div>
</template>

<script>
export default {
    name: 'Register',
    methods: {
        setCategory() {
            this.$router.push(`/category`);
        }
    }
}
</script>