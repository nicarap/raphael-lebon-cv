<script setup>
import Card from './Card.vue';

</script>

<template>
    <Card title="Compétences">
        
        <h5 class="text-gray-500 uppercase text-md font-bold mb-0">Compétences techniques</h5>
        <ul class="mb-4 list-inside list-disc marker:text-complementary">
            <li>Laravel, Vue.js, Inertia.js</li>
            <li>TailwindCSS</li>
            <li>Git / Github</li>
            <li>MySQL, PgSQL</li>
            <li>Windev, Java</li>
        </ul>
        <h5 class="text-gray-500 uppercase text-md font-bold mb-0">Savoir être</h5>
        <p class="mb-4">
            Bienveillant, facilitateur, autonome
        </p>
        <h5 class="text-gray-500 uppercase text-md font-bold mb-0">Savoir faire</h5>
        <ul class="mb-4 list-inside list-disc marker:text-complementary">
            <li>Analyser des problématiques</li>
            <li>Veille technique et informative</li>
            <li>Recherche de solution, debugger une application</li>
        </ul>
    </Card>

</template>