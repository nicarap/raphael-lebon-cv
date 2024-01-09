<script setup>
</script>

<template>
    <div class="bg-primary relative w-full">

        <a href="#home">
            <div class="absolute -top-4 right-5">
                <fa class="text-red-500 rounded-full p-2 bg-secondary" :icon="['fa', 'chevron-up']" />
            </div>
        </a>

        <div class="mt-12 w-full mx-auto flex justify-center">
            <div class="flex justify-between gap-8">
                <a href="tel:+262692471345" title="+262 692 47 13 45"
                    class="p-3 bg-gray-500 rounded-full w-12 h-12 flex items-center justify-center">
                    <fa class="text-gray-700 group-hover:text-complementary" icon="phone" />
                </a>
                <a href="mailto:nicarap@hotmail.com" title="nicarap@hotmail.com"
                    class="p-3 bg-gray-500 rounded-full w-12 h-12 flex items-center justify-center">
                    <fa class="text-gray-700 group-hover:text-complementary" icon="envelope" />
                </a>
                <a href="https://www.linkedin.com/in/raphael-lebon-81606918b" target="_blank"
                    title="raphael-lebon-81606918b"
                    class="p-3 bg-gray-500 rounded-full w-12 h-12 flex items-center justify-center">
                    <fa class="text-gray-700 group-hover:text-complementary" :icon="['fab', 'linkedin-in']" />
                </a>

            </div>
        </div>


        <!-- Copyright -->
        <div class="copyright">
            <div class="w-full md:pt-8 pt-6 pb-4 px-4 mx-auto text-center">
                <hr class="w-full max-w-xl mx-auto mb-4 border-2 border-gray-300" />
                <div class="text-xs font-semibold py-1">
                    Copyright © 2023 Propulsed by
                    <span class="hover:text-gray-900">Raphaël LEBON, développeur Web</span>.
                </div>
            </div>

        </div>
    </div>
</template>