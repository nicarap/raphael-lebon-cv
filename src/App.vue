<script setup>
import Skills from './components/Skills.vue';
import Footer from './components/Footer.vue';
import Profil from './components/Profil.vue';
import Experiences from './components/Experiences.vue';
import Diplomas from './components/Diplomas.vue';

</script>

<template>
    <div class="flex flex-col justify-center items-center w-full scroll-smooth font-sherif bg-complementary">        
        <section class="w-full h-screen flex flex-col justify-between items-center">
          <div class="w-full h-full">
            <div class="h-1/3 bg-primary w-full"></div>
            <div class="-top-28 w-full relative flex flex-col items-center gap-4 px-4 h-full">
              <div class="w-60 h-60 overflow-hidden rounded-full border-8 border-complementary">
                  <img src="/images/P1190065.jpg" class="max-w-full h-full object-cover" alt="photo"/>
              </div>

              <div class="text-center">
                  <h1 class="text-5xl text-center text-gray-700"><strong>Raphaël LEBON</strong></h1>
                  <h2 class="text-xl mb-12 text-gray-700">Développeur Web / Mobile Full Stack</h2>
              </div>
            </div>
          </div>
          <div>
            <a href="#suite" class="m-2">
                <div class="p-2 h-10 w-10 flex justify-center animate-bounce border-2 rounded-full border-primary">
                    <fa class="text-primary" :icon="['fa', 'chevron-down']" />
                </div>
            </a>
          </div>
        </section>
        
        <section id="suite" class="min-h-screen w-full px-4 mb-8">
            <div class="mt-8 p-2 flex justify-center">
                <div class="w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl ">
                    <div class="flex flex-col sm:flex-row gap-4">
                      <div class="flex flex-col gap-4 sm:w-1/2">
                        <Profil />
                        <Skills />
                      </div>
                      <div class="flex flex-col gap-4 sm:w-1/2">
                        <Experiences />
                        <Diplomas />
                      </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer class="p-4 sm:p-8" />
    </div>
</template>
