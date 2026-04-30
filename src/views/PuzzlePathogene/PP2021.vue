<template>
    <div class="annee-container">
        <img class="annee-img" style="width: 50%" :src="img2021" alt="2021">
    </div>
    <div class="frise-lunaire">
        <div class="repere-mois-container">
            <div
                v-for="(mois, index) in moisDisponibles"
                :key="mois.id"
                class="repere-mois"
                :style="{
                    left: mois.position + '%',
                    top: index % 2 === 0 ? '9rem' : '0.5rem'}"
                @click="scrollToMois(mois.id)">
                {{  mois.label }}
            </div>
        </div>
        <img 
            :src="friseBg" 
            alt="Frise Background" 
            class="frise-image"
        />
        <img 
            :src="friseColors" 
            alt="Frise Couleurs" 
            class="frise-image frise-mask"
            :style="clipStyle"/>
        <div class="frise-fade" :style="fadeStyle"></div>

    </div>
    <div class="journal-container" ref="journalContainer">
        <div class="journal-columns">
            <pre class="journal-pre" v-html="fullText"></pre>
        </div>
    </div>
    <div class="controls">
        <img 
        :src="imgPrev"
        alt="Précédent"
        class="nav-button"
        @click="prev"
        />
        <img 
        :src="imgNext"
        alt="Suivant"
        class="nav-button"
        @click="next"
        />    
    </div>    
</template>

<script>  
    import {RouterLink} from "vue-router";
    import {useRoute} from 'vue-router';
    
    import texte2021 from '@/ressources/textes/puzzlePathogene/2021.js';
    import imgPrev from '@/ressources/images/puzzlePathogene/PPPrecedent.png';
    import imgNext from '@/ressources/images/puzzlePathogene/PPSuivant.png';
    import friseBg from '@/ressources/images/puzzlePathogene/PPLunes - bg.png';
    import friseColors from '@/ressources/images/puzzlePathogene/PPLunes - couleurs.png';
    import img2021 from '@/ressources/images/puzzlePathogene/PP2021.png';

    export default{
        components: {
            RouterLink,
        },

        watch: {
            $route(to, from){
                console.log("2020!");
                console.log(imgPrev);
            }
        },

        data(){
            return{
                blocs: texte2021,
                currentScroll: 0,
                currentIndex: 0,
                columnWidth: 400,
                imgPrev,
                imgNext,
                friseBg,
                friseColors,
                progress: 0,
                moisDisponibles : [],
                img2021
            }
        },

        computed: {
            fullText() {
                return this.blocs.map(b => b.texte).join('\n\n---\n\n');
            },
            clipStyle(){
                return{
                    clipPath:`inset(0 ${100 - this.progress}% 0 0)`,
                    WebkitClipPath: `inset(0 ${100 - this.progress}% 0 0)`,
                };
            },
            fadeStyle(){
                return{
                    left: `${this.progress - 6}%`
                }
            }
        },

        methods: {
            next() {
                const container= this.$refs.journalContainer;
                const maxScroll = container.scrollWidth - container.clientWidth;
                this.currentScroll = Math.min(this.currentScroll + this.columnWidth, maxScroll);
                container.scrollTo({left: this.currentScroll, behavior: 'smooth' });
                requestAnimationFrame(() => {
                    this.updateProgressFromScroll();
                });
                console.log(this.progress);
            },
            prev() {
                const container = this.$refs.journalContainer;
                this.currentScroll = Math.max(this.currentScroll - this.columnWidth, 0);
                container.scrollTo({ left: this.currentScroll, behavior: 'smooth' });
                requestAnimationFrame(() => {
                    this.updateProgressFromScroll();
                });                console.log(this.progress)


            },
            updateProgressFromScroll(){
                const container = this.$refs.journalContainer;
                const scrollLeft = container.scrollLeft;
                const scrollMax = container.scrollWidth - container.clientWidth;

                this. progress = scrollMax > 0 ? (scrollLeft / scrollMax) * 100 : 0;
            },
            scrollToMois(moisId){
                const container = this.$refs.journalContainer;
                const moisEl = container.querySelector(`#${moisId}`);
                if (moisEl) {
                    const offset = moisEl.offsetLeft - 20;
                    container.scrollTo({left : offset, behavior: 'smooth'});
                }
            },    
        },
        
        mounted(){
            const container = this.$refs.journalContainer;

            container.addEventListener('scroll', this.updateProgressFromScroll);
            this.updateProgressFromScroll();

            this.$nextTick(() => {
                const moisElements = container.querySelectorAll('.mois');
                this.moisDisponibles = Array.from(moisElements).map(el => {
                    const rect = el.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    return {
                        id: el.id,
                        label: el.textContent.trim(),
                        offsetLeft: el.offsetLeft,
                        position: (el.offsetLeft / (container.scrollWidth - container.clientWidth)) * 100
                    };
                });
            });
        }
    
}
</script>