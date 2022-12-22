<script setup>
import Card from './Card.vue';

defineProps({
    skills:{
        type:Object,
        default:{}
    },
    label:String,
})

</script>

<template>
    <div class="h-5/6 flex flex-col justify-between mb-6">
        <h2 class="text-gray-600 uppercase font-semibold mt-12 mx-auto text-xl text-center w-full">{{label}}</h2>

        <div class=" mt-2 mb-6">
            <h5 class="text-gray-600 uppercase text-md font-bold text-center my-4">{{skills.technologies.label}}</h5>
            <div class="flex gap-8 flex-wrap justify-center mt-4">
                <div v-for="technology in skills.technologies.items" class="h-8 max-w-sm" >
                    <img loading="lazy" class="h-8" :src="'/skills/'+technology+'.png'" :alt="technology+'_logo'" :title="technology"/>
                </div>
            </div>
        </div>

        <div class=" mt-2 mb-6">
            <h5 class="text-gray-600 uppercase text-md font-bold mt-2 text-center">{{skills.languages.label}}</h5>
            <div class="flex gap-4 flex-wrap justify-center mt-4">
                <div v-for="language in skills.languages.items" class="h-8" >
                    <img loading="lazy" class="h-8" :src="'/skills/'+language+'.png'" :alt="language+'_logo'"  :title="language" />
                    <!-- <div class="absolute border-primary  top-0 bottom-0 left-0 w-1/2 rounded-md z-0 bg-complementary"></div> -->
                </div>
            </div>
        </div>
        
        <div class=" mt-2 mb-6">
            <h5 class="text-gray-600 uppercase text-md font-bold mt-2 text-center">{{skills.utilities.label}}</h5>
            <div class="flex gap-4 flex-wrap justify-center mt-4">
                <div v-for="utility in skills.utilities.items" class="h-8" >
                    <img loading="lazy" class="h-8" :src="'/skills/'+utility+'.png'" :alt="utility+'_logo'"  :title="utility" />
                    <!-- <div class="absolute border-primary  top-0 bottom-0 left-0 w-1/2 rounded-md z-0 bg-complementary"></div> -->
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