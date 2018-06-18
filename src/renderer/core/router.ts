import Vue from 'vue'
import Router from 'vue-router'

import { homeRoute } from '../route/home'

const routes = [{
    path: '*',
    redirect: '/home/dashboard',
}]

routes.push(homeRoute)

Vue.use(Router)

/* tslint:disable:no-console */
console.log('router')

export default new Router({
    mode: 'history',
    routes,
})
