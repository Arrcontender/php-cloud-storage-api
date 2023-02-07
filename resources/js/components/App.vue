<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <div class="navbar-nav">
                    <router-link class="nav-item nav-link" to="/">Home</router-link>
                    <!-- <router-link class="nav-item nav-link" to="/storage">Storage</router-link> -->
                    <router-link class="nav-item nav-link" to="/folders">Storage</router-link>
                    <router-link class="nav-item nav-link" to="/users/login">Sign in</router-link>
                    <router-link class="nav-item nav-link" to="/users/register">Sign up</router-link>
                </div>
            </div>
        </nav>
        <div>
            <router-view></router-view>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "App"
}
</script>
