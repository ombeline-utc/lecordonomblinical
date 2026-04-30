<template>
    <div class="videoPage">
        <div v-if="thisVideo">

            <div class="videoHeader">
                <h1 class="videoItemTitle">{{ thisVideo.name }}</h1>
            </div>
            <div class="videoFullWidth">
                <YoutubeVideo :videoId="thisVideo.id" />
            </div>
            <div class="videoDescriptionContainer">
                <pre class="videoDescriptionWrapper" v-html="thisVideo.description"></pre>
            </div>
        </div>
        <div v-else>
            <p>Vidéo introuvable</p>
        </div>
        
        <div class="controls">
            <RouterLink to="/copi">
                <img 
                    :src="imgPrev"
                    alt="Précédent"
                    class="nav-button"
                    @click="prev"
                    />    
            </RouterLink>        
        </div>
    </div>
</template>

<script>
    import { useRoute} from 'vue-router';
    import { computed } from 'vue';
    import copiVideos from '../../ressources/youtube/copiVideos.js';
    import YoutubeVideo from '../../components/YoutubeVideo.vue';
    import imgPrev from '../../ressources/images/puzzlePathogene/PPPrecedent.png';

    export default{
         components: {
            YoutubeVideo,
        },
    
        setup(){
                    const route = useRoute()
                    const thisVideo = computed(() =>
                        copiVideos.find( v=> v.slug === route.params.slug)
                    )

                    return {thisVideo}
                },
        data(){
            return{
                imgPrev
            }
        }

    }
</script>