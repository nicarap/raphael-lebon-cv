<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, onUnmounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

let ctx;

const animateFrom = (elem, direction) => {
  direction = direction || 1;
  var x = 0,
    y= 100;

  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
};

const hide = (elem) => {
  gsap.set(elem, { autoAlpha: 0 });
};

onMounted(() => {
  ctx = gsap.context(() => {

    gsap.utils.toArray(".box").forEach(function(elem) {
			if(elem.getBoundingClientRect()?.top > 0){
				hide(elem); // assure that the element is hidden when scrolled into view
		  
				ScrollTrigger.create({
				  trigger: elem,
				  once: true,
				  start: "top 80%",
				  end: "bottom 50%+=100px",
				  onEnter: function() { animateFrom(elem) }, 
				});
			}
		  
		});

  });
});

onUnmounted(() => {
  ctx.revert(); // <- revert your animation when it unmounts
});
</script>

<template>
  <section
    id="services"
    class="flex flex-col gap-4 relative w-full bg-gray-50 z-20 py-8 md:pt-16 min-h-[90vh]"
  >
    <div class="px-6 md:px-32 w-full mx-auto pb-16 relative text-center">
      <div class="py-12 max-w-xl mx-auto">
        <h3 class="text-4xl mb-8">Services</h3>

        <p class="text-gray-500 font-sans">
          Quelque soit votre problématique, ensemble nous travaillerons à trouver des
          solutions innovantes pour répondre à vos besoins.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-16">
        <div class="box rounded bg-primary-200 flex-1 p-4 pt-12 gs_reveal_fromLeft w-full">
          <fa
            class="text-primary-500 w-16 h-16 rounded-full mb-8"
            icon="wand-magic-sparkles"
          />
          <h3 class="text-2xl mb-4 text-primary-500 font-semibold">UI/UX Design</h3>
          <p class="text-gray-500 font-sans">
            De la conceptualisation à la réalisation, je vous accompagne dans la création
            d'interfaces esthétiques et fonctionnelles, conçues pour offrir une expérience
            utilisateur exceptionnelle
          </p>
        </div>
        <div class="box rounded bg-primary-200 flex-1 p-4 pt-12 gs_reveal_fromLeft">
          <fa class="text-primary-500 w-16 h-16 rounded-full mb-8" icon="code" />
          <h3 class="text-2xl mb-4 text-primary-500 font-semibold">
            Développement d'application Web
          </h3>
          <p class="text-gray-500 font-sans">
            Que vous cherchiez à optimiser vos processus internes, à améliorer
            l'engagement client ou à lancer une plateforme innovante, je m'engage à
            transformer vos idées en solutions numériques performantes et sécurisées.
          </p>
        </div>
        <div class="box rounded bg-primary-200 flex-1 p-4 pt-12 gs_reveal_fromRight">
          <fa class="text-primary-500 w-16 h-16 rounded-full mb-8" icon="thumbs-up" />
          <h3 class="text-2xl mb-4 text-primary-500 font-semibold">Community manager</h3>
          <p class="text-gray-500 font-sans">
            Par mon expertise, je vous aide à développer votre présence en ligne à travers
            des stratégies de communication authentiques et personnalisées
          </p>
        </div>
        <div class="box rounded bg-primary-200 flex-1 p-4 pt-12 gs_reveal_fromRight">
          <fa class="text-primary-500 w-16 h-16 rounded-full mb-8" icon="file-invoice" />
          <h3 class="text-2xl mb-4 text-primary-500 font-semibold">Gestion de projets</h3>
          <p class="text-gray-500 font-sans">
            Je vous accompagne dans l'analyse de vos besoins et dans la rédaction de
            cahier des charges et/ou techniques
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
