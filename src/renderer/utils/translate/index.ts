import querystring from 'querystring'
import { langs, getCode, isSupported } from './lang'
import tk from './tk'

// tslint:disable-next-line:max-line-length
// const gtParam = querystring.parse('https://translate.google.cn/translate_a/single?client=t&sl=en&tl=zh-CN&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=1&tk=654357.1017221&q=%E4%BD%A0%E5%A5%BD')
// // tslint:disable-next-line:no-console
// console.log(gtParam)


export interface ItranslateOpts {
    [key: string]: any;
    url?: string,
    from?: string | any;
    to?: string | any;
}

export default function translate(text: string, opts: ItranslateOpts = {}) {
    opts.url = opts.url || 'https://translate.google.cn/translate_a/single'

    opts.from = opts.from || 'auto'
    opts.to = opts.to || 'en'
    // opts.to = opts.to || getCode('zh-tw')

    opts.from = getCode(opts.from)
    opts.to = getCode(opts.to)

    const data = {
        client: 't',
        sl: opts.from,
        tl: opts.to,
        hl: opts.to,
        dt: ['at', 'bd', 'ex', 'ld', 'md', 'qca', 'rw', 'rm', 'ss', 't'],
        ie: 'UTF-8',
        oe: 'UTF-8',
        otf: 1,
        ssel: 0,
        tsel: 0,
        kc: 7,
        q: text,
    }

    return `${opts.url}?${querystring.stringify(data)}${tk(text)}`
}
