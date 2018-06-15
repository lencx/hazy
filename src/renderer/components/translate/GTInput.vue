<template lang="pug">
.gt-area
    v-text-field.gt-box(
        name='g-translate',
        color='pink',
        label='Please enter',
        textarea,
        loading=`false`,
        v-model.lazy=`text`,
        counter=5000,
    )
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'

@Component
export default class GTInput extends Vue {
    private text = ''

    @Watch('text')
    private getText() {
        this.$store.state.progressShow = true
        this.$emit('updateTxt', this.text)
    }
}
</script>

<style lang='scss'>
.gt-box {
    width: 100%;
    .input-group__input {
        border: solid 3px #666;
        border-radius: 8px !important;
    }
}
</style>
