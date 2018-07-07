<template lang="pug">
.i18n-btn
    v-menu(offset-y, data-app)
        v-btn(
            slot='activator', icon,
            :color=`flag === '' ? 'blue' : 'white'`
        )
            v-icon(v-if=`flag === ''`) language
            img.btn-flag-ico(v-else, :src=`flag`)
        v-list.i18n-item
            v-list-tile(
                v-for=`(item, i) in i18nLangs`, :key=`i`,
                @click=`chooseI18n(item.lang)`,
            )
                v-list-tile-title
                    img.flag-ico(:src=`item.flag`)
                    span {{item.title}}
</template>


<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { gTranslate, lxI18nLang } from './../../config'
import { IObjStr } from 'common'

const flags: IObjStr = {
    'zh-cn': require('../../assets/flag/zh-cn.png'),
    'en': require('../../assets/flag/en.png'),
}

// tslint:disable:no-console

@Component
export default class I18N extends Vue {
    private flag = this.flagIco()

    private i18nLangs = [
        {title: '中文-简体', lang: 'zh-cn', flag: flags['zh-cn']},
        {title: 'English', lang: 'en', flag: flags.en},
    ]

    private flagIco() {
        const lang = localStorage.getItem(lxI18nLang)
        return lang !== null
            ? flags[lang] : ''
    }

    // choose i18n language
    private chooseI18n(lang: string) {
        // const obj: any = this.i18nLangs.find(item => item.lang === lang)
        this.flag = flags[lang]
        // console.log(this.flag)
        this.$store.state.i18nLang = lang
        this.$i18n.locale = lang
        localStorage.setItem(`${lxI18nLang}`, lang)
    }
}
</script>

<style lang="scss">
.i18n-btn {
    position: absolute;
    right: 36px;
    top: 30px;
    color: #fff;
    .btn-flag-ico {
        max-width: 36px;
        border-radius: 50%;
    }
    .menu .menu__content {
        top: 45px !important;
        right: -10px !important;
        left: unset !important;
        .list {
            background: $grey4;
            color: $baseFontColor;
            >div {
                cursor: pointer;
                &:hover {
                    background: $grey3;
                }
                .flag-ico {
                    max-width: 20px;
                    margin-right: 10px;
                }
                span {
                    vertical-align: 4px;
                }
            }
        }
    }
}
</style>

