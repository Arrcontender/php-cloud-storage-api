<template>
    <div class="container" style="float: right;">
        <form class="w-25 mt-5">
            <input v-model="email" type="email" class="form-control mb-3" placeholder="E-mail">
            <input v-model="password" type="password" class="form-control mb-3" placeholder="Password">
            <input @click.prevent="login" type="submit" class="btn btn-primary mb-3">
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            axios.post('/api/V1/auth/login', {
                email: this.email,
                password: this.password
            }).then( res => {
                console.log(res.data.access_token)
            })
        }

    }
}
</script>