<template lang='pug'>
    .lx-tree
        li(v-for='(item, index) in data')
            b {{index}} - 
            span {{item}}
</template>

<script lang='ts'>
export default {
    data() {
        return {
            // data: "['Home', 'About', 'Posts']",
            data: ['Home', 'About', 'Posts'],
        }
    },
}
</script>

<style lang="scss" scoped>
li {
    list-style: none;
}
.lx-tree {
    text-align: left;
}
</style>

