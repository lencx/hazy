# Components

* [BackTop](#back-top)

## BackTop

```vue
<template lang='pug'>
back-top(
    :height=500,
    :bottom=80,
    :right=40,
    :duration=1500,
    @click=`backTopEvt`,
)

back-top
    .my-backtop 返回顶部
<template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import BackTop from 'your-path/compontent/BackTop.vue'

@Component({
    components: {
        BackTop,
    },
})

export default class Home extends Vue {
    private backTopEvt() {
        // code
    }
}
</script>

<style lang='scss'>
.my-backtop {
    color: #fff;
}
</style>
```