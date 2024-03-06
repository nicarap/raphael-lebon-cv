<script setup>
import { ref } from "vue";

const currentItem = ref(0)
const previousSlide = () => {
  if (currentItem.value <= 0) {
    currentItem.value = items.length - 1
  } else currentItem.value--;
}
const nextSlide = () => {
  if (currentItem.value >= items.length - 1) {
    currentItem.value = 0
  } else currentItem.value++;
}

const items = [
  { src: "/images/travel-planner.svg", text: "Raphaël a transformé ma vision en réalité avec une expertise et une efficacité impressionnantes. Le projet a été livré à temps, surpassant toutes mes attentes.", title: "Travel Planner by Coco" },
  { src: "/images/3iL.png", text: "second test", title: "second title" },
  { src: "/images/aze.png", text: "troisieme test", title: "troisieme title" },
  { src: "/images/eza.png", text: "quatrieme test", title: "quatrieme title" }
]

</script>

<template>
  <section class="h-1/2 flex bg-primary-100 w-full flex-col gap-4 select-none">
    <div class="w-full max-w-3xl mx-auto bg-white rounded-md border relative px-8 py-4 -top-16 flex flex-col ">
      <h3 class="text-3xl text-primary-500 text-center">Retrouvez quelques avis de clients</h3>
      <div class="pt-8 text-primary-950 h-full flex flex-col">
        <div class="w-full flex-1 flex">
          <div class="flex group items-center px-2 py-2 cursor-pointer" @click="previousSlide">
            <div
              class="h-8 w-8 text-primary-200 group-hover:text-secondary transition-all duration-300 rounded-full p-2 group-hover:bg-primary-500 flex items-center justify-center">
              <fa :icon="['fa', 'chevron-left']" />
            </div>
          </div>
          <div class="grow overflow-hidden text-center relative h-[12rem]">
            <template v-for="(item, index) in items">
              <Transition class="duration-1000 transition-all" enterFromClass="opacity-0" enterToClass="opacity-100"
                leaveToClass="opacity-0" leaveFromClass="opacity-100" tag="div">
                <div v-show="currentItem === index" class="w-full absolute inset-0">
                  <div class="w-full h-full">
                    <div class="max-w-sm mx-auto relative h-full flex flex-col">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        class="-left-4 block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
                        <path
                          d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                        </path>
                      </svg>
                      <div class="flex-1 font-sans text-justify text-gray-500">{{ item.text }}</div>
                      <div class="items-end flex gap-4 items-center pt-4 ">
                        <div class="w-16 h-16 rounded-full border-2 flex justify-center items-center overflow-hidden">
                          <img :src="item.src" class="h-full w-auto" />
                        </div>
                        <div class="uppercase text-xl text-primary-700 text-left">{{ item.title }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </template>
          </div>
          <div class="flex group items-center px-2 py-2 cursor-pointer" @click="nextSlide">
            <div
              class="h-8 w-8 text-primary-200 group-hover:text-secondary transition-all duration-300 rounded-full p-2 group-hover:bg-primary-500 flex items-center justify-center">
              <fa :icon="['fa', 'chevron-right']" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
