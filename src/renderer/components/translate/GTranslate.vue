<template lang="pug">
.gt-translate
    GTLangBtns(
        ref='gtBtnFrom',
        @updateLang=`getData()`,
    )
    .gt-origin
        GTInput(
            ref='gtInput',
            @updateTxt=`getData()`,
        )
        .voice
            v-btn(@click=`getAudio`)
                v-icon volume_up
            audio(ref='audioRef', :src=`audioURI`)
    GTLangBtns(
        ref='gtBtnTo',
        @updateLang=`getData()`,
    )
    GTResult(:result=`translateText`)
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import GTInput from './GTInput.vue'
import GTLangBtns from './GTLangBtns.vue'
import GTResult from './GTResult.vue'

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
        GTLangBtns,
        GTInput,
        GTResult,
    },
})

export default class GTranslate extends Vue {
    private translateText = {}
    private audioURI = ''

    @Debounce(1500)
    private getData(this: any) {
        const txt = this.$refs.gtInput.text
        const fromLang = this.$refs.gtBtnFrom.currLang
        const toLang = this.$refs.gtBtnTo.currLang

        // console.log(fromLang, toLang)
        this.$http.get(translate(txt, {
                url: API.gTranslateText,
                from: fromLang,
                to: toLang,
            }), gtHeader)
            .then((data: any) => this.translateText = formatGTData(data.data))

        // this.audioURI = '/hello.mp3' // test
        this.audioURI = API.gTranslateAudio + getGTAudio(txt)
        this.$store.state.progressShow = false
    }

    private getAudio(this: any) {
        if (this.audioURI === '') return false
        else this.$refs.audioRef.play()
    }
}
</script>


<style lang='scss'>
// .gt-origin, .gt-target {
//     width: 40%;
//     float: left;
// }
</style>