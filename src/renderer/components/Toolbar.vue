<template lang='pug'>
    .v-toolbar
        v-card(color='grey lighten-4', flat, height='200px', tile)
            v-toolbar(dense)
                v-toolbar-side-icon
                v-toolbar-title Title
                v-spacer
                v-btn(icon)
                    v-icon search
                v-btn(icon)
                    v-icon favorite
                v-btn(icon)
                    v-icon more
</template>
