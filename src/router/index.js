import {createRouter, createWebHistory} from "vue-router"
import MaisonView from "@/views/MaisonView.vue"
import CopiView from "@/views/CoPi/CopiView.vue"
import CopiVideoView from "@/views/CoPi/CopiVideoView.vue"
import PPView from "@/views/PuzzlePathogene/PPView.vue"
import PP2020 from "@/views/PuzzlePathogene/PP2020.vue"
import PP2021 from "@/views/PuzzlePathogene/PP2021.vue"
import PP2022 from '@/views/PuzzlePathogene/PP2022.vue'
import PP2023 from '@/views/PuzzlePathogene/PP2023.vue'
import PP2024 from '@/views/PuzzlePathogene/PP2024.vue'
import PP2025 from '@/views/PuzzlePathogene/PP2025.vue'

const routes = [
    {
        path: "/",
        name: "maison",
        component: MaisonView
       },
       {
        path: "/copi",
        name: "coléoptère pirouette",
        component: CopiView,
       },
       {
        path: '/copi/:slug',
        name: "capsule coPi",
        component: CopiVideoView,
        props: true    
        },
       {
        path:"/puzzlepathogene",
        name: "puzzle pathogène",
        component: PPView,
        children: [
            {
                path: '2020',
                name: 'journal de 2020',
                component: PP2020,
            },
            {
                path: '2021',
                name: 'journal de 2021',
                component: PP2021
            },
            {
                path: '2022',
                name: 'journal de 2022',
                component: PP2022
            },
            {
                path: '2023',
                name: 'journal de 2023',
                component: PP2023
            },
            {
                path: '2024',
                name: 'journal de 2024',
                component: PP2024
            },
            {
                path: '2025',
                name: 'journal de 2025',
                component: PP2025
            }
        ]
       }
]

const router= createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition){
        return {top:0};
    }
});

export default router