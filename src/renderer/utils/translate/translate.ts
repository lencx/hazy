import { ITranslateOpts } from './types'

import querystring from 'querystring'
import tk from './tk'

/**
 * translate
 * @param text The language of the string being queried
 * @param opts url parameters
 */
export default function translate(text: string, opts: ITranslateOpts) {
    const { url, from, to } = opts

    const obj: ITranslateOpts = {
        url: url! || 'https://translate.google.cn/translate_a/single',
        from: from! || 'auto',
        to: to! || 'en',
    }

    const data = {
        client: 't',
        sl: obj.from,
        tl: obj.to,
        hl: obj.to,
        dj: 1,
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
