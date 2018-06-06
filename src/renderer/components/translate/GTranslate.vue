<template lang="pug">
.gt-translate
    gt-bar
    v-layout(row)
        v-flex.gt-origin(xs5)
            gt-input(@updateTxt='getData()')
        v-flex.gt-target(xs5)
            p {{translateText}} - 1
</template>


<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import Debounce from './../../utils/debounce'
import axios from 'axios'
import translate from './../../utils/translate'
import GtInput from './GTInput.vue'
import GtBar from './GTBar.vue'

@Component({
    components: {
        GtInput,
        GtBar,
    },
})


export default class GTranslate extends Vue {
    private translateText = ''

    @Debounce(1500)
    private getData() {
        axios.get(translate(this.$store.state.gTranslate.text, {to: 'zh-tw'}))
            .then(data => data.data)
            .then(data => {
                this.translateText = data
            })
    }



    // private mounted() {
    //     // tslint:disable-next-line:no-console
    //     console.log(this.$store.state.gTranslate.text)
    //     axios.get(translate(this.$store.state.gTranslate.text, {to: 'zh-tw'}))
    //         .then(data => data.data)
    //         .then(data => {
    //             this.translateText = data
    //         })
    //     // tslint:disable-next-line:no-console
    //     console.log(this.$store.state)
    // }
}
</script>


<style lang='scss'>
// .gt-origin, .gt-target {
//     width: 40%;
//     float: left;
// }
</style>