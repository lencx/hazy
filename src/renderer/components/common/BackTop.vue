<template lang="pug">
.lx-backtop(
    :class=`classes`,
    :style=`styles`,
    @click=`back`,
)
    slot
        v-btn(
            :class=`innerClasses`,
            :loading=`loading`,
            fab,
        )
            v-icon(
                large, style='display: flex'
            ) navigation

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { on, off } from './../../utils/dom'
import scrollTop from './../../utils/scrollTop'
import Debounce from './../../utils/debounce'

const prefixCls = 'lx-back-top'

// tslint:disable:no-console
@Component
export default class BackTop extends Vue {
    @Prop({default: 400}) private height!: number
    @Prop({default: 30}) private bottom!: number
    @Prop({default: 30}) private right!: number
    @Prop({default: 1000}) private duration!: number

    private backTop = false
    private loading = false

    private mounted() {
        on(window, 'scroll', this.handleScroll)
        on(window, 'resize', this.handleScroll)
    }

    private beforeDestroy() {
        off(window, 'scroll', this.handleScroll)
        off(window, 'resize', this.handleScroll)
    }

    // computed
    get classes() {
        return [
            `${prefixCls}`,
            {[`${prefixCls}-show`]: this.backTop},
        ]
    }
    get styles() {
        return {
            bottom: `${this.bottom}px`,
            right: `${this.right}px`,
        }
    }
    get innerClasses() {
        return `${prefixCls}-inner`
    }

    // methods
    @Debounce(50)
    private handleScroll() {
        const top = window.pageYOffset
        if (top === 0) this.loading = false
        this.backTop = top >= this.height
    }

    private back() {
        this.loading = true
        const sTop = document.documentElement.scrollTop || document.body.scrollTop
        scrollTop(window, sTop, 0, this.duration)
        this.$emit('click')
    }
}
</script>

<style lang='scss'>
.lx-backtop {
    position: fixed;
    transform: scale(0);
    transition: all 600ms ease;
    cursor: pointer;
    &.lx-back-top-show {
        transform: scale(1);
    }
    .lx-back-top-inner {
        color: $baseColor;
    }
}
</style>
