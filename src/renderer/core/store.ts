import Vue from 'vue'
import Vuex from 'vuex'
import { gTranslate } from './../config'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        progressShow: false,
        // 'zh-cn' | 'en'
        gt: {
            i18nLang: localStorage.getItem(gTranslate.i18n) || 'en',
        },
    },
    mutations: {},
    actions: {},
})
