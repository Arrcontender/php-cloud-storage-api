<template>
    <div class="container">
        <h1>Storage</h1>
        <div class="row">
            <div class="col-lg-4" v-for="folder in folder">
                <div class="card mt-3">
                    <div class="card-body">
                        <router-link class="nav-item nav-link" :to="{name: 'showFolder', params: {folderId: folder.id}}">
                            <h2 style="text-align: center;" class="card-title">{{ folder.name }}</h2>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="alert alert-danger" role="alert" v-if="errored">
            Error while loading data!
        </div>
        <div class="spinner-border" style="width: 4rem; height: 4rem;" role="status" v-if="loading">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            folder: [],
            errored: false,
            loading: true
        }
    },
    mounted(){
        axios.get('/api/V1/folder').then(response => {
            this.folder = response.data.data
        }).catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
    }
}
</script>