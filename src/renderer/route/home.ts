import Home from './../views/Home.vue'
import GTranslate from './../components/translate/GTranslate.vue'
import Dashboard from './../components/dashboard/Dashboard.vue'

export const homeRoute = {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/home/dashboard',
    children: [
        {
            path: '/home/dashboard',
            name: 'lx-dashboard',
            component: Dashboard,
        },
        {
            path: '/home/translate',
            name: 'lx-gtranslate',
            component: GTranslate,
        },
    ],
}
