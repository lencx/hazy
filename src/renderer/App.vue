<template lang='pug'>
#app
    //- #nav
        router-link(to='/') Home
    router-view
</template>

<style lang="scss">
body {
    margin: 0;
    padding: 10px;
}
#app {
    font-family: 'PingFang SC', Roboto, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
