<template>
    <router-view/>
    <div class="timeline-container">
         <img class="timeline-img" src="../../ressources/images/puzzlePathogene/PPtimeline.png" alt="frise de mes carnets">
        <RouterLink to="/puzzlepathogene/2020">
            <div 
                class="click-zone" 
                :style="{
                    top: '28%',
                    left: '4%',
                    width: '15%',
                    height: '40%',
                }"
            ></div>
        </RouterLink>
        <RouterLink to="/puzzlepathogene/2021">
            <div 
                class="click-zone"
                :style="{
                    top: '5%',
                    left: '20%',
                    width: '12%',
                    height: '44%',
                }"
             ></div>
        </RouterLink>
        <RouterLink to="/puzzlepathogene/2022">
            <div 
                class="click-zone"
                :style="{
                    top: '46%',
                    left: '33%',
                    width: '17%',
                    height: '30%',
                }"
                @click="goTo('2022')"
            ></div>
        </RouterLink>
        <RouterLink to="/puzzlepathogene/2023">
            <div 
                class="click-zone"
                :style="{
                    top: '10%',
                    left: '48%',
                    width: '23%',
                    height: '31%',
                }"
                @click="goTo('2023')"
            ></div>
        </RouterLink>
        <RouterLink to="/puzzlepathogene/2024">
            <div 
                class="click-zone"
                :style="{
                    top: '60%',
                    left: '68%',
                    width: '15%',
                    height: '35%',
                }"
                @click="goTo('2024')"
            ></div>
        </RouterLink>
        <RouterLink to="/puzzlepathogene/2025">
            <div 
                class="click-zone"
                :style="{
                    top: '14%',
                    left: '85%',
                    width: '15%',
                    height: '47%',
                }"
                @click="goTo('2025')"
            ></div>
        </RouterLink>
    </div>
</template>

<script>  
    import {RouterLink} from "vue-router";
    import {useRoute} from 'vue-router';

    export default{
        components: {
            RouterLink,
        },
    
        setup(){

            const router = useRoute()

            const goTo = (annee) => {
                router.push({name: annee});
            }
        },

     watch: {
        $route(to, from){
            console.log(to.path);
        }
    }
}
</script>