<script>

export default {
    name: 'Presentation',
    props:{
        presentation: Object,
        label:String,
    }
}

</script>

<template>
    <div class="max-w-4xl px-6 mb-6">
        <h2 class="text-gray-600 uppercase font-semibold mt-12 mx-auto text-xl text-center w-full">{{label}}</h2>
        <div class="mt-12">
            <div class="flex gap-4 flex-wrap justify-center">
                <p v-for="text in presentation.items" class="mb-3 font-normal">
                    {{ text}}
                </p>
            </div>
        </div>
    </div>
</template>