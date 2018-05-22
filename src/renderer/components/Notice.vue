<template lang='pug'>
.notice
    h1 {{msg}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Notice extends Vue {
    @Prop() private msg!: string;
}
</script>


<style lang="scss">
h1 {
    margin: 0;
}
.notice {
    background: linear-gradient(to right, rgba(#000, .5), rgba(#fab, .5));
}
</style>
