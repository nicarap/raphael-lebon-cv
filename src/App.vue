<script>
import Skills from './components/Skills.vue';
import Footer from './components/Footer.vue';
import Profil from './components/Profil.vue';
import Timeline from './components/Timeline.vue';
import {messages} from './messages.js';
import LangButton from './components/LangButton.vue';
import Avatar from './components/avatar.vue';

export default {
  name: 'app',
  components:{
    Skills,
    Footer,
    Profil,
    LangButton,
    Timeline, Avatar
  },
  data(){
    return{
      data:{
        lang:'fr',
        timeline: messages.fr.timeline,
        title: messages.fr.title,
        skills: messages.fr.skills,
        presentation: messages.fr.presentation,
      },
      rotate_angle:"0",
    }
  },
  methods:{
    changeLang(){
      this.data.lang = this.data.lang === 'en' ? 'fr' : 'en'
    }
  },
  watch:{
    'data.lang':{
      handler(lang){
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
    <div class="flex flex-col justify-center items-center w-full scroll-smooth font-sherif bg-complementary">        
        <section class="w-full h-screen flex flex-col justify-between items-center">
          <div class="w-full h-full">
            <LangButton class="hidden sm:block" :lang="data.lang" @changeLang="changeLang"/>
            <div class="h-1/3 bg-primary w-full"></div>
            <div class="-top-28 w-full relative flex flex-col items-center gap-4 px-4 h-full">
              <Avatar :lang="data.lang" :rotate_angle="rotate_angle" @changeLang="changeLang"/>
              <div class="text-center">
                  <h1 class="text-5xl text-center text-gray-700"><strong>Raphaël LEBON</strong></h1>
                  <h2 class="text-xl mb-12 text-gray-700">{{data.title}}</h2>
              </div>
            </div>
          </div>
          <div>
            <a href="#skills" class="m-2">
                <div class="p-2 h-10 w-10 flex justify-center animate-bounce border-2 rounded-full border-primary">
                    <fa class="text-primary" :icon="['fa', 'chevron-down']" />
                </div>
            </a>
          </div>
        </section>

        <section id="skills" class="min-h-screen flex flex-col gap-4">
          <Profil :presentation="data.presentation" class="mt-8 mx-auto" :label="data.lang === 'fr' ? 'Profil personnel' : 'Personal profil'"/>
          <div class="max-w-4xl mx-auto">
            <Skills :skills="data.skills" :label="data.lang === 'fr' ? 'Compétences principales' : 'Mainly skills'"/>
          </div>

        </section>
        <section class="min-h-screen flex flex-col mb-12">
          <div class="w-full h-full md:mr-9 flex-grow">
            <h2 class="text-gray-600 uppercase font-semibold my-12 mx-auto text-xl text-center w-full">{{data.lang === 'fr' ? 'Mon parcours' : 'My journey'}}</h2>
            <Timeline :items="data.timeline" />
          </div>
        </section>
        <Footer class="p-4 sm:p-8" />
    </div>
</template>
