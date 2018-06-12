<template lang='pug'>
.gt-bar
    v-layout(row, wrap, align-center)
        v-btn-toggle(v-model='currectLang')
            .def-lang-btn
                v-btn(
                    v-for=`(item, i) in langsDef`,
                    :key=`i`,
                    :data-lang=`item.lang`,
                    flat,
                ) {{item}}
                v-btn(flat).gt-auto-btn Auto
        v-bottom-sheet(v-model='isOpen', data-app)
            v-btn.gt-lang-btn(
                icon,
                slot='activator',
                color='cyan',
                :class=`isOpen ? 'arrow-active' : ''`
                @click=`isOpen = !isOpen`,
            )
                v-icon more
            v-subheader Language
            v-list-tile(
                v-for=`(lang, i) in langs`,
                :key=`i`,
                @click=`isOpen = false;  selectedLang(i); chooseLang = i`,
            ) {{langsCN[i]}}

        h2 {{chooseLang}}
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { langs, langsCN, langsDef } from './../../utils/translate/lang'

@Component
export default class GTBar extends Vue {
    // current language
    private currectLang = null
    // language list status
    private isOpen = false
    // language - english
    private langs = langs
    // language - Chinese
    private langsCN = langsCN
    // default language
    private langsDef = langsDef
    // choose a language
    private chooseLang = ''

    private selectedLang(lang: string) {
        let ldef = this.langsDef
        const langArr = Object.keys(ldef)
        let isDel = true
        langArr.forEach(i => (i === lang || lang === 'auto') ? isDel = false : void 0)

        if (langArr.length === 3 && isDel) {
            delete ldef[langArr[0]]
            return ldef = Object.assign(ldef, {[lang]: langs[lang]})
        }
    }
}
</script>

<style lang='scss'>
@import '../../scss/main';
.gt-bar {
    width: 100%;
    margin: 10px;
    button {
        text-transform: capitalize;
    }
    .bottom-sheet.dialog {
        overflow-y: auto;
        background: #f4f4f4;
        .list__tile {
            &:hover {
                background: $blue1;
                color: #fff;
                font-weight: bold;
            }
        }
    }
    .arrow-active {
        background-color: #929292 !important;
    }
    .gt-lang-btn {
        color: #fff;
        box-shadow: 0 0 5px rgba(#000, .5);
    }
}
</style>