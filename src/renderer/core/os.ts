import os from 'os'

// tslint:disable-next-line:no-console
const hostname = os.hostname()
const osType = os.type()
const osPlatform = os.platform()
const osCPU = os.cpus()
const osArch = os.arch()
const osRelease = os.release()
const osTotalmem = os.totalmem()

// tslint:disable:no-console
// console.log(os)
console.log(process)
console.log(`hostname: ${hostname}`)
console.log(`osType: ${osType}`)
console.log(`osPlatform: ${osPlatform}`)
console.log(`osCPU: ${osCPU}`)
console.log(`osArch: ${osArch}`)
console.log(`osRelease: ${osRelease}`)
console.log(`osTotalmem: ${osTotalmem}`)
