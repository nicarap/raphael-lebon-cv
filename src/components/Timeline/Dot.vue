<template>
    <span class="w-8 h-8 mx-2 sm:mx-0 rounded-full justify-center items-center absolute -left-4 border-2 top-10 transition-all ease-in-out duration-300
        border-secondary bg-secondary group-hover:bg-complementary group-hover:border-primary flex" :class="classes" :id="'dot_'+index"> <!-- TODO --> 
        <fa :icon="icon" class="text-complementary group-hover:text-primary" />
    </span>

</template>

<script>
export default {
    name:'Dot',
    props:{
        icon:String,
        classes:String,
        index:Number
    }
}
</script>