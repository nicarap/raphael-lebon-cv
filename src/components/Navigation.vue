<script setup>
import { onMounted, ref } from "vue";

const menuItems = ref([]);

onMounted(() => {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const hash = link.getAttribute("href").substring(1);
    if (hash !== "") {
      menuItems.value.push(hash);
    }
  });
  console.log(menuItems)

  menuItems.value.forEach((item, index) => {
    const offsetSection = document.querySelector("#" + item).offsetTop;

    document.addEventListener("scroll", () => {
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      const shouldHighlight = scrollPosition + 1 >= offsetSection;

      if (shouldHighlight) {
        navLinks.forEach((link) => {
          link.classList.remove("text-secondary");
          link.classList.remove("text-gray-100");
        });

        navLinks[index].classList.remove("text-gray-100");
        navLinks[index].classList.add("text-secondary");
      }
    });

  });
});

const open = ref(false);

const openNavBar = () => {
  open.value = !open.value
  console.log(open)
}

</script>

<template>
  <nav
    class="w-full flex items-center group z-50 bg-primary-700 shadow py-6 md:py-8 sticky top-0 max-h-[7vh] px-4 md:px-16"
  >
  <div class=" flex-1">
  <a
      class="text-light-gold text-gray-100 font-semibold text-3xl leading-4 no-underline"
      href="index.html"
      ><span class="text-secondary">RL</span></a
    >
  </div>
    
    <div
      class="max-w-7xl h-full mx-auto sm:px-4 lg:px-8 flex flex-wrap items-center lg:flex-nowrap"
    >

      <button aria-label="Open navigation bar"
        class="background-transparent rounded text-xl w-5 h-5 leading-none hover:no-underline focus:no-underline lg:hidden fill-secondary"
        type="button"
        @click="openNavBar"
      >
      <template v-if="!open">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </template>
      <template v-else>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </template>
        
      </button>

      <div
        class="md:top-0 top-12 flex-1 lg:items-center fixed right-0 w-1/2 h-[93vh] md:h-auto md:relative bg-primary-700 transition-all duration-200 md:translate-x-0"  :class="[open ? 'translate-x-0' : 'translate-x-full']"
      >
        <ul
          class="justify-center pl-0 mb-2 ml-auto flex gap-2 flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row *:tracking-wider h-full text-primary-950"
        >
          <li class="leading-3 transition-all duration-100 hover:text-light-gold">
            <a
              class="nav-link font-semibold text-xl uppercase p-2 block hover:text-secondary hover:underline transition-all duration-150"
              href="#home"
              >Accueil</a
            >
          </li>
          <li class="leading-3 transition-all duration-100 hover:text-light-gold">
            <a
              class="nav-link font-semibold text-xl uppercase p-2 block hover:text-secondary hover:underline transition-all duration-150"
              href="#services"
              >Services</a
            >
          </li>
          <li class="leading-3 transition-all duration-100 hover:text-light-gold">
            <a
              class="nav-link font-semibold text-xl uppercase p-2 block hover:text-secondary hover:underline transition-all duration-150"
              href="#portefolio"
              >Portefolio</a
            >
          </li>
          <li class="leading-3 transition-all duration-100 hover:text-light-gold">
            <a
              class="nav-link font-semibold text-xl uppercase p-2 block hover:text-secondary hover:underline transition-all duration-150"
              href="#contact"
              >Contact</a
            >
          </li>
          <li>
            <div class="hidden md:block border-0 border-l-2 border-secondary w-full h-full"></div>
          </li>
          <li class="flex flex-1 items-end md:items-center gap-2 ">
            <a target="_blank" href="https://web.whatsapp.com/send?phone=+262692471345" title="+262692471345"
              class="w-8 h-8 flex items-center justify-center"
            >
              <fa class="text-secondary" icon="phone" />
            </a>
            <a target="_blank" href="mailto:nicarap@hotmail.com" title="nicarap@hotmail.com"
              class="w-8 h-8 flex items-center justify-center"
            >
              <fa class="text-secondary" icon="envelope" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/raphael-lebon-81606918b" title="raphael-lebon-81606918b"
              class="w-8 h-8 flex items-center justify-center"
            >
              <fa class="text-secondary" :icon="['fab', 'linkedin-in']" />
            </a>
          </li>
        </ul>
      </div>
      
      
    </div>
  </nav>
</template>
