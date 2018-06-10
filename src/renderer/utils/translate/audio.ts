import tk from './tk'
import querystring from 'querystring'
// tslint:disable:max-line-length
// audio
// https://translate.google.cn/translate_tts?ie=UTF-8&q=translit&tl=en&tk=973455.565496&client=t

export function getGTAudio(text: string, url: string) {
    const data = {
        client: 't',
        ie: 'UTF-8',
        q: text,
        tk: tk(text),
    }

    return `${url}?${querystring.stringify(data)}`
}
