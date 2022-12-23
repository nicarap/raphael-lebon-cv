<script setup>

defineProps({
    skills:{
        type:Object,
        default:{}
    },
    label:String,
})

</script>

<template>
    <div class="max-w-7xl px-6 flex flex-col justify-between mb-6">
        <h2 class="text-gray-600 uppercase font-semibold mx-auto text-xl text-center w-full">{{label}}</h2>

        <div class="mt-12">
            <div class="flex gap-4 flex-wrap justify-center">
                <div v-for="technology in skills.technologies.items" class="py-2 px-4 rounded-md bg-primary text-white" >
                    <span>{{ technology }}</span>
                </div>
                <div v-for="utility in skills.utilities.items" class="py-2 px-4 rounded-md bg-primary text-white" >
                    <span>{{ utility }}</span>
                </div>
            </div>
        </div>
        <!-- <h5 class="text-gray-500 uppercase text-md font-bold mb-0">Savoir être</h5>
        <p class="mb-4">
            Bienveillant, facilitateur, autonome
        </p>
        <h5 class="text-gray-500 uppercase text-md font-bold mb-0">Savoir faire</h5>
        <ul class="mb-4 list-inside list-disc marker:text-complementary">
            <li>Analyser des problématiques</li>
            <li>Veille technique et informative</li>
            <li>Recherche de solution, debugger une application</li>
        </ul> -->
    </div>

</template>