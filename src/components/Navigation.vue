<script setup>
</script>

<template>
  <nav class="w-full flex items-center group z-50 bg-primary-700 shadow x-2 py-8 sticky top-0 max-h-[7vh] px-16">
    <a class="text-light-gold text-gray-100 font-semibold text-3xl leading-4 no-underline page-scroll"
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
            <a class="page-scroll font-semibold text-xl uppercase nav-link p-2 block text-gray-100 hover:text-primary-950"
              href="#home">Accueil</a>
          </li>
          <li class="leading-3 transition-all duration-100 hover:text-light-gold">
            <a class="nav-link font-semibold text-xl uppercase p-2 block page-scroll text-gray-100 hover:text-primary-950"
              href="#reviews">Témoignage</a>
          </li>
          <li class="leading-3 transition-all duration-100 hover:text-light-gold">
            <a class="nav-link font-semibold text-xl uppercase p-2 block page-scroll text-gray-100 hover:text-primary-950"
              href="#portefolio">Portefolio</a>
          </li>
          <li class="leading-3 transition-all duration-100 hover:text-light-gold">
            <a class="nav-link font-semibold text-xl uppercase p-2 block page-scroll text-gray-100 hover:text-primary-950"
              href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
