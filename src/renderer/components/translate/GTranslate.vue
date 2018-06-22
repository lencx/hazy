<template lang="pug">
.gt-translate
    .origin-container
        GTLangBtns(
            ref='gtBtnFrom',
            @updateLang=`getData`,
            :swap=`[fromLang, 'from']`,
        )
        v-btn.gt-swap(
            icon,
            @click=`swapLang`
        )
            v-icon(large) swap_calls
        GTLangBtns(
            ref='gtBtnTo',
            @updateLang=`getData`,
            :swap=`[toLang, 'to']`,
        )
        .gt-origin
            GTInput.gt-input(
                ref='gtInput',
                @updateTxt=`getData`,
            )
                .voice
                    v-btn(
                        small, round,
                        @click=`getAudio`,
                    )
                        v-icon volume_up
                    audio(ref='audioRef', :src=`audioURI`)
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
import { gTranslate } from './../../config'

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
    // translation results
    private translateText = {}
    // origin language pronunciation
    private audioURI = ''
    // origin language
    private fromLang = localStorage.getItem(`${gTranslate.prefix}from`) || gTranslate.from
    // target language
    private toLang = localStorage.getItem(`${gTranslate.prefix}to`) || gTranslate.to

    // get translation results
    @Debounce(1500)
    private getData(this: any) {
        const txt = this.$refs.gtInput.text
        this.fromLang = this.$refs.gtBtnFrom.currLang
        this.toLang = this.$refs.gtBtnTo.currLang

        if (txt === '') {
            this.progressShow(false)
            this.translateText = {}
            return false
        }

        // console.log(fromLang, toLang)
        this.$http.get(translate(txt, {
                url: API.gTranslateText,
                from: this.fromLang,
                to: this.toLang,
            }), gtHeader)
            .then((data: any) => this.translateText = formatGTData(data.data))

        // this.audioURI = '/hello.mp3' // test
        this.audioURI = API.gTranslateAudio + getGTAudio(txt)
        this.progressShow(false)
    }

    // query progress
    private progressShow(isShow: boolean) {
        this.$store.state.progressShow = isShow
    }

    // swap language
    private swapLang(this: any) {
        const tmpLang = this.fromLang
        this.fromLang = this.toLang
        this.toLang = tmpLang
        localStorage.setItem(`${gTranslate.prefix}from`, this.fromLang)
        localStorage.setItem(`${gTranslate.prefix}to`, this.toLang)
        this.getData()
    }

    // get pronunciation
    private getAudio(this: any) {
        if (this.audioURI === '') return false
        else this.$refs.audioRef.play()
    }
}
</script>

<style lang='scss'>
.origin-container {
    // border: double 2px green;
    border-color: $grey3;
    border-width: 2px;
    border-style: dashed;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
}
.gt-swap {
    color: $grey2;
    .icon {
        transform: rotateZ(90deg)
    }
}
.gt-input {
    position: relative;
    .voice {
        position: absolute;
        bottom: -4px;
        button {
            margin: 0;
        }
    }
}
</style>