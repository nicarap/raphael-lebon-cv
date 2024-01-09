<script>
import Skills from './components/Skills.vue';
import Footer from './components/Footer.vue';
import Profil from './components/Profil.vue';
import Timeline from './components/Timeline.vue';
import { messages } from './messages.js';
import LangButton from './components/LangButton.vue';
import Avatar from './components/avatar.vue';

export default {
  name: 'app',
  components: {
    Skills,
    Footer,
    Profil,
    LangButton,
    Timeline, Avatar
  },
  data() {
    return {
      data: {
        lang: 'fr',
        timeline: messages.fr.timeline,
        title: messages.fr.title,
        skills: messages.fr.skills,
        presentation: messages.fr.presentation,
      },
      rotate_angle: "0",
    }
  },
  mounted() {
    //
  },
  methods: {
    changeLang() {
      this.data.lang = this.data.lang === 'en' ? 'fr' : 'en'
    }
  },
  watch: {
    'data.lang': {
      handler(lang) {
        this.rotate_angle = this.rotate_angle === "0" ? "900" : "0";
        this.data.timeline = messages[lang].timeline;
        this.data.title = messages[lang].title;
        this.data.presentation = messages[lang].presentation;
        this.data.skills = messages[lang].skills;
      }
    }
  }
}

</script>

<template>
  <div class="flex flex-col justify-center items-center w-full scroll-smooth font-sherif bg-primary">

    <section id="home" class="w-full h-[93vh] flex flex-col justify-between items-center">
      <div class="w-full h-full">
        <!-- <LangButton class="hidden sm:block" :lang="data.lang" @changeLang="changeLang" /> -->
        <div class="h-1/3 bg-secondary w-full"></div>
        <div class="-top-28 w-full relative flex flex-col items-center gap-4 px-4 h-full">
          <Avatar :lang="data.lang" :rotate_angle="rotate_angle" @changeLang="changeLang" />
          <div class="text-center">
            <h1 class="text-5xl text-center text-gray-700"><strong class="text-white">Raphaël LEBON</strong></h1>
            <h2 class="text-xl mb-12 text-gray-700">{{ data.title }}</h2>
          </div>
        </div>
      </div>
    </section>
    <nav class="w-full flex items-center group z-50 bg-secondary shadow x-2 py-4 sticky top-0 max-h-[7vh] px-16">
      <a class="text-light-gold group:aria-disabled:text-blue-500 font-semibold text-3xl leading-4 no-underline page-scroll"
        href="index.html"><span class="hidden md:inline">RL</span></a>
      <div class="max-w-7xl h-full mx-auto sm:px-4 lg:px-8 flex flex-wrap items-center lg:flex-nowrap">

        <!-- Text Logo - Use this if you don't have a graphic logo -->

        <!-- Image Logo -->
        <!-- <a class="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline" href="index.html">
                <img src="images/logo.svg" alt="alternative" class="h-8" />
            </a> -->

        <button
          class="background-transparent rounded text-xl w-5 h-5 leading-none hover:no-underline focus:no-underline lg:hidden fill-dark-gold"
          type="button" data-toggle="offcanvas">
          <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>

        <div class="navbar-collapse offcanvas-collapse top-16 flex-1 lg:items-center" id="navbarsExampleDefault">
          <ul
            class="justify-center pl-0 mt-3 mb-2 ml-auto flex  gap-12 flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row *:tracking-wider">
            <li class=" leading-3 transition-all duration-100 hover:text-light-gold">
              <a class="page-scroll font-semibold text-sm uppercase nav-link p-2 block md:group-aria-disabled:text-white"
                href="#home">Accueil</a>
            </li>
            <li class="leading-3 transition-all duration-100 hover:text-light-gold">
              <a class="nav-link font-semibold text-sm uppercase p-2 block page-scroll md:group-aria-disabled:text-white"
                href="#about">Profil</a>
            </li>
            <li class="leading-3 transition-all duration-100 hover:text-light-gold">
              <a class="nav-link font-semibold text-sm uppercase p-2 block page-scroll md:group-aria-disabled:text-white"
                href="#experiences">Experiences</a>
            </li>
            <li class="leading-3 transition-all duration-100 hover:text-light-gold">
              <a class="nav-link font-semibold text-sm uppercase p-2 block page-scroll md:group-aria-disabled:text-white"
                href="#projects">Projet</a>
            </li>
            <li class="leading-3 transition-all duration-100 hover:text-light-gold">
              <a class="nav-link font-semibold text-sm uppercase p-2 block page-scroll md:group-aria-disabled:text-white"
                href="#formations">Formations</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section id="about" class="min-h-screen flex flex-col gap-4">
      <Profil :presentation="data.presentation" class="mt-8 mx-auto"
        :label="data.lang === 'fr' ? 'Profil personnel' : 'Personal profil'" />

    </section>
    <section id="experiences" class="min-h-screen flex flex-col gap-4">

      <div class="max-w-4xl mx-auto">
        <Skills :skills="data.skills" :label="data.lang === 'fr' ? 'Compétences principales' : 'Mainly skills'" />
      </div>
    </section>

    <section id="projects" class="min-h-screen flex flex-col gap-4">
      <!-- <div class="max-w-4xl mx-auto">
        <Skills :skills="data.skills" :label="data.lang === 'fr' ? 'Compétences principales' : 'Mainly skills'" />
      </div> -->
    </section>

    <section id="formations" class="min-h-screen flex flex-col mb-12">
      <div class="w-full h-full md:mr-9 flex-grow">
        <h2 class="text-gray-600 uppercase font-semibold my-12 mx-auto text-xl text-center w-full">{{ data.lang === 'fr'
          ?
          'Mon parcours' : 'My journey' }}</h2>
        <Timeline :items="data.timeline" />
      </div>
    </section>

    <Footer />
  </div>
</template>
