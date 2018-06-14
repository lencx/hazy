<template lang='pug'>
.gt-result(v-if=`result.examples`)
    h2 Examples:
    ul
        li(
            v-for=`(item, i) in result.examples`,
            :key=`i`,
        )
            b.num {{i+1}}
            p(v-html=`item`)
    hr
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Notice extends Vue {
    @Prop() private result!: object
}
</script>

<style lang="scss">
.gt-result {
    margin-bottom: 20px;
    ul {
        list-style: none;
        li {
            position: relative;
            padding: 5px 20px 5px 50px;
            // @include roundRight(8px);
            border-radius: 8px;
            box-shadow: 1px -2px 4px rgba(#000, .3),
                2px 3px 5px rgba(#000, .4);
            &:nth-child(3n) {
                // background: #efc;
                background: rgb(238, 252, 212);
            }
            &:nth-child(3n+1) {
                // background: #fcc;
                background: rgb(248, 225, 228);
            }
            &:nth-child(3n+2) {
                // background: #dcf;
                background: rgb(213, 235, 248);
            }
            .num {
                position: absolute;
                display: flex;
                width: 30px;
                height: 100%;
                left: 0;
                top: 0;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                box-shadow: 2px 2px 8px rgba(#000, .7);
                border-radius: 8px;
                user-select: none;
                // color: #fff;
                // text-shadow: 1px 2px 4px rgba(#000, .7);
            }
            p {
                margin: 0;
            }
        }
    }
}
</style>
