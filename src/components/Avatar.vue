<script>
export default {
    name: 'Avatar',
    props: ['lang', 'rotate_angle'],
}

</script>

<template>
    <div class="relative">
        <div class="w-60 h-60  rounded-full border-8 border-complementary overflow-hidden">
            <img src="/images/P1190065.jpg" class="max-w-full h-full object-cover" alt="photo"/>
        </div>
        <div class="w-14 h-14 absolute bottom-8 duration-300 ease-in-out right-0 rounded-full border-4 border-primary overflow-hidden cursor-pointer"
            @click="$emit('changeLang')" :style="'transform:rotateY('+rotate_angle+'deg)'">
            <img v-if="lang==='en'" src="/images/ukflag.png" class="max-w-full bg-white h-full object-cover" alt="photo"/>
            <img v-else src="/images/frenchflag.png" class="max-w-full bg-white h-full object-cover" alt="photo"/>
        </div>
    </div>
</template>