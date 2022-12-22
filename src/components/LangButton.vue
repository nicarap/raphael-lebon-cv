<template>
    <button class="p-2 z-50 rounded-full fixed top-2 right-10" @click="changeLang">
        <span class="text-xs hover:underline">{{ this.lang === 'fr' ? 'Switch to english' : 'Passer en français' }}</span>        
    </button>
</template>

<script>
    export default {
        name: 'LangButton',
        props:{
            lang:String,
        },
        methods:{
            changeLang(lang){
                this.$emit('changeLang', lang);
            }
        }
    }
</script>