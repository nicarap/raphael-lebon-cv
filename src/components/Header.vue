<script setup>
     
defineProps({
    menus:Array,
});

</script>

<template>
    <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 h-full dark:bg-gray-800">
            <div class="flex flex-wrap justify-between items-center h-full mx-auto max-w-screen-xl">
                <a href="https://flowbite.com" class="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Accueil   </span>
                </a>
                <div class="justify-between items-center w-full h-full flex w-auto order-1">
                    <ul class="flex mt-4 font-medium h-full flex-row items-center space-x-8 mt-0">
                        <li v-for="(item) in menus" class=" cursor-pointer">
                            <a :href="'#'+item.target" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100
    hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 
    lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent 
    dark:border-gray-700">{{ item.label }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>