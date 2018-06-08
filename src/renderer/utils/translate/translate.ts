import { ItranslateOpts, ItranslateResult } from './types'

import querystring from 'querystring'
import { langs, getCode, isSupported } from './lang'
import tk from './tk'

// tslint:disable-next-line:max-line-length
const a = 'https://translate.google.cn/translate_a/single?client=t&sl=auto&tl=zh-CN&hl=zh-CN&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=3&kc=3&tk=183866.308301&q=%E4%BD%A0%E5%A5%BD'

// tslint:disable-next-line:no-console
console.log(querystring.parse(a))

/**
 * translate
 * @param text The language of the string being queried
 * @param opts url parameters
 */
export default function translate(text: string, opts: ItranslateOpts) {
    const { url, from, to } = opts

    const obj: ItranslateOpts = {
        url: url! || 'https://translate.google.cn/translate_a/single',
        from: from! || 'auto',
        to: to! || 'en',
    }

    const data = {
        client: 't',
        sl: obj.from,
        tl: obj.to,
        hl: obj.to,
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

// export interface ItranslateResult {
//     text: string;
//     raw: any;
//     from: string;
//     to: string;
//     phonetic?: string | IPhonetic[];
//     dict?: string[];
//     result?: string[];
// }

// function translateResult(data: any): ItranslateResult {
//     const obj: ItranslateResult = {
//         text: data[0][0],

//     }
// }
