<template lang='pug'>
.drawer-layout
    .lx-slidbar
        v-navigation-drawer(
            :mini-variant.sync="mini",
            v-model="drawer",
            stateless, hide-overlay
        )
            v-toolbar.transparent(flat)
                v-list.pa-0
                    v-list-tile(avatar)
                        v-list-tile-avatar.logo-ico(:class=`isOpen`)
                            .logobg
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
                        // :style=`{color: item.color}`,
                        v-icon.ico-font(
                            :color=`item.color`,
                            @click=`mini = !mini`,
                        ) {{item.icon}}
                    v-list-tile-content(@click=`mini = !mini`)
                        v-list-tile-title
                            router-link(:to=`item.link`) {{item.title}}
    .lx-container(:class=`isOpen`)
        v-progress-linear.v-progress-line(
            v-if=`progressState`,
            indeterminate=true,
            color='light-blue lighten-1',
            :active=`progressState`,
        )
        .lx-container-content
            router-view
    back-top(:duration=1500)
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import BackTop from '@c/common/BackTop.vue'
// import GTranslate from '@c/translate/GTranslate.vue'

/* tslint:disable:no-console */
console.log('Home')

@Component({
    components: {
        BackTop,
    },
})

export default class Home extends Vue {
    private drawer = true
    private mini = true
    private progressShow = false

    private menus = [
        {
            title: 'Dashboard',
            icon: 'dashboard',
            color: 'teal lighten-2',
            link: '/home/dashboard',
        },
        {
            title: 'Google Translate',
            icon: 'g_translate',
            // color: '#4885ed',
            color: 'blue lighten-1',
            link: '/home/translate',
        },
    ]

    get progressState() {
        return this.$store.state.progressShow
    }

    get isOpen() {
        return {[`open`]: !this.mini}
    }
}
</script>

<style lang='scss'>
@function stop-list($hover: false, $precision: 12) {
    $list: ();
    $unit: 360/$precision;
    @for $i from 0 through $precision {
        @if ($hover == true) {
            $list: $list,
                hsl($i*$unit, 70%, 60%);
        }
        @else {
            $list: $list,
                hsl($i*$unit, 80%, 75%);
        }
    }
    @return $list;
}
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
        background-color: $grey4;
        .logo-ico {
            position: relative;
            .logobg {
                position: absolute;
                left: 0;
                top: 0;
                width: 40px;
                height: 40px;
                background: conic-gradient(stop-list(false));
                animation: rotateAni 4s infinite linear;
                box-shadow: 0 0 4px #000;
                border-radius: 50%;
            }
            img {
                position: absolute;
                &.logo {
                    padding: 1px;
                    cursor: pointer;
                }
            }
            &:hover, &.open {
                .logobg {
                    background: conic-gradient(stop-list(true));
                    animation: rotateAni 1s infinite linear;
                }
            }
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
            position: fixed;
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
        a {
            color: $baseFontColor;
            text-decoration: none;
            &:hover {
                color: $baseColor;
                text-decoration: underline;
            }
        }
    }
}
</style>
