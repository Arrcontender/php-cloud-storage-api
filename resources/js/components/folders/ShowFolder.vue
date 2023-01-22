<template>
    <div class="container">
        <div class="form-group">
            <input type="text" @blur="saveName" v-model="name" class="form-control">
        </div>
        <div class="alert alert-danger" role="alert" v-if="errored">
                Field is required!
        </div>
        <div class="spinner-border" style="width: 4rem; height: 4rem;" role="status" v-if="loading">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: [
        'folderId'
    ],
    data() {
        return {
            name: null,
            errored: false,
        }
    },
    methods: {
        saveName(){
            axios.post('/api/V1/folder/'+this.folderId, {
                _method: 'PUT',
                name: this.name,
            }).then(response => {

        }).catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
        }
    },
    mounted() {
        axios.get('/api/V1/folder/'+this.folderId).then(response => {
            this.name = response.data.data.name
        }).catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
    },
}
</script>