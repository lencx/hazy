<template lang='pug'>
.gt-bar
    v-layout(row, wrap, align-center)
        v-btn-toggle(v-model='langBtns')
            .def-lang-btn
                v-btn(
                    flat,
                    v-for=`(item, i) in langsDef`,
                    :key=`i`,
                    @click=`chooseLang(currLang, i)`,
                    :disabled=`enableBtn(i, currLang)`,
                ) {{item}}
                v-btn.gt-auto-btn(
                    flat,
                    @click=`chooseLang(currLang, 'auto')`,
                    :disabled=`enableBtn('auto', currLang)`,
                ) Auto
        v-bottom-sheet(v-model='isOpen', data-app)
            v-btn.gt-lang-btn(
                icon,
                color='cyan',
                slot='activator',
                :class=`isOpen ? 'arrow-active' : ''`
                @click=`isOpen = !isOpen`,
            )
                v-icon more
            v-subheader Language
            v-list-tile(
                v-for=`(lang, i) in langs`,
                :key=`i`,
                @click=`isOpen = false; currLang = i; selectedLang(currLang);`,
            ) {{langs[i]}}-{{i}}

        h2 {{currLang}}
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { langs, langsCN, langsDef } from './../../utils/translate/lang'
import Debounce from '../../utils/debounce';

@Component
export default class GTBar extends Vue {
    private langBtns: number = 3

    // current language
    private currLang = 'auto'
    // language list status
    private isOpen = false
    // language - english
    private langs = langs
    // language - Chinese
    private langsCN = langsCN
    // default language
    private langsDef = langsDef

    private selectedLang(lang: string) {
        const langArr = Object.keys(this.langsDef)
        let isDel = true
        langArr.forEach(i => (i === lang) ? isDel = false : void 0)

        if (!isDel) {
            this.langBtns = langArr.indexOf(lang) + 1
        } else {
            if (langArr.length === 3) {
                delete this.langsDef[langArr[0]]
                Object.assign(this.langsDef, {[lang]: langs[lang]})
                this.langBtns = 3
            }
        }

        this.$emit('updateLang', this.currLang)
    }

    private chooseLang(currLang: string, btnLang: string) {
        this.currLang = btnLang
        this.$emit('updateLang', this.currLang)
    }

    private enableBtn(btnLang: string, currLang: string) {
        return btnLang === currLang ? true : false
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
    // button[disabled] {
    //     cursor: not-allowed;
    // }
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