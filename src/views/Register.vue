<template>
    <div class="bg-white flex flex-col text-center h-vh">
        <img class="mx-auto mt-56 mb-8 w-32 h-32 rounded-full" src="../assets/adatyar.svg" />
        <p class="text-silver font-bold text-3xl">عادت یار</p>
        <p class="text-silver mt-34 text-sm">برای شروع، برنامه عاداتت رو بساز</p>
        <button @click="setCategory()" class="bg-avocado py-4 mx-5 mt-4 rounded-3xl text-latte font-bold tracking-wide shadow-md">ساخت برنامه</button>
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