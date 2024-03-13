<script setup>
import Skills from './components/Skills.vue';
import Footer from './components/Footer.vue';
import Profil from './components/Profil.vue';
import Navigation from "./components/Navigation.vue";
import Contact from "./components/Contact.vue";
import Home from "./components/Home.vue";
import Projects from "./components/Projects.vue";

</script>

<template>
  <div class="flex flex-col justify-center items-center w-full scroll-smooth font-sherif bg-gray-50">
    <Navigation />

    <Home />

    <Profil />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>
