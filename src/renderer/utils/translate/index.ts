import querystring from 'querystring'
import { langs, getCode, isSupported } from './lang'

// tslint:disable-next-line:max-line-length
const a = querystring.parse('https://translate.google.cn/translate_a/single?client=t&sl=en&tl=zh-CN&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=1&tk=654357.1017221&q=%E4%BD%A0%E5%A5%BD')
// tslint:disable-next-line:no-console
console.log(a)


interface ItranslateOpts {
    [key: string]: any;
    from?: string | any;
    to?: string | any;
}

const translate = (text: string, opts: ItranslateOpts = {}) => {
    const url = 'https://translate.google.com/translate_a/single'

    opts.from = opts.from || 'auto'
    opts.to = opts.to || 'en'

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

    return `${url}?${querystring.stringify(data)}`
}

export default translate
