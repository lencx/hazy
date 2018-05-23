import Vue from 'vue'
import App from './App.vue'

import './core/ui'
import './core/registerServiceWorker'
import router from './core/router'
import store from './core/store'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
