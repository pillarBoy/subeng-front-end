import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Check from '../pages/Check.vue';
import HashList from '../pages/HashList.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/list', component: HashList },
    { path: '/check', component: Check },
]

const router = new createRouter({
    history: createWebHistory(),
    routes
})

export default router;