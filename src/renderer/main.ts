import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

import './core/ui'
import './core/registerServiceWorker'
import router from './core/router'
import store from './core/store'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
