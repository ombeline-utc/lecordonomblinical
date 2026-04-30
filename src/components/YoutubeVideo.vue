<template>
    <div class="video-wrapper">
        <iframe 
            :src="embedUrl" 
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-white; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
    </div>
</template>

<script setup>
import { computed

 } from 'vue';

 import YoutubeStyle from '/public/assets/youtubevideo.css'

 const props = defineProps({
  videoId: String
})

const embedUrl = computed(() =>
  `https://www.youtube.com/embed/${props.videoId}`
)
</script>


