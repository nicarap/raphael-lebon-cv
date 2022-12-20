<script setup>
import Skills from './components/Skills.vue';
import Footer from './components/Footer.vue';
import Profil from './components/Profil.vue';
import Experiences from './components/Experiences.vue';
import Diplomas from './components/Diplomas.vue';
import Timeline from './components/Timeline.vue';

const timeline = [
  {date:'Déc 2021 - Mars 2023', name:'TESSI RÉUNION', department:'Pôle Solution et Innovation', icon:'code', mission: 
    {
      label: 'Développeur',
      activities: [
        "Développement d'applications web",
        "Support aux utilisateurs",
        "Développement d'automate / Deamon",
        "Correction de la dette technique",
        "Vérifier la faisabilité des prototypes logiciels",
        "Correction de bugs",
        "Ajour de features",
      ]
  }, logo:'/images/tessi.jpeg'},
  {date:'Déc 2019 - Nov 2021', name:'PÔLE EMPLOI RÉUNION', department:'Appui au pilotage de la performance', icon:'code', mission: 
    {
      label: 'Développeur Web Fullstack',
      activities: [
        "Développement d'applications web",
        "Production de données à l'aide d'un ETL",
        "Amélioration des applications existantes",
        "Refonte d'application",
      ]
    }, logo:'/images/pole_emploi.png'},
  {date:'Novembre 2021', name:"Concepteur de Système d'Information", department:'3iL et l\'Ecole Régionale Supérieur du Numérique au CCI de La Réunion, ', icon:'user-graduate', logo:'images/3iL.png'},
  {date:'Juillet 2011', name:'BTS Informatique et Réseau pour l\'Industrie et les Services', icon:'user-graduate', department:'LYCÉE Roland Garros'}
]

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

        <section id="suite" class="min-h-screen flex flex-col">
          <Profil class="my-8 max-w-2xl mx-auto"/>
          <div class="w-full h-full md:mr-9 flex-grow">
            <h4 class="uppercase font-semibold my-12 mx-auto text-center w-full">Mon parcours</h4>
            <Timeline :items="timeline" />
          </div>
        </section>
        
          
        <section class="min-h-screen w-full px-4 mb-8">
            <div class="mt-8 p-2 flex justify-center">
                <div class="w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl ">
                    <div class="flex flex-col sm:flex-row gap-4">
                      <div class="flex flex-col gap-4 sm:w-1/2">
                        
                        <Skills />
                      </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer class="p-4 sm:p-8" />
    </div>
</template>
