<template lang="pug">
.gt-translate
    gt-bar(
        ref='gtBarFrom',
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
    gt-bar(
        ref='gtBarTo',
        @updateLang=`getData()`,
    )
    .gt-target
        h2 Examples:
        p(v-for=`item in translateText.examples`, v-html=`item`)
        hr
        p {{translateText}}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import GtInput from './GTInput.vue'
import GtBar from './GTBar.vue'

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
        GtBar,
        GtInput,
    },
})

export default class GTranslate extends Vue {
    private translateText = ''
    private audioURI = ''

    @Debounce(1500)
    private getData(this: any) {
        const txt = this.$refs.gtInput.text
        const fromLang = this.$refs.gtBarFrom.currLang
        const toLang = this.$refs.gtBarTo.currLang

        if (txt === '') {
            this.translateText = ''
            return false
        }

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