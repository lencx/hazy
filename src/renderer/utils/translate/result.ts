// tslint:disable:no-console
// tslint:disable:prefer-const
import _ from 'lodash'
import { IRawResult } from 'gtranslate'

export default function formatGTData(data: any): IRawResult {
    const { src, sentences, dict, examples, definitions, related_words, synsets } = data

    const obj: IRawResult = {
        src,
        sentences: {
            orig: sentences[0].orig,
            trans: sentences[0].trans,
        },
    }

    // sentences translit
    if (sentences[1]!) {
        Object.assign(obj.sentences, {src_translit: sentences[1].src_translit, translit: sentences[1].translit})
    }

    // dict
    if (dict!) {
        let o1: object[] = []
        dict.some((i: any) => {
            let o2: object[] = []
            i.entry.some((j: any) => {
                o2.push({
                    word: j.word,
                    reverse_translation: _.flatten(j.reverse_translation),
                })
            })
            o1.push({
                pos: i.pos,
                entry: o2,
                terms: _.flatten(i.terms),
            })
        })
        Object.assign(obj, {dict: o1})
    }

    // examples
    if (examples!) {
        let exp: object[] = []
        examples.example.some((i: any) => {
            exp.push(i.text)
        })
        Object.assign(obj, {examples: exp})
        // Object.assign(obj, {examples: _.uniqBy(exp, '')})
    }

    // definitions
    if (definitions!) {
        let o1: object[] = []
        definitions.some((i: any) => {
            let o2: object[] = []
            i.entry.some((j: any) => {
                o2.push({
                    gloss: j.gloss,
                    example: j.example,
                })
            })
            o1.push({
                pos: i.pos,
                entry: o2,
            })
        })
        Object.assign(obj, {definitions: o1})
    }

    // related_words
    if (related_words!) {
        Object.assign(obj, {related_words: related_words.word})
    }

    // synsets
    if (synsets!) {
        let o1: object[] = []
        synsets.some((i: any) => {
            let o2: object[] = []
            i.entry.some((j: any) => {
                o2.push(j.synonym)
            })
            o1.push({
                pos: i.pos,
                synonym: _.flatten(o2),
            })
        })
        Object.assign(obj, {synsets: o1})
    }

    return obj
}
