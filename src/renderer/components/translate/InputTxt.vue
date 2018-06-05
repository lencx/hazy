<template lang="pug">
    .gt-area
        //- v-card(color='grey darken-3', flat)
        //- v-card(color='grey lighten-4', flat)
        //-     v-card-text
        //-         v-container(fluid)
        //-             v-layout(row)
        //-                 v-flex(xs12)
        v-text-field.gt-box(name='g-translate', color='pink', label='Please enter', textarea, loading='false')
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class InputTxt extends Vue { }
</script>

<style lang='scss'>
.gt-box {
    .input-group__input {
        border: solid 3px #666;
        border-radius: 8px !important;
    }
}
</style>
