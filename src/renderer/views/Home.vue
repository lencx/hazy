<template lang='pug'>
.home
    .slidbar
        v-navigation-drawer(
            :mini-variant.sync="mini",
            v-model="drawer",
            stateless, hide-overlay
        )
            v-toolbar.transparent(flat)
                v-list.pa-0
                    v-list-tile(avatar)
                        v-list-tile-avatar
                            img(src='logo.png')
                        v-list-tile-content
                            v-list-tile-title
                                h2 Hazy
                        v-list-tile-action
                            v-btn(icon, @click.native.stop=`mini = !mini`)
                                v-icon chevron_left
            v-list.pa-0(dense)
                v-divider
                v-list-tile.menu-item(
                    v-for=`item in menus`,
                    :key=`item.title`,
                    @click=`mini = !mini`
                )
                    v-list-tile-action
                        v-icon {{item.icon}}
                    v-list-tile-content
                        v-list-tile-title {{item.title}}
    //- notice(msg='Hi, Len!!!')
    //- tree
    //- toolbar
    .container(:class=`!mini ? 'open' : ''`)
        g-translate
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Notice from '@c/common/Notice.vue'
import Tree from '@c/common/Tree.vue'
import Toolbar from '@c/common/Toolbar.vue'
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

export default class Home extends Vue {
    private drawer = true
    private mini = true

    private menus = [
        {title: 'Dashboard', icon: 'dashboard'},
        {title: 'Google Translate', icon: 'g_translate'},
    ]
}

</script>

<style lang='scss'>
.home {
    color: #333;
    font-size: 20px;
    >div {
        float: left;
    }
    .slidbar {
        height: calc(100vh - 20px);
    }
    .container {
        width: calc(100% - 80px);
        &.open {
            width: calc(100% - 300px);
        }
    }
    .menu-item {
        cursor: pointer;
    }
}
</style>
