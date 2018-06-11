import tk from './tk'
import querystring from 'querystring'

export default function getGTAudio(text: string) {
    const data = {
        ie: 'UTF-8',
        tl: 'en',
        q: text,
        client: 't',
    }

    return `?${querystring.stringify(data)}${tk(text)}`
}
