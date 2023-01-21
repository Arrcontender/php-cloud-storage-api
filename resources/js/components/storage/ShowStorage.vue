<template>
    <div class="container">
        <div class="mb-3">
            <input type="text" v-model="storage.id" class="form-control">
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: [
        'storageId'
    ],
    data(){
        return {
            storage: null
        }
    },
    mounted(){
        axios.get('/api/V1/storage/' + this.storageId).then(response => {
            this.storage = response.data.data
        }).catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
    }
}
</script>