<template>
    <div v-for="(item, index) in items" ref="timeline" class="grid grid-cols-1 md:grid-cols-2 px-4 group" :data-loaded="false" :id="index">
        <div class="hidden md:flex mr-4 relative justify-end text-end transition-all ease-in-out duration-300" :class="transition_class.join(' ')" :id="'left_side_'+index"> <!-- TODO --> 
            <div v-if="(index+1)%2" class="w-full absolute top-10 pr-4">
                <span class="group-hover:font-semibold">{{item.date}}</span>
            </div>
            <div v-else class="p-2 hidden sm:block">
                <Card :item="item" orientation="left" class="hidden md:flex"/>
            </div>
        </div>
        
        <div class="flex relative w-full">
            <div class="w-1 border-2 mx-2 sm:ml-0 sm:mr-4  border-primary bg-primary"></div>
            <Dot :icon="item.icon"
                :classes="transition_class.join(' ')"
                :index="index" />

            <div class="p-2 w-full sm:w-auto top-2 transition-all ease-in-out duration-300" :class="transition_class.join(' ')" :id="'rigth_side_'+index"> <!-- TODO --> 
                <Card v-if="(index+1)%2" :item="item" />
                <div v-else class="w-full md:absolute top-10 sm:pr-4">
                    <Card :item="item" orientation="left" class="md:hidden flex"/>
                    <span class="hidden md:block group-hover:font-semibold">{{item.date}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from './Timeline/Card.vue';
import Dot from './Timeline/Dot.vue';

export default {
    name:'Timeline',
    props:{items:Array},
    components:{ Card, Dot },
    created (){
        window.addEventListener('scroll', this.onScroll);
    },
    destroyed (){
        window.removeEventListener('scroll', this.onScroll);
    },
    data() {
        return{
            transition_class:['opacity-0', 'pt-16'],
        }
    },
    methods:{
        onScroll(){
            let innerHeight = window.innerHeight === 0 ? screen.availWidth : window.innerHeight;
            
            this.$refs['timeline'].forEach((time_event) => {
                let elHeight = time_event.getBoundingClientRect().top;
                
                if(elHeight - innerHeight < -200 && time_event.getAttribute('data-loaded') === 'false' ){
                    let id = time_event.getAttribute('id')
                    this.transition_class.forEach((class_name) => {
                        document.getElementById('dot_'+id).classList.remove(class_name);
                        document.getElementById('left_side_'+id).classList.remove(class_name);
                        document.getElementById('rigth_side_'+id).classList.remove(class_name);
                    })
                }
            })
        }
    }
}

</script>