<template lang='pug'>
.home
    DrawerLayout(:menus=`menus`)
        template(slot='drawerMenu')
        template(slot='drawerContainer')
            // gTranslate
            router-view
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import DrawerLayout from '@c/layout/DrawerLayout.vue'
import GTranslate from '@c/translate/GTranslate.vue'

/* tslint:disable:no-console */
console.log('Home')

@Component({
    components: {
        DrawerLayout,
        GTranslate,
    },
})


export default class Home extends Vue {
    private drawer = true
    private mini = true

    private menus = [
        {title: 'Dashboard', icon: 'dashboard', link: ''},
        {title: 'Google Translate', icon: 'g_translate', color: '#4885ed', link: '/home/translate'},
    ]
}

</script>

