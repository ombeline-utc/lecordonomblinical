<template>
    <h2 class="copiIntro"> CoPi  est  un  petit  colEoptEre  qui  pirouette  jusqu’A  ce  que  lui  tourne  la  tEte.

 Danseuse  Emotionnelle,  je  barbote  quelques  mouvements  pour  me  sentir  vivante  et  possEdEe. </h2>
    <div class="videosContainer">
        <router-link
            v-for="video in videos"
            :key="video.n"
            :to="`/copi/${video.slug}`" 
            class="videoCard"
            >
            c
            <div class="vignetteWrapper">
                <img 
                    :src="video.vignette" 
                    alt="vignette" 
                    class="videoVignette"/>
            </div>

            <h3 class="videoTitle">{{ video.name }}</h3>

        </router-link>

    </div>
    
</template>

<script>
import YoutubeVideo from '@/components/YoutubeVideo.vue'
import copiVideos from '@/ressources/youtube/copiVideos.js'

    export default{
        name: "App",
        components: {
            YoutubeVideo,
    
        },

        data() {
            return{
                videos: copiVideos,
            }
        }
    }
</script>