<template>
    <input type="checkbox" :checked="checked" :id="fieldId" class="mr-2" />
    <label :for="fieldId" class="flex flex-row items-center font-bold cursor-pointer">
        {{ label }}
    </label>
</template>
<script>
export default {
    props: {
        label: String,
        fieldId: {
            type: String,
            required: true,
        },
        checked: {
            type: Boolean,
        },
    },
};
</script>