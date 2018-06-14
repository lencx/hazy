<template lang='pug'>
.gt-btn
    v-layout(row, wrap, align-center)
        v-bottom-sheet(v-model='isOpen', data-app)
            v-btn.gt-lang-btn(
                round,
                color='cyan',
                slot='activator',
                :class=`isOpen ? 'arrow-active' : ''`
                @click=`isOpen = !isOpen`,
            )
                b {{langsCN[currLang]}}
                v-icon.ico(large, round) chevron_right
            v-subheader Language
            v-list-tile(
                v-for=`(lang, i) in langs`,
                :key=`i`,
                @click=`isOpen = false; currLang = i; selectedLang(currLang);`,
            ) {{langs[i]}}
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { langs, langsCN, langsDef } from './../../utils/translate/lang'
import Debounce from '../../utils/debounce';

// tslint:disable:no-console

@Component
export default class GTLangBtns extends Vue {
    // private langBtns: number = 3

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
        console.log(this)
        this.$emit('updateLang', this.currLang)
    }

    private chooseLang(currLang: string, btnLang: string) {
        this.currLang = btnLang
        this.$emit('updateLang', this.currLang)
    }

    // private enableBtn(btnLang: string, currLang: string) {
    //     return btnLang === currLang ? true : false
    // }
}
</script>

<style lang='scss'>
.gt-btn {
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
        .ico {
            transform: rotateZ(90deg);
        }
    }
    .gt-lang-btn {
        color: #fff;
        b {
            padding: 0 10px;
        }
    }
}
</style>