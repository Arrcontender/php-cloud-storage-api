import './bootstrap';

import {createApp} from "vue/dist/vue.esm-bundler";
import { createRouter, createWebHistory } from 'vue-router';

import App from "./components/App.vue"
import Home from "./components/Home.vue"
import Storage from "./components/storage/Storage.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/storage', name: 'storage', component: Storage},
    ]
});

const app = createApp({
    components: {
        App
    }
});

app.use(router).mount('#app')
