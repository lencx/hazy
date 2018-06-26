import * as os from 'os'

try {
    const info = {
        IPS: os.networkInterfaces(),
        CPU: os.cpus(),
        HOSTNAME: os.hostname,
        PLATFORM: os.platform(),
    }
    process.env.OSINFO = JSON.stringify(info)
} catch (e) {
    // tslint:disable-next-line:no-console
    console.error('Unacquired IP')
}
