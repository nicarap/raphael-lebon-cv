<script setup>
</script>

<template>
    <div class="bg-primary w-full flex flex-col sm:flex-row justify-between sm:items-center">
        <div class="flex items-center gap-x-2 h-full group">
            <fa class="text-gray-700 group-hover:text-complementary" icon="phone"/>
            <a href="tel:0692471345">06 92 47 13 45</a>
        </div>
        <div class="hidden sm:block w-0.5 h-5 border border-complementary bg-complementary mx-2" />
        <div class="flex items-center gap-x-2 h-full group">
            <fa class="text-gray-700 group-hover:text-complementary" icon="envelope"/>
            <a href="mailto:nicarap@hotmail.com">nicarap@hotmail.com</a>
        </div>
        <div class="hidden sm:block w-0.5 h-5 border border-complementary bg-complementary mx-2" />
        <div class="flex items-center gap-x-2 h-full group">
            <fa class="text-gray-700 group-hover:text-complementary" :icon="['fab', 'linkedin']"/>
            <a href="https://www.linkedin.com/in/raphael-lebon-81606918b" target="_blank">@raphaellebon</a>
        </div>
        <div class="hidden sm:block w-0.5 h-5 border border-complementary bg-complementary mx-2" />
        <div class="flex items-center gap-x-2 h-full group">
            <fa class="text-gray-700 group-hover:text-complementary" icon="location-dot"/>
            La Réunion
        </div>
    </div>
</template>