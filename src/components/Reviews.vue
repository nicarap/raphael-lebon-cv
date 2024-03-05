<script setup>
import {ref} from "vue";

const currentItem = ref(0)
const previousSlide = () => {
  if(currentItem.value <= 0){
    currentItem.value = items.length -1
  }else currentItem.value--;
}
const nextSlide = () => {
  if(currentItem.value >= items.length -1){
    currentItem.value = 0
  }else currentItem.value++;
}

const items = [
  {src: "/images/travel-planner.svg", text:"Raphaël a transformé ma vision en réalité avec une expertise et une efficacité impressionnantes. Le projet a été livré à temps, surpassant toutes mes attentes.", title:"Travel Planner by Coco"},
  {src: "/images/3iL.png", text:"second test", title:"second title"},
  {src: "/images/aze.png", text:"troisieme test", title:"troisieme title"},
  {src: "/images/eza.png", text:"quatrieme test", title:"quatrieme title"}
]

</script>

<template>
  <section id="reviews" class="h-screen flex bg-primary-100 w-full flex-col gap-4 select-none">
    <div class="w-full max-w-3xl mx-auto bg-white rounded-md border relative px-8 py-4 -top-16 flex flex-col">
      <h3 class="text-3xl text-primary-500 text-center">Retrouvez quelques avis de clients</h3>
      <div class="pt-8 text-primary-950 h-full flex flex-col">
        <div class="w-full flex-1 flex">
          <div class="flex group items-center px-2 py-2 cursor-pointer" @click="previousSlide">
            <div class="h-8 w-8 text-primary-200 group-hover:text-secondary transition-all duration-300 rounded-full p-2 group-hover:bg-primary-500 flex items-center justify-center">
            <fa :icon="['fa', 'chevron-left']" />
            </div>
          </div>
          <div class="relative h-full w-full overflow-hidden text-center">

            <div v-for="(item, index) in items">
              <transition
                  key={{index}}
                  v-show="currentItem === index"
                  enter="transition-all duration-1000"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-1000"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
              >
                <div class="absolute w-full h-full">
                  <div class="flex flex-col">
                    <div class="mx-auto py-6">
                      <div class="w-32 h-32 rounded-full border-2 flex justify-center items-center overflow-hidden">
                        <img :src="item.src" class="h-full w-auto" />
                      </div>

                    </div>

                    <div class="flex-1 uppercase text-xl text-primary-700 pb-4">{{ item.title }}</div>
                    <div class="flex-1 font-sans max-w-sm mx-auto">{{ item.text }}</div>
                  </div>
                </div>
              </transition>
            </div>

          </div>
          <div class="flex group items-center px-2 py-2 cursor-pointer" @click="nextSlide">
            <div class="h-8 w-8 text-primary-200 group-hover:text-secondary transition-all duration-300 rounded-full p-2 group-hover:bg-primary-500 flex items-center justify-center">
            <fa :icon="['fa', 'chevron-right']" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
