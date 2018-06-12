<template lang='pug'>
.home
    .lx-slidbar
        v-navigation-drawer(
            :mini-variant.sync="mini",
            v-model="drawer",
            stateless, hide-overlay
        )
            v-toolbar.transparent(flat)
                v-list.pa-0
                    v-list-tile(avatar)
                        v-list-tile-avatar
                            img.logo(src='logo.png')
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
                )
                    v-list-tile-action
                        v-icon(@click=`mini = !mini`) {{item.icon}}
                    v-list-tile-content
                        v-list-tile-title {{item.title}}
    //- notice(msg='Hi, Len!!!')
    //- tree
    //- toolbar
    .lx-container(:class=`!mini ? 'open' : ''`)
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
    .lx-slidbar {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        height: 100vh;
        z-index: 9;
        box-shadow: 1px 2px 8px rgba(#000, .6);
        background-color: #f4f4f4;
        .logo {
            border: solid 1px #aaa;
        }
    }
    .lx-container {
        width: calc(100% - 120px);
        transition: all 500ms ease;
        margin-left: 120px;
        &.open {
            width: calc(100% - 340px);
            margin-left: 340px;
        }
    }
    .menu-item {
        cursor: pointer;
    }
}
</style>
