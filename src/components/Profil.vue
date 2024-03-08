<script setup>
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, onUnmounted } from "vue";

gsap.registerPlugin(ScrollTrigger)

let ctx

onMounted(() => {
  ctx = gsap.context(() => {

    gsap.to(".box", {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".boxes",
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true
      },
    });
  })
})

onUnmounted(() => {
  ctx.revert(); // <- revert your animation when it unmounts
});

</script>

<template>
  <section id="about" class="boxes flex flex-col gap-4 relative w-full bg-gray-50 z-20">
    <div class="max-w-7xl w-full mx-auto px-6 -top-4 pb-16 relative text-center">
      <div class="flex flex-no-wrap justify-center items-center gap-16">
        <div class="box bg-white rounded border flex-1 border-primary-50 shadow-xl shadow-primary-200 p-4"
          aria-translate="45">
          <div class="w-16 h-16 bg-primary-900 rounded-full mb-8 mx-auto flex items-center justify-center">
            <fa class="text-primary-200 rounded-full" size="xl" icon="wand-magic-sparkles" />
          </div>
          <h3 class="text-2xl mb-4 text-primary-700 font-semibold">UI/UX Design</h3>
          <p class="text-gray-500  text-justify font-sans">
            De la conceptualisation à la réalisation,
            je vous accompagne dans la création d'interfaces esthétiques et fonctionnelles,
            conçues pour offrir une expérience utilisateur exceptionnelle
          </p>
        </div>
        <div class="box bg-white rounded border flex-1 border-primary-50 shadow-xl shadow-primary-200 p-4 w-full max-w-md"
          aria-translate="60">
          <div class="w-16 h-16 bg-primary-900 rounded-full mb-8 mx-auto flex items-center justify-center">
            <fa class="text-primary-200 rounded-full" size="xl" icon="code" />
          </div>
          <h3 class="text-2xl mb-4 text-primary-700 font-semibold">Développement d'application Web</h3>
          <p class="text-gray-500 text-justify font-sans">
            Que vous cherchiez à optimiser vos processus internes, à améliorer l'engagement client ou à lancer une
            plateforme innovante,
            je m'engage à transformer vos idées en solutions numériques performantes et sécurisées.
          </p>
        </div>
        <div class="box bg-white rounded border flex-1 border-primary-50 shadow-xl shadow-primary-200 p-4"
          aria-translate="50">
          <div class="w-16 h-16 bg-primary-900 rounded-full mb-8 mx-auto flex items-center justify-center">
            <fa class="text-primary-200 rounded-full" size="xl" icon="thumbs-up" />
          </div>
          <h3 class="text-2xl mb-4 text-primary-700 font-semibold">Community manager</h3>
          <p class="text-gray-500  text-justify font-sans">
            Par mon expertise, je vous aide à développer votre présence en ligne à travers des stratégies de communication
            authentiques et personnalisées
          </p>
        </div>

      </div>
    </div>
  </section>
</template>
