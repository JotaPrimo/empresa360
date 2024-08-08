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

export default router

