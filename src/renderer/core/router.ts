import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home.vue'
import GTranslate from './../components/translate/GTranslate.vue'

Vue.use(Router)

/* tslint:disable:no-console */
console.log('router')

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '/home/dashboard',
                    // component: Dashboard,
                },
                {
                    path: '/home/translate',
                    name: 'gtranslate',
                    component: GTranslate,
                },
            ],
        },
    ],
})
