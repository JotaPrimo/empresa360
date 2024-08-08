<template>
    <div>
        <h1>{{ title }}</h1>
        <h3>Site</h3>
        <p>{{ description }}</p>
        <router-link to="/login">Login</router-link>
    </div>
</template>

<script>
export default {
    name: "SitePage",
    data() {
        return {
            title: 'Pagina do Site',
            description: 'Um texto qualquer'
        }
    },
    
}
</script>