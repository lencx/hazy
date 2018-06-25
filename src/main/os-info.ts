import * as os from 'os'

const info = {
    IPS: os.networkInterfaces(),
    CPU: os.cpus(),
    HOSTNAME: os.hostname,
    PLATFORM: os.platform(),
}

process.env.OSINFO = JSON.stringify(info)
