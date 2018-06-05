import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'

import './core/ui'
import './core/registerServiceWorker'
import router from './core/router'
import store from './core/store'

Vue.config.productionTip = false
Vue.prototype.$http = Axios
// Vue.use()

// tslint:disable-next-line:no-console
// console.log(Vue)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')


// import translate from './utils/translate'
// tslint:disable-next-line:prefer-const
// let t = translate('你好吗？')
// tslint:disable-next-line:no-console
// console.log(t)

// import tk from './utils/translate/tk'
// tslint:disable-next-line:no-console
// console.log('tkk: ', tk('你好'))

