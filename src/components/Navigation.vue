<template>
      <div class="navContainer"> 
        <ul class="siteTitle" >
            <RouterLink to="/" class="titleLink">
                <h1> OMBRE </h1>
            </RouterLink>
        </ul>
        <ul class="navBar">
            <li 
                class="menu-item" 
                v-for="link in links" 
                :key="link.id" 
                @mouseover="hoveredId = link.id"
                @mouseleave = "hoveredId = null"
            >
                <RouterLink :to="link.path" class="menu-link">
                    <img class="menu-icon" :src="link.icon"  />
                    <div class="iconText" v-if="hoveredId === link.id || $route.path.startsWith(link.path)"> 
                        {{link.text}}
                    </div>
                </RouterLink>        
            </li>
        </ul>
    </div>

  </template>
  
  <script>  
    import {RouterLink} from "vue-router";
    import {useRoute} from 'vue-router';

    import copiIcon from '@/ressources/images/accueil/copiIcon.png';
    import erocystiteIcon from '@/ressources/images/accueil/erocystite icon.png';
    import puzzlePathoIcon from '@/ressources/images/accueil/puzzle pathogene icon.png';
    import rougeglotteIcon from '@/ressources/images/accueil/rougeglotte icon.png';
    import strateIcon from '@/ressources/images/accueil/strate icon.png';
 
  export default{
    components: {
        RouterLink,
    },


    data(){
        return{
            hoveredId: null,
            links: [{
                    id:1,
                    icon: erocystiteIcon,
                    text: "Erocystite",
                    path: "/erocystite/projets",
                },
                {
                    id:2,
                    icon: copiIcon,
                    text: "Coleoptere pirouette",
                    path: "/copi",
                },
                {
                    id:3,
                    icon: rougeglotteIcon,
                    text: "Rouge glotte",
                    path: "/rougeglotte",
                },
                {
                    id:4,
                    icon: strateIcon,
                    text: "Strate, hydrate-moi",
                    path: "/strate",
                },
                {
                    id:5,
                    icon: puzzlePathoIcon,
                    text: "Puzzle pathogene",
                    path: "/puzzlepathogene",
                },
            ]
        };
    },
    /*computed: {
        isMaison(){
            return this.$route.path === '/';
        }

    },*/

    watch: {
        $route(to, from){
            console.log(to.path);
        }
    }
  
};
</script>