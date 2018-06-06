<template lang='pug'>
.gt-bar
    v-layout(row, wrap, align-center)
        v-btn-toggle(v-model='toggleExclusive')
            v-btn(
                v-for=`(item, i) in langsDef`,
                :key=`i`,
                @click=`sheet = false`,
                :data-lang=`item.lang`
            ) {{item}}
        v-bottom-sheet(v-model='sheet', data-app)
            v-btn.gt-lang-btn(
                small, round,
                slot='activator',
                color='blue',
                @click=`isShow=!isShow`
            )
                | MORE
                v-icon(dark, :class=`sheet ? 'arrow-active' : ''`) chevron_right
            v-subheader Language
            v-list-tile(
                v-for=`(lang, i) in langs`,
                :key=`i`,
                @click=`sheet = false; isShow = false; chooseLang=i`
            ) {{langsCN[i]}}

            h2 {{chooseLang}}
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import { langs, langsCN, langsDef } from './../../utils/translate/lang'

@Component
export default class GTBar extends Vue {
    private toggleExclusive = null
    private isShow = false
    private sheet = false
    private langs = langs
    private langsCN = langsCN
    private langsDef = langsDef
    private chooseLang = ''

    // private computed() { }
}
</script>

<style lang='scss'>
@import '../../scss/variable';
.gt-bar {
    button {
        text-transform: capitalize;
    }
    .dialog {
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
        transform: rotateZ(90deg);
    }
    .gt-lang-btn {
        margin: 0;
    }
}
</style>