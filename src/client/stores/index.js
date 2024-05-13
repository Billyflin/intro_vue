import {defineStore} from "pinia";

export const useAppStore = defineStore({
    id: 'app',
    state: () => ({
        dato: "Soy un dato de la store de la app",
        auth: null
    }),
    actions: {}
})