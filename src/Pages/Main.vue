<script setup>
import Header from '../components/Header.vue';
import Presentation from '../components/Presentation.vue';
import Card from '../components/Card.vue';

</script>

<template>
    <div class="flex flex-col justify-center items-center w-full scroll-smooth">
        <section class="max-w-sm sm:max-w-2xl h-screen flex flex-col justify-center items-center">
            <h1 class="font-mono text-4xl text-center"><strong>Développeur Frontend & Backend</strong></h1>
            <h2 class="font-mono text-2xl mb-12"><a href="#suite" >- Raphaël LEBON -</a></h2>
            <div class="m-12">
                <div class="flex justify-center">
                    <img src="/images/20220503_102526.jpg" class="w-[150px] h-auto border-radius rounded-full" alt="photo"/>
                </div>
            </div>
        </section>
        <section class="w-full" id="suite">
            <div class="bg-cyan-400 h-2/3 p-2 pb-56 flex justify-center">
                <div class="max-w-2xl p-12">
                    <Presentation id="presentation" />
                </div>
            </div>
            <div class="bg--200 p-2 flex justify-center">
                <div class="max-w-7xl">
                    <Card class=" -mt-24"/>
                </div>
            </div>
        </section>
    </div>
</template>