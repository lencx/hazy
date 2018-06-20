import { IObjAny } from 'common'
import moment from 'moment'

// tslint:disable:prefer-const
// tslint:disable:no-console
// tslint:disable:member-access

class Store {
    private expiresTxt = '__expires__'

    get(item: string) {
        let obj = window.localStorage
        let key = item
        let now = +new Date()
        Object.keys(obj).forEach(i => {
            if (new RegExp(this.expiresTxt).test(i)) {
                let keyArr = i.split(this.expiresTxt)
                if (item === keyArr[0]) key = i
                if (now > parseInt(keyArr[1], 10)) this.rm(key)
            }
        })
        return window.localStorage.getItem(key)
    }
    set(opts: IObjAny, expires?: string) {
        let tamps = moment(expires).valueOf()
        Object.keys(opts).forEach(key => {
            let val = JSON.stringify(opts[key])
            let that = this
            if (expires!) {
                (async function newKey() {
                    let itemKey = await `${key}${that.expiresTxt}${tamps}`
                    window.localStorage.setItem(itemKey, val)
                })()
            } else window.localStorage.setItem(key, val)
        })
    }
    rm(key: string) {
        window.localStorage.removeItem(key)
    }
}

export default new Store()
