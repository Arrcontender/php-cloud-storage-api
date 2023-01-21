<template>
    <div class="container">
        <div class="form-group">
            <input type="text" @blur="saveName" v-model="name" class="form-control" :class="{ 'is-invalid': $v.name.$error }">
            <div class="invalid-feedback" v-if="!$v.name.required">
                Required field!
            </div>
            <div class="invalid-feedback" v-if="!$v.name.maxLength">
                Maximum characters: {{ $v.name.$params.maxLength.max }}
            </div>
        </div>
        <div class="alert alert-danger" role="alert" v-if="errored">
                Error while change folder name!
        </div>
        <div class="spinner-border" style="width: 4rem; height: 4rem;" role="status" v-if="loading">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { useVuelidate } from '@vuelidate/core'
import { required, maxLength } from '@vuelidate/validators'

export default {
    props: [
        'folderId'
    ],
    data(){
        return {
            name: null,
            errored: false,
        }
    },
    methods: {
        saveName(){
            this.$v.$touch()
            if(this.$v.$anyError){
                return;
            }
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
    mounted(){
        axios.get('/api/V1/folder/'+this.folderId).then(response => {
            this.name = response.data.data.name
        }).catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
    },
    validations() {
        return {
            name: { required, maxLength: maxLength(255) }
        }
    }
}
</script>