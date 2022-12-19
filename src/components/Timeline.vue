<script setup>
import Card from './Timeline/Card.vue';

defineProps({
    items:Array,
})

</script>

<template>
    <div v-for="(item, index) in items" class="grid grid-cols-1 md:grid-cols-2 px-4 group">
        
        <div class="hidden md:flex justify-end text-end relative">
            <div v-if="(index+1)%2" class="w-full absolute top-10 pr-4">
                <span class="group-hover:font-semibold">{{item.date}}</span>
            </div>
            <div v-else class="p-2">
                <Card :item="item" orientation="left" class="hidden md:flex"/>
            </div>
        </div>
        
        <div class="flex relative w-full">
            <div class="w-1 border-2 mx-4 border-primary bg-primary"></div>
            <span class="w-8 h-8 rounded-full flex justify-center items-center absolute left-0 border-2 top-10 border-secondary bg-secondary group-hover:bg-complementary group-hover:border-primary transition-all ease-in-out duration-300">
                <fa :icon="item.icon" class="text-complementary group-hover:text-primary" />
            </span>

            <div class="p-2 w-full sm:w-auto">
                <Card v-if="(index+1)%2" :item="item"/>
                <div v-else class="w-full md:absolute top-10 pr-4">
                    <Card :item="item" orientation="left" class="md:hidden flex"/>
                    <span class="hidden md:block group-hover:font-semibold">{{item.date}}</span>
                </div>
            </div>
        </div>
    </div>

</template>