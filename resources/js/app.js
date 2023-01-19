import './bootstrap';

import {createApp} from "vue/dist/vue.esm-bundler";
import { createRouter, createWebHistory } from 'vue-router';

import App from "./components/App.vue"
import Home from "./components/Home.vue"
import About from "./components/About.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/about', name: ' about', component: About}
    ]
});

const app = createApp({
    components: {
        App
    }
});

app.use(router).mount('#app')
