<template lang='pug'>
.drawer-layout
    .lx-slidbar
        v-navigation-drawer(
            :mini-variant.sync="mini",
            v-model="drawer",
            stateless, hide-overlay
        )
            slot(name='drawerMenu')
                v-toolbar.transparent(flat)
                    v-list.pa-0
                        v-list-tile(avatar)
                            v-list-tile-avatar
                                img.logo(src='/logo.png')
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
                            v-icon.ico-font(
                                :style=`{color: item.color}`,
                                @click=`mini = !mini`,
                            ) {{item.icon}}
                        v-list-tile-content
                            v-list-tile-title
                                router-link(:to=`item.link`) {{item.title}}
    .lx-container(:class=`!mini ? 'open' : ''`)
        v-progress-linear.v-progress-line(
            indeterminate=true,
            color='light-blue lighten-1',
            :active=`progressState`,
        )
        .lx-container-content
            slot(name='drawerContainer')
    back-top(:duration=1500)
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import BackTop from './../common/BackTop.vue'
/* tslint:disable:no-console */

@Component({
    components: {
        BackTop,
    },
})

export default class Home extends Vue {
    @Prop() private menus!: string[]

    private drawer = true
    private mini = true
    private progressShow = false

    get progressState() {
        return this.$store.state.progressShow
    }
}

</script>

<style lang='scss'>
.drawer-layout {
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
        .ico-font {
            font-size: 28px !important;
        }
    }
    .lx-container {
        width: $drawerFoldLeft;
        transition: all 500ms ease;
        margin-left: $drawerFold;
        &.open {
            width: $drawerOpenLeft;
            margin-left: $drawerOpen;
        }
        .v-progress-line {
            margin: 0;
        }
        .lx-container-content {
            padding: 20px;
        }
    }
    .menu-item {
        cursor: pointer;
        .list__tile__title {
            font-size: 18px !important;
        }
        &:hover {
            color: $blue;
        }
    }
}
</style>
