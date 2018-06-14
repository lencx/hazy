<template lang="pug">
.gt-translate
    gt-lang-btns(
        ref='gtBtnFrom',
        @updateLang=`getData()`,
    )
    .gt-origin
        gt-input(
            ref='gtInput',
            @updateTxt=`getData()`,
        )
        .voice
            v-btn(@click=`getAudio()`)
                v-icon volume_up
            audio(ref='audioRef', :src=`audioURI`)
    gt-lang-btns(
        ref='gtBtnTo',
        @updateLang=`getData()`,
    )
    gt-result(:result=`translateText`)
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import GtInput from './GTInput.vue'
import GtLangBtns from './GTLangBtns.vue'
import GtResult from './GTResult.vue'

import API from './../../api'
import Debounce from './../../utils/debounce'
import { translate, getGTAudio, formatGTData } from './../../utils/translate'

// tslint:disable:no-console
const gtHeader = {
    headers: {
        'Accept-Language': 'zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7',
    },
}

@Component({
    components: {
        GtLangBtns,
        GtInput,
        GtResult,
    },
})

export default class GTranslate extends Vue {
    private translateText: object = {}
    private audioURI = ''

    @Debounce(1500)
    private getData(this: any) {
        const txt = this.$refs.gtInput.text
        const fromLang = this.$refs.gtBtnFrom.currLang
        const toLang = this.$refs.gtBtnTo.currLang

        console.log(fromLang, toLang)
        // if (txt === '') return false

        this.$http.get(translate(txt, {
                url: API.gTranslateText,
                from: fromLang,
                to: toLang,
                // to: 'en',
                // from: 'zh-tw',
            }), gtHeader)
            .then((data: any) => this.translateText = formatGTData(data.data))

        // this.audioURI = '/hello.mp3'
        this.audioURI = API.gTranslateAudio + getGTAudio(txt)
    }

    private getAudio(this: any) {
        this.$refs.audioRef.play()
    }
}
</script>


<style lang='scss'>
// .gt-origin, .gt-target {
//     width: 40%;
//     float: left;
// }
</style>