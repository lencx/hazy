import querystring from 'querystring'

interface ItranslateOpts {
    from: string,
    to: string,
}

const translate = (text: string, opts: ItranslateOpts) => {
    const url = 'https://translate.google.com/translate_a/single'
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
