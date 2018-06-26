<template lang="pug">
.gt-area
    v-text-field.gt-box(
        name='g-translate', color='pink', :label=`$t(pleaseholder)`,
        textarea, loading=`false`, counter=2000, autofocus=true,
        v-model.lazy=`text`,
    )
    slot
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'

// tslint:disable:no-console

@Component
export default class GTInput extends Vue {
    private text = ''
    private pleaseholder = 'gt.pleaseholder'

    // watch: text content
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
