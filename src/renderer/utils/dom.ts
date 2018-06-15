import Vue from 'vue'
const isServer = Vue.prototype.$isServer

export const on = (() => {
    if (!isServer && document.addEventListener) {
        return (element: Element|Window, event: string, handler: () => void) => {
            if (element && event && handler) {
                element.addEventListener(event, handler, false)
            }
        }
    } else {
        return (element: Element|Window|any, event: string, handler: () => void) => {
            if (element && event && handler) {
                element.attachEvent(`on${event}`, handler)
            }
        }
    }
})()

export const off = (() => {
    if (!isServer && document.removeEventListener) {
        return (element: Element|Window, event: string, handler: () => void) => {
            if (element && event) {
                element.removeEventListener(event, handler, false)
            }
        }
    } else {
        return (element: Element|Window|any, event: string, handler: () => void) => {
            if (element && event) {
                element.detachEvent(`on${event}`, handler)
            }
        }
    }
})()
