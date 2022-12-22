<script>
import Card from './Card.vue';

export default {
    name: 'Presentation',
    components: { Card },
    props:{
        presentation: Object,
    }
}

</script>

<template>
    <Card :title="presentation.label">        
        <p v-for="text in presentation.items" class="mb-3 font-normal">
            {{ text}}
        </p>
    </Card>

</template>