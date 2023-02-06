<template>
    <div class="container">
        <h1>Storage</h1>
        <form @submit.prevent="addNewFolder">
            <div class="mb-3">
                <input type="text" v-model="inputed_string" class="form-control" placeholder="Input folder name">
            </div>
            <button type="submit" class="btn btn-primary">Add folder</button>
        </form>
        <div class="row">
            <div class="col-lg-4" v-for="folder in folder">
                <div class="card mt-3">
                    <div class="card-body">
                        <router-link class="nav-item nav-link" :to="{name: 'showFolder', params: {folderId: folder.id}}">
                            <h2 style="text-align: center;" class="card-title">{{ folder.name }}</h2>
                        </router-link>
                        <button type="button" class="btn btn-danger mt-3" @click="deleteFolder(folder.id)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="alert alert-danger" role="alert" v-if="errored">
            Error while loading data!
        </div>
        <!-- <div class="spinner-border" style="width: 4rem; height: 4rem;" role="status" v-if="loading">
            <span class="visually-hidden">Loading...</span>
        </div> -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            folder: [],
            errored: false,
            loading: true,
            inputed_string: null,
            storage_id: 1
        }
    },
    methods: {
        addNewFolder() {
            axios.post('/api/V1/folder/', {
                    name: this.inputed_string,
                    storage_id: this.storage_id
                })
                .then(response => {
                    this.getAllFolders()
                }).catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },
        getAllFolders() {
            axios.get('/api/V1/folder').then(response => {
                this.folder = response.data.data
                
            }).catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
        },
        deleteFolder(id) {
            if(confirm('Are you sure you want to delete folder?')) {
                axios.post('/api/V1/folder/'+id, {
                    _method: 'DELETE'
                })
                .then(response => {
                    this.folder = []
                    this.getAllFolders()
                }).catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
            }
        }
    },
    mounted(){
        this.getAllFolders()
    }
}
</script>