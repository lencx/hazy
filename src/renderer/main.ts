import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './core/router'
import store from './core/store'
import './core/ui'
import './core/registerServiceWorker'

Vue.config.productionTip = false

Vue.prototype.$http = axios
// https://github.com/imcvampire/vue-axios/issues/25
Vue.use(VueAxios, axios)

// tslint:disable-next-line:no-console
// console.log(process.env.NODE_ENV === 'development')

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
