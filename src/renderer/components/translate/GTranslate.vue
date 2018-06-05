<template lang="pug">
    .gt-translate
        v-layout(row)
            v-flex.gt-origin(xs5)
                input-txt
            v-flex.gt-target(xs5)
                p {{translateText}}
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import axios from 'axios'
import translate from './../../utils/translate'
import InputTxt from './InputTxt.vue'

@Component({
    components: {
        InputTxt,
    },
})

export default class GTranslate extends Vue {
    private translateText: string = ''

    private mounted() {
        axios.get(translate('你好'))
            .then(data => data.data)
            .then(data => {
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