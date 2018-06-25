<template lang='pug'>
.gt-btn
    v-bottom-sheet(v-model='isOpen', data-app)
        v-btn.gt-lang-btn(
            round, color='cyan', slot='activator',
            :class=`isOpen ? 'arrow-active' : ''`
            @click=`isOpen = !isOpen`,
        )
            b {{btnLang[currLang]}}
            v-icon.ico(large, round) chevron_right
        v-subheader {{$t('lang')}}
        v-list-tile(
            v-for=`(lang, i) in langs`, :key=`i`,
            @click=`isOpen = false; currLang = i; selectedLang(currLang);`,
        ) {{btnLang[i]}}
</template>

<script lang='ts'>
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

import { langs, langsCN } from './../../utils/translate/lang'
import Debounce from './../../utils/debounce'
import { gTranslate } from './../../config'
import { IObjStr } from 'common'

// tslint:disable:no-console

@Component
export default class GTLangBtns extends Vue {
    // swap language
    @Prop() private swap!: string[]

    // current language
    private currLang = this.swap[0]
    // language list status
    private isOpen = false
    // language - english
    private langs = langs

    get btnLang() {
        return this.$store.state.i18nLang === 'en'
            ? langs : langsCN
    }

    // choose a language
    private selectedLang(lang: string) {
        localStorage.setItem(`${gTranslate.prefix}${this.swap[1]}`, lang)
        this.$emit('updateLang', this.currLang)
    }

    // watch: switch language
    @Watch('swap')
    private switchLang() {
        this.currLang = this.swap[0]
    }
}
</script>

<style lang='scss'>
.gt-btn {
    display: inline-block;
    // margin: 10px 0 0;
    button {
        margin: 0;
        text-transform: capitalize;
    }
    // button[disabled] {
    //     cursor: not-allowed;
    // }
    .bottom-sheet.dialog {
        overflow-y: auto;
        background: $grey4;
        .list__tile {
            &:hover {
                background: $blue1;
                color: #fff;
                font-weight: bold;
            }
        }
    }
    .arrow-active {
        background-color: $grey2 !important;
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