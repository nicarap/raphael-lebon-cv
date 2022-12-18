<script setup>
defineProps({
    title:String,
})
</script>

<template>
    <div class="border border-gray-200 bg-white rounded-lg shadow-md flex flex-col p-6 text-gray-700">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-primary uppercase">{{ title }}</h5>
        <hr class="mb-2 border-secondary" />
        <slot />
    </div>
</template>