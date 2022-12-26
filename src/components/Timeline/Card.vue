<script setup>
defineProps({
    item:Object,
    orientation:{
        type:String,
        default:'rigth'
    }
})
</script>

<template>
        <div class="border relative border-gray-200 bg-white rounded-lg group-hover:shadow-xl flex flex-col p-6 text-gray-700">
            <div v-if="item.badge" class="w-8 h-8 absolute rounded-full bg-white -top-2 -right-2 
            flex items-center justify-center border-2 border-primary" :class="{
                'md:-right-2 ' : orientation === 'rigth',
                'md:-left-2 ' : orientation !== 'rigth',
                }" title="Diplôme">
                <fa :icon="item.icon" class="text-gray-700" />
            </div>

            <div class="flex items-center w-full gap-2 mb-2" :class="{'justify-end': orientation !== 'rigth'}">
                <div v-if="item.logo" class="hidden md:block w-16 h-16 rounded-full overflow-hidden">
                    <img class="max-w-full h-full object-cover" :src="item.logo" alt="logo" />
                </div>
                <div>
                    <h5 class="text-gray-500 uppercase text-md font-bold mb-0">{{item.name}}</h5> 
                    <small>{{item.department}}</small> 
                    <small class="block md:hidden">{{item.date}}</small>
                </div>
            </div>

            <div v-if="item.mission">
                <hr class="mb-2 border-secondary" />
                <p class="mb-2 text-lg">{{item.mission.label}}</p>
            </div>

            <ul v-if="item.mission?.activities && orientation === 'rigth'" class="mb-4 list-inside list-disc marker:text-complementary ">
                <li v-for="activity in item.mission.activities">{{activity}}</li>
            </ul>
            <ul v-if="item.mission?.activities && orientation !== 'rigth'" class="hidden sm:block mb-4 list-inside list-disc text-right marker:text-complementary" style="direction:rtl;">
                <li v-for="activity in item.mission.activities">{{activity}}</li>
            </ul>
            <ul v-if="item.mission?.activities && orientation !== 'rigth'" class="sm:hidden mb-4 list-inside list-disc text-left marker:text-complementary">
                <li v-for="activity in item.mission.activities">{{activity}}</li>
            </ul>
        </div>
</template>