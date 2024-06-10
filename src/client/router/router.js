import {createMemoryHistory, createRouter} from 'vue-router'
import {useAppStore} from "../stores/index.js";
import Base from "../components/Base.vue";

const routes = [
    {path: '/', component: Base},
    {path: '/pinia', component: () => import('../components/Pinia.vue')},
    {path: '/public', component: () => import('../components/Public.vue')},
    {path: '/admin', component: () => import('../components/Admin.vue'), meta: {requiresAuth: true}},
    {path: '/tareas', component: () => import('../components/Tareas.vue')},
]

const router = createRouter({
    history: createMemoryHistory(), routes,
})

router.beforeEach((to, from, next) => {
    const appStore = useAppStore();
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (appStore.auth !== 'admin') {
            next({path: '/public'});
        } else {
            next();
        }
    } else {
        next();
    }
})

export {router}