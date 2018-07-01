import { IIPAddress } from 'common'
import { filter, flatten, map } from 'lodash'

/**
 * @method ipAddress2
 * @return {Object} - ipv4[Object] & ipv6[Object]
 */
const ipAddress2: IIPAddress = {
    IPv4: new Object(),
    IPv6: new Object(),
}

const ipAddress = (ifnames: any, bool?: boolean): object|any => {
    const tmp = flatten(map(Object.keys(ifnames), ifname => {
        const interfacesType = (type: string) => filter(ifnames[ifname], {
            family: type,
            internal: false,
        })
        const addressType = (addr: object, type: string) => addr ? ipAddress2[type][ifname] = addr : void 0

        const ipv4 = interfacesType('IPv4')

        const address = map(ipv4, 'address')[0]
        const address2 = map(interfacesType('IPv6'), 'address')[0]
        addressType(address, 'IPv4')
        addressType(address2, 'IPv6')

        return map(ipv4, 'address')
    }))
    if (bool! || bool === true) return tmp
    else return ipAddress2
}

export default ipAddress
