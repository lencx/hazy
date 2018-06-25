import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './core/router'
import store from './core/store'
import i18n from './core/i18n'
import './core/ui'
import './core/registerServiceWorker'
import './core/os'

Vue.config.productionTip = false

Vue.prototype.$http = axios
// https://github.com/imcvampire/vue-axios/issues/25
Vue.use(VueAxios, axios)

// tslint:disable:no-console
// console.log(process.env.NODE_ENV === 'development')

// this.getComponentByRef("refId").updateNode(this.node)
// Vue.prototype.getComponentByRef = (vm: Vue, refId: string) => {
//     const $refs = vm.$parent ? vm.$parent.$refs : {}
//     // tslint:disable-next-line:prefer-const
//     for (let $id in $refs) {
//         if ($id === refId) return $refs[$id]
//     }
//     return null
// }

new Vue({
    i18n,
    router,
    store,
    render: h => h(App),
}).$mount('#app')
