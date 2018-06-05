<template lang='pug'>
    .v-toolbar
        v-card(color='grey lighten-4', flat, height='200px', tile)
            v-toolbar(dense)
                v-toolbar-side-icon
                v-toolbar-title Hazy
                v-spacer
                v-btn(icon)
                    v-icon search
                v-btn(icon)
                    v-icon favorite
                v-btn(icon)
                    v-icon more
        button(@click='say("Hello!")') Click Me
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import translate from './../utils/translate'
import axios from 'axios'

@Component
export default class Toolbar extends Vue {

    private say(content: string) {
        // tslint:disable-next-line:no-console
        alert(content)
    }
}

</script>
