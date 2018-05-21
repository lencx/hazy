<template lang='pug'>
.home
    notice(msg='Hi, Len!!!')
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Notice from '@/components/Notice.vue'

/* tslint:disable:no-console */
console.log('Home')

@Component({
    components: {
        Notice,
    },
})

export default class Home extends Vue {}
</script>

<style lang='scss'>
.home {
    color: #333;
    font-size: 20px;
}
</style>
