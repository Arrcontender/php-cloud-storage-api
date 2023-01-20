<template>
    <div class="container">
        <h1>Storage</h1>
        <div class="row">
            <div class="col-lg-4" v-for="storage in storage">
                <div class="card mt-3">
                    <div class="card-body">
                        <a href="#" class="card-body">
                        <h5 style="text-align: center;" class="card-title">STORAGE #{{ storage.id }}</h5>
                        </a>
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
            storage: [],
            errored: false,
            loading: true
        }
    },
    mounted(){
        axios.get('/api/V1/storage').then(response => {
            this.storage = response.data.data
        }).catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
    }
}
</script>