<template lang="pug">
.lx-dashboard
    StateBar
    CardItem
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import StateBar from './StateBar.vue'
import CardItem from './CardItem.vue'

@Component({
    components: {
        StateBar,
        CardItem,
    },
})

export default class Dashboard extends Vue {
}
</script>
