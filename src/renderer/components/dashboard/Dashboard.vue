<template lang="pug">
.lx-dashboard
    StateBar
    CardItem
    I18N
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import StateBar from './StateBar.vue'
import CardItem from './CardItem.vue'
import I18N from './../common/I18N.vue'

@Component({
    components: {
        StateBar,
        CardItem,
        I18N,
    },
})

export default class Dashboard extends Vue {
}
</script>
