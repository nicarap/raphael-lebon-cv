<script setup>

</script>

<template>
  <section id="contact" class="px-6 w-full bg-primary-200 py-32 min-h-[95vh]">
    <div class="relative  mx-auto max-w-2xl w-full">

      <h3 class="text-4xl mb-4 text-center text-primary-800">Contact</h3>

      <span class="text-primary-700 text-center font-sans">
        N'hésitez pas à prendre contact avec moi afin que nous
        puissions échanger autour d'un café !
        </span>


        <div class="md:flex flex-wrap gap-16 items-center justify-center mt-8 sm:mt-32 py-4 sm:py-16">

          <a target="_blank" href="https://web.whatsapp.com/send?phone=262692471345" class="my-2 flex gap-2 items-center bg-primary-500 hover:bg-secondary py-2 px-4 rounded-md">
            <fa class="text-primary-800 rounded-full" icon="phone" /> 
            (+262) 692 47 13 45
          </a>

          <a target="_blank" href="mailto:nicarap@hotmail.com" class="my-2 flex gap-2 items-center bg-primary-500 hover:bg-secondary py-2 px-4 rounded-md">
              <fa class="text-primary-800 rounded-full" icon="envelope" /> 
              nicarap@hotmail.com
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/raphael-lebon-81606918b" class="my-2 flex gap-2 items-center bg-primary-500 hover:bg-secondary py-2 px-4 rounded-md">
              <fa class="text-primary-800 rounded-full" :icon="['fab', 'linkedin-in']" /> 
              Raphaël LEBON
          </a>
        </div>
    </div>
  </section>
</template>
