<script setup>

</script>

<template>
  <section id="portefolio" class="min-h-screen  flex w-full bg-primary-800 flex-col gap-4 pt-[10vh]">
    <div class="max-w-7xl mx-auto h-full">
      <h3 class="text-5xl mb-4 text-secondary text-center ">Portefolio</h3>

      <div class="p-5 sm:p-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 h-full mt-16 md:mt-32">
        <div class="border border-dashed border-secondary h-6 md:h-auto">
        <!-- En construction -->
        </div>
        <div class="relative overflow-hidden group hover:cursor-pointer h-full md:row-span-2 md:col-span-2">
          <a href="https://www.travelplannerbycoco.fr" target="_blank"
            class="absolute inset-0 translate-y-full transition-all duration-300 group-hover:translate-y-0 bg-secondary/50">
            <div class="flex flex-col items-center justify-center h-full text-white underline">
              travelplannerbycoco.fr
            </div>
          </a>
          <img src="/images/projects/travelplanner.png" alt="Travel Planner" class="h-full" loading="lazy" />
        </div>
        <div class="border border-dashed border-secondary md:row-span-2 h-6 md:h-auto">
        <!-- En construction -->
        </div>
        <div class="border border-dashed border-secondary h-6 md:h-auto">
        <!-- En construction -->
        </div>
      </div>
    </div>
  </section>
</template>
