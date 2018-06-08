<template lang="pug">
.gt-translate
    gt-bar
    v-layout(row)
        v-flex.gt-origin(xs5)
            gt-input(
                ref='gtinput'
                @updateTxt=`getData()`,
            )
        v-flex.gt-target(xs5)
            p {{translateText}}
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import Debounce from './../../utils/debounce'
import { translate } from './../../utils/translate'
import GtInput from './GTInput.vue'
import GtBar from './GTBar.vue'
import API from './../../api'

const gtHeader = {
    headers: {'Accept-Language': 'zh-CN,zh;q=0.9,en-GB;q=0.8,en;q=0.7'},
}

@Component({
    components: {
        GtInput,
        GtBar,
    },
})

export default class GTranslate extends Vue {
    private translateText = ''

    @Debounce(1500)
    private getData(this: any) {
        // console.log(API.gTranslateText)
        this.$http.get(translate(this.$refs.gtinput.text, {
                url: API.gTranslateText,
                from: 'en',
                to: 'zh-tw',
            }), gtHeader)
            .then((data: any) => data.data)
            .then((data: string[]) => {
                this.translateText = data
            })
    }
}
</script>


<style lang='scss'>
// .gt-origin, .gt-target {
//     width: 40%;
//     float: left;
// }
</style>