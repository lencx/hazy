<template lang='pug'>
.gt-result(v-if=`isShow`)
    h2 Examples:
    // p {{result.src}}
    // p {{result.sentences}}
    // p {{result.dict}}
    // p {{result.definitions}}
    // p {{result.synsets}}
    // p {{result.related_words}}
    // ul.list-bg-color.list-shadow.list-skew
    ul.list-line.list-skew
        li(v-for=`(item, i) in result.examples`, :key=`i`)
            b.num {{i+1}}
            p(v-html=`item`)
    // hr
    p {{result}}
    p
        b IPv4 =>
            span {{ipAddr.IPv4}}
    p
        b IPv6 =>
            span {{ipAddr.IPv6}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ipAddress from './../../utils/getIP'

@Component
export default class Notice extends Vue {
    // translation results
    @Prop() private result!: object
    // the result is not empty, the value is `true`
    private hasResult = false

    // whether to show results
    get isShow() {
        return this.hasResult = Object.keys(this.result).length === 0
            ? false : true
    }

    get ipAddr() {
        const a = JSON.parse(`${localStorage.getItem('OS_INFO')}`)
        return ipAddress(a.IPS)
    }
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
            // border-radius: 8px;
            @include roundLeft(8px);
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
                // border-radius: 8px;
                @include roundLeft(8px);
                user-select: none;
                // color: #fff;
                // text-shadow: 1px 2px 4px rgba(#000, .7);
            }
            p {
                margin: 0;
            }
        }
        &.list-skew {
            li {
                &:nth-child(2n) {
                    transform: skew(-8deg);
                    p {
                        transform: skew(10deg);
                    }
                }
                &:nth-child(2n+1) {
                    transform: skew(8deg);
                    p {
                        transform: skew(-10deg);
                    }
                }
            }
        }
        &.list-shadow {
            li {
                box-shadow: 1px -2px 4px rgba(#000, .3),
                    2px 3px 5px rgba(#000, .4);
                .num {
                    box-shadow: 2px 2px 8px rgba(#000, .7);
                }
            }
        }
        &.list-line {
            li {
                border: solid 1px #eee;
                .num {
                    border-right: solid 1px #ddd;
                }
                margin-bottom: 2px;
            }
        }
        &.list-bg-color {
            li {
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
            }
        }
    }
}
</style>
