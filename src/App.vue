<script setup>
import Skills from './components/Skills.vue';
import Footer from './components/Footer.vue';
import Profil from './components/Profil.vue';
import Navigation from "./components/Navigation.vue";
import Contact from "./components/Contact.vue";
import Home from "./components/Home.vue";
import Reviews from "./components/Reviews.vue";

</script>

<template>
  <div class="flex flex-col justify-center items-center w-full scroll-smooth font-sherif bg-gray-50">
    <Navigation />

    <Home />

    <Profil />
    <Skills />
    <Reviews />

    <section id="portefolio" class="min-h-screen flex flex-col gap-4">
      <span class="text-primary-500">Portefolio</span>
    </section>

    <Contact />
    <Footer />
  </div>
</template>
