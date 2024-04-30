import { createMemoryHistory, createRouter } from 'vue-router'
import Base from "../components/Base.vue";


const routes = [
    { path: '/', component: Base },
// { path: '/about', component: AboutView },
]
export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})