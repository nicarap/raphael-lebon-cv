<template>
    <div v-for="(item, index) in items" ref="timeline" class="grid grid-cols-1 md:grid-cols-2 px-4 group" :data-loaded="false" :id="index">
        <div class="opacity-0 md:flex justify-end text-end relative transition-all ease-in-out duration-300" :id="'left_side_'+index"> <!-- TODO --> 
            <div v-if="(index+1)%2" class="w-full absolute top-10 pr-4">
                <span class="group-hover:font-semibold">{{item.date}}</span>
            </div>
            <div v-else class="p-2">
                <Card :item="item" orientation="left" class="hidden md:flex"/>
            </div>
        </div>
        
        <div class="flex relative w-full">
            <div class="w-1 border-2 mx-4 border-primary bg-primary"></div>
            <span class="w-8 h-8 rounded-full justify-center items-center absolute left-0 border-2 top-10 transition-all ease-in-out duration-300
            border-secondary bg-secondary group-hover:bg-complementary group-hover:border-primary flex opacity-0" :id="'dot_'+index"> <!-- TODO --> 
                <fa :icon="item.icon" class="text-complementary group-hover:text-primary" />
            </span>

            <div class="p-2 w-full sm:w-auto opacity-0 transition-all ease-in-out duration-300" :id="'rigth_side_'+index"> <!-- TODO --> 
                <Card v-if="(index+1)%2" :item="item" />
                <div v-else class="w-full md:absolute top-10 pr-4">
                    <Card :item="item" orientation="left" class="md:hidden flex"/>
                    <span class="hidden md:block group-hover:font-semibold">{{item.date}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from './Timeline/Card.vue';

export default {
    name:'Timeline',
    props:{items:Array},
    components:{Card},
    created (){
        window.addEventListener('scroll', this.onScroll);
    },
    destroyed (){
        window.removeEventListener('scroll', this.onScroll);
    },
    methods:{
        onScroll(event){
            let innerHeight = window.innerHeight === 0 ? screen.availWidth : window.innerHeight;
            
            this.$refs['timeline'].forEach((time_event) => {
                // let time_event = parent.firstElementChild;
                let elHeight = time_event.getBoundingClientRect().top;
                
                if(elHeight - innerHeight < -200 && time_event.getAttribute('data-loaded') === 'false' ){
                    let id = time_event.getAttribute('id')
                    document.getElementById('dot_'+id).classList.remove('opacity-0')
                    document.getElementById('left_side_'+id).classList.remove('opacity-0')
                    document.getElementById('rigth_side_'+id).classList.remove('opacity-0')
                //     time_event.setAttribute('data-loaded', true)
                //     time_event.classList.remove('hidden')
                //     time_event.classList.add('grid')
                }
            })
        }
    }
}

</script>