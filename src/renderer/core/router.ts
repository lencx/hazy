import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home.vue'

Vue.use(Router)

/* tslint:disable:no-console */
console.log('router')

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
    ],
})
