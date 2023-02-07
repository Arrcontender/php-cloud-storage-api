<template>
    <div class="container" style="float: right;">
        <form class="w-25 mt-5">
            <input v-model="name" type="text" class="form-control mb-3" placeholder="Username">
            <input v-model="email" type="email" class="form-control mb-3" placeholder="E-mail">
            <input v-model="password" type="password" class="form-control mb-3" placeholder="Password">
            <input v-model="confirmed" type="password" class="form-control mb-3" placeholder="Confirm password">
            <input @click.prevent="addUser" type="submit" class="btn btn-primary mb-3">
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            name: '',
            email: '',
            password: '',
            confirmed: ''
        }
    },
    methods: {
        addUser() {
            axios.post('/api/V1/users', {
                name: this.name,
                email: this.email,
                password: this.password,
                confirmed: this.confirmed
            }).then(response => {
                console.log(response);
            })
        }
    },
}
</script>