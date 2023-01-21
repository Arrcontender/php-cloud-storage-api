import './bootstrap';

import {createApp} from "vue/dist/vue.esm-bundler";
import { createRouter, createWebHistory } from 'vue-router';

import App from "./components/App.vue"
import Home from "./components/Home.vue"
import Storage from "./components/storage/Storage.vue"
import ShowStorage from "./components/storage/ShowStorage.vue"
import Folders from "./components/folders/Folders.vue"
import ShowFolder from "./components/folders/ShowFolder.vue"
import Vuelidate from 'vuelidate';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/storage', name: 'storage', component: Storage},
        {path: '/storage/:storageId', name: 'showStorage', component: ShowStorage, props: true},
        {path: '/folders', name: 'folder', component: Folders},
        {path: '/folders/:folderId', name: 'showFolder', component: ShowFolder, props: true},

    ]
});

const app = createApp({
    components: {
        App
    }
});

app.use(router).mount('#app')
