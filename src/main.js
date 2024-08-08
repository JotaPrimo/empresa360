import { createApp } from 'vue'
import App from './App.vue'


// é no mais .js que configura
// inicio das rotas
import { createRouter, createWebHashHistory } from 'vue-router'

// componentes
import HomePage from './views/HomePage.vue'
import LoginPage from './views/LoginPage.vue'



const routes = [
    {
        path: '/home',
        component: HomePage
    },
    {
        path: '/login',
        component: LoginPage
    }
]

// aplicando rotas ao contexto do vue
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

//fim das rotas
const Vue = createApp(App)
Vue.use(router)
Vue.mount('#app')

