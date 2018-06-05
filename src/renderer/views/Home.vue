<template lang='pug'>
.home
    //- notice(msg='Hi, Len!!!')
    //- tree
    toolbar
    g-translate
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Notice from '@c/Notice.vue'
import Tree from '@c/Tree.vue'
import Toolbar from '@c/Toolbar.vue'
import gTranslate from '@c/translate/GTranslate.vue'

/* tslint:disable:no-console */
console.log('Home')

@Component({
    components: {
        Notice,
        Tree,
        Toolbar,
        gTranslate,
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
