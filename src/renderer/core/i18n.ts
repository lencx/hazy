import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCN from './../../i18n/renderer/zh-cn'
import en from './../../i18n/renderer/en'
import { lxI18nLang } from './../config'

Vue.use(VueI18n)

const messages = {
    'zh-cn': zhCN,
    en,
}

export default new VueI18n({
    locale: localStorage.getItem(lxI18nLang) || 'en',
    messages,
})
