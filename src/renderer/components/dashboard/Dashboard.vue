<template lang="pug">
.lx-dashboard
    StateBar
    .dashboard-content
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

<style lang="scss">
.lx-dashboard {
    position: relative;
}
.dashboard-content {
    position: absolute;
    top: 24px;
    height: calc(100vh - 24px);
    width: 100%;
    overflow-y: auto;
}
</style>

