<template>
    <div class="container" style="float: right;">
        <form class="w-25 mt-5">
            <input type="text" class="form-control mb-3" placeholder="Username">
            <input type="email" class="form-control mb-3" placeholder="E-mail">
            <input type="password" class="form-control mb-3" placeholder="Password">
            <input type="password" class="form-control mb-3" placeholder="Confirm password">
            <input type="submit" class="btn btn-primary mb-3">
        </form>
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