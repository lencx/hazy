<template lang="pug">
.lx-state-bar
    v-system-bar(status, color='green', lights-out, dark)
        v-icon(@click=`ipAddr`) network_wifi
    .state-desc(v-if=`isOpen`)
        p
            b Public IPv4: 
            span {{ipv4}}
        p
            b Public IPv6: 
            span {{ipv6}}
        p
            b Local IP: 
            span {{local}}
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import ipAddress from './../../utils/getIP'
import publicIP from 'public-ip'

import Debounce from './../../utils/debounce'

@Component
export default class StateBar extends Vue {
    private isOpen = false

    private ipAddr() {
        this.isOpen = !this.isOpen
        publicIP.v4()
            .then(v4 => {
                const netInfo = JSON.parse(`${localStorage.getItem('OS_INFO')}`)
                const local = ipAddress(netInfo.IPS, true)[0]
                publicIP.v6()
                    .then(v6 => {
                        this.$store.state.ips = {v4, v6, local}
                    })
                    .catch(e => {
                        this.$store.state.ips = {
                            v4, v6: 'state.notdetect', local,
                        }
                    })
            })
    }

    // computed
    get ipv4() {
        return this.$store.state.ips.v4
    }
    get ipv6() {
        const v6 = this.$store.state.ips.v6
        return v6 === 'state.notdetect'
            ? this.$t(v6)
            : v6
    }
    get local() {
        return this.$store.state.ips.local
    }
}
</script>

<style lang="scss">
.lx-state-bar {
    position: fixed;
    width: 100%;
    .icon {
        cursor: pointer;
    }
    .state-desc {
        padding: 20px;
        position: absolute;
        top: 24px;
        background: #000;
        color: #fff;
    }
}
</style>

