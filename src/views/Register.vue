<template>
    <div>
    <div class="bg-white flex flex-col justify-center text-center h-vh left-0 right-0 top-0 bottom-0 ">
        <img class="mx-auto  mb-8 w-32 h-32 rounded-full" src="../assets/adatyar.svg" />
        <p class="text-silver font-bold text-3xl">عادت یار</p>
    </div>

    <div class="absolute bottom-5 left-0 right-0 mx-5">
        <p class="text-silver text-center  text-sm">برای شروع، برنامه عاداتت رو بساز</p>
        <button @click="setCategory()" class="bg-avocado py-4  mt-4 w-full rounded-3xl text-latte font-bold tracking-wide shadow-md">ساخت برنامه</button>
    </div>
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