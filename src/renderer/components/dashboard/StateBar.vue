<template lang="pug">
.lx-system-statebar
    v-system-bar(status, color='green', lights-out, dark)
        v-icon(@click=`ipAddr`) wifi
        // v-icon(@click=`getIPS`) refresh
    .state-ip-info(v-if=`isOpen`)
        p
            b {{ $t('state.public') }} IPv4: 
            span {{ipv4}}
        p
            b {{ $t('state.public') }} IPv6: 
            span {{ipv6}}
        p
            b {{ $t('state.local') }} IP: 
            span {{local}}
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { getIP, isIP } from './../../utils'
import publicIP from 'public-ip'

import Debounce from './../../utils/debounce'
// tslint:disable:no-console

@Component
export default class StateBar extends Vue {
    private isOpen = false

    private getLocal() {
        const netInfo = JSON.parse(`${localStorage.getItem('OS_INFO')}`)
        const local = getIP(netInfo.IPS, true)[0]
        return local
    }

    private getIPS() {
        const local = this.getLocal()
        const errInfo = 'state.notdetect'
        publicIP.v4()
            .then(v4 => {
                publicIP.v6()
                    .then(v6 => {
                        this.$store.state.ips = {v4, v6, local}
                    })
                    .catch(e => this.$store.state.ips = {
                        v4, v6: errInfo, local,
                    })
            })
            .catch(e => this.$store.state.ips = {
                v4: errInfo, v6: errInfo, local,
            })
    }

    private ipAddr() {
        this.isOpen = !this.isOpen
        if (Object.keys(this.$store.state.ips).length === 0) this.getIPS()
    }

    // computed
    get ipv4() {
        const v4 = this.$store.state.ips.v4
        // return v4
        return isIP(v4) ? v4 : this.$t(v4)
    }
    get ipv6() {
        const v6 = this.$store.state.ips.v6
        // return v6
        return isIP(v6) ? v6 : this.$t(v6)
    }
    get local() {
        return this.$store.state.ips.local
    }
}
</script>

<style lang="scss">
.lx-system-statebar {
    position: fixed;
    width: 100%;
    .icon {
        cursor: pointer;
        user-select: none;
    }
    .state-ip-info {
        padding: 20px;
        position: absolute;
        top: 24px;
        background: linear-gradient(#000, #aaa);
        color: #fff;
    }
}
</style>

