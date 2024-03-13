<script setup>
let date = new Date()
</script>

<template>
    <div class="bg-primary-700 relative w-full">

        <a href="#home" title="Retour en haut de la page" type="button">
            <div class="fixed bottom-8 right-10 z-50">
                <fa class="text-secondary rounded-full p-2 bg-primary-500" :icon="['fa', 'chevron-up']" />
            </div>
        </a>

        <div class="copyright">
            <div class="w-full p-4 mx-auto text-center">
                <div class="text-xs text-primary-200 tracking-wide font-sans font-semibold py-1">
                    Copyright © {{ date.getFullYear() }} Propulsed by Raphaël LEBON, Web Developper.
                </div>
            </div>

        </div>
    </div>
</template>
