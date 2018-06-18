<template lang="pug">
.lx-cards-container
    v-container(grid-list-xl)
        v-layout(row, wrap)
            v-flex(
                v-for=`item in cards`,
                :key=`item.title`,
            )
                v-card(hover=true)
                    v-card-media(:src=`item.img`)
                    v-card-title {{item.title}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CardItem extends Vue {
    private cards = [
        {
            img: '',
            title: 'Google Translate',
        },
        {
            img: '',
            title: 'Other',
        },
    ]
}
</script>