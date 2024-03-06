<script setup>

</script>

<template>
  <section id="contact" class="w-full bg-primary-800 py-16">
    <div class="relative  mx-auto max-w-2xl w-full">

      <h3 class="text-4xl mb-4 text-center text-gray-200">Contact</h3>

      <span class="text-primary-100 text-center font-sans">N'hésitez pas à prendre contact avec moi afin que nous
        puissions échanger autour d'un café !</span>

      <div class="grid grid-cols-3 py-16 gap-8">
        <a href="https://web.whatsapp.com/send?phone=262692471345" class="group" target="_blank"
          title="+262 692 47 13 45">
          <div class="bg-primary-700 w-full rounded-md p-4 shadow-xl group-hover:bg-primary-500/25">
            <div class="text-center">WhatsApp</div>
            <div class="flex items-center h-full justify-center p-4">

              <div class="bg-primary-200 p-4 w-12 h-12 rounded-full flex items-center justify-center">
                <fa class="text-gray-700 rounded-full text-primary-800" size="xl" icon="phone" />
              </div>
            </div>
          </div>
        </a>
        <a href="mailto:nicarap@hotmail.com" class="group" title="nicarap@hotmail.com">
          <div class="bg-primary-700 bg-opacity-75 w-full rounded-md p-4 shadow-xl group-hover:bg-primary-500/25">
            <div class="text-center">eMail</div>
            <div class="flex items-center h-full justify-center p-4">

              <div class="bg-primary-200 p-4 w-12 h-12 rounded-full flex items-center justify-center">
                <fa class="text-gray-700 rounded-full text-primary-800" size="xl" icon="envelope" />
              </div>
            </div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/raphael-lebon-81606918b" class="group" target="_blank"
          title="raphael-lebon-81606918b">
          <div class="bg-primary-700 bg-opacity-75 w-full rounded-md p-4 shadow-xl group-hover:bg-primary-500/25">
            <div class="text-center">LinkedIn</div>
            <div class="flex items-center h-full justify-center p-4">

              <div class="bg-primary-200 p-4 w-12 h-12 rounded-full flex items-center justify-center">
                <fa class="text-gray-700 rounded-full text-primary-800" size="xl" :icon="['fab', 'linkedin-in']" />
              </div>
            </div>
          </div>
        </a>
      </div>

    </div>
  </section>
</template>
