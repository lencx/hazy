<template lang="pug">
.gt-area
    //- v-card(color='grey darken-3', flat)
    //- v-card(color='grey lighten-4', flat)
    //-     v-card-text
    //-         v-container(fluid)
    //-             v-layout(row)
    //-                 v-flex(xs12)
    v-text-field.gt-box(
        name='g-translate',
        color='pink',
        label='Please enter',
        textarea,
        loading=`false`,
        v-model.lazy=`text`
    )
        //- :get_text.sync='text'
        //- @change='getText',
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'


@Component
export default class InputTxt extends Vue {
    private text = ''

    @Watch('text')
    private getText() {
        // getSleep(1500)
        // tslint:disable-next-line:no-console
        // console.log(this.$store.state.gTranslate.text)
        return this.$emit('updateTxt', this.text)
        // return this.$store.state.gTranslate.text = this.text
    }
}
</script>

<style lang='scss'>
.gt-box {
    .input-group__input {
        border: solid 3px #666;
        border-radius: 8px !important;
    }
}
</style>
