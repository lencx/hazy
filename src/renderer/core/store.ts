import Vue from 'vue'
import Vuex from 'vuex'
import { lxI18nLang } from './../config'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        progressShow: false,
        // 'zh-cn' | 'en'
        i18nLang: localStorage.getItem(lxI18nLang) || 'en',
    },
    mutations: {},
    actions: {},
})
