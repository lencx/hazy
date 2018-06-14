<template lang="pug">
.lx-backtop(
    :style='styles',
    @click='back',
)
    slot
        v-btn(icon)
            v-icon navigation

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { on, off } from './../../utils/dom'
import scrollTop from './../../utils/scrollTop'
// tslint:disable:no-console
@Component
export default class BackTop extends Vue {
    @Prop({default: 400}) private height!: number
    @Prop({default: 30}) private bottom!: number
    @Prop({default: 30}) private right!: number
    @Prop({default: 1000}) private duration!: number

    private backTop = false

    private mounted() {
        on(window, 'scroll', this.handleScroll)
        on(window, 'resize', this.handleScroll)
    }

    private beforeDestroy() {
        on(window, 'scroll', this.handleScroll)
        on(window, 'resize', this.handleScroll)
    }

    get styles() {
        return {
            bottom: `${this.bottom}px`,
            right: `${this.right}px`,
        }
    }

    private handleScroll() {
        this.backTop = window.pageXOffset >= this.height
    }

    private back() {
        const sTop = document.documentElement.scrollTop || document.body.scrollTop
        scrollTop(window, sTop, 0, this.duration)
        this.$emit('on-click')
    }
}
</script>

<style lang='scss'>
.lx-backtop {
    position: fixed;
}
</style>

