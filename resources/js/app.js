import './bootstrap';

import {createApp} from "vue/dist/vue.esm-bundler";
import { createRouter, createWebHistory } from 'vue-router';

import App from "./components/App.vue"
import Home from "./components/Home.vue"
import Folders from "./components/folders/Folders.vue"
import ShowFolder from "./components/folders/ShowFolder.vue"
import Register from "./components/user/Register.vue"
import Login from "./components/user/Login.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/folders', name: 'folder', component: Folders},
        {path: '/folders/:folderId', name: 'showFolder', component: ShowFolder, props: true},
        {path: '/users/register', name: 'user.register', component: Register},
        {path: '/users/login', name: 'user.login', component: Login},

    ]
});

const app = createApp({
    components: {
        App
    }
});

app.use(router).mount('#app')
