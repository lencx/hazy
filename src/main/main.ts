/* tslint:disable:no-console */

import { app, BrowserWindow } from 'electron'
// const electron = require('electron')
// const app = electron.app
// const BrowserWindow = electron.BrowserWindow

// console.log(process.env.NODE_ENV)
// console.log(process.env)

const winURI = process.env.NODE_ENV === 'development'
    ? `http://localhost:8080`
    : `file://${__dirname}/index.html`
// const winURI = `file://${__dirname}/index.html`
// const winURI = `http://localhost:8080`

let mainWin: any

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
