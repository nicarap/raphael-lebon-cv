<script setup>

</script>

<template>
  <section id="portefolio" class="min-h-screen max-w-7xl flex w-full flex-col flex-col gap-4 pt-[10vh]">
    <h3 class="text-5xl mb-4 text-primary-200 text-center ">Portefolio</h3>

    <div class="p-5 sm:p-8">
      <div class="columns-1 gap-5 sm:gap-8 md:columns-2 lg:columns-3 [&>*:not(:first-child)]:mt-8">
        <div class="relative overflow-hidden group hover:cursor-pointer h-full">
          <a href="https://www.travelplannerbycoco.fr" target="_blank"
            class="absolute inset-0 translate-y-full transition-all duration-300 group-hover:translate-y-0 bg-primary-900/75">
            <div class="flex flex-col items-center justify-center h-full text-white underline">
              travelplannerbycoco.fr
            </div>
          </a>
          <img src="/images/projects/travelplanner.png" alt="Travel Planner" class="h-full" loading="lazy" />
        </div>
      </div>
    </div>

    <!--credit by Surjith S M -->
  </section>
</template>
