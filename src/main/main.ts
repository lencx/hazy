/* tslint:disable:no-console */
import { app, BrowserWindow } from 'electron'
import './os-info'

declare var __dirname: string

// console.log(process.env.NODE_ENV)
// console.log(process.env)
const winURI = process.env.NODE_ENV === 'development'
    ? `http://localhost:8080`
    : `file://${__dirname}/index.html`


let mainWin: any

// tslint:disable-next-line:no-var-requires
// require('electron-reload')(__dirname)

// https://github.com/electron/electron/pull/11810
// https://github.com/electron/electron/issues/11970
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

const createWin = () => {
    mainWin = new BrowserWindow({
        height: 800,
        useContentSize: true,
        width: 800,
    })

    mainWin.loadURL(winURI)
    mainWin.webContents.openDevTools()

    mainWin.on('closed', () => {
        mainWin = null
    })
}

app.on('ready', createWin)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWin === null) {
        createWin()
    }
})
