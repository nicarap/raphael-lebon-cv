<script>
export default {
    name: 'Avatar',
    props: ['lang', 'rotate_angle'],
}

</script>

<template>
    <div class="relative">

      <div class="w-[20rem] h-[20rem] relative z-20">
        <img src="/images/test.png" class="max-w-full h-full object-cover" alt="photo"/>
      </div>
        <div class="w-[30rem] h-[30rem] z-10 -top-[8rem] -left-[5rem] absolute bg-primary-500 rounded-full bg-opacity-25"></div>
    </div>
</template>
