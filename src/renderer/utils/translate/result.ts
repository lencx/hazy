// tslint:disable:no-console
// tslint:disable:prefer-const
import _ from 'lodash'
import { IRawResult } from './types'

const objHasProp = (obj: object, prop: string, val: string) => val !== undefined
    ? Object.assign(obj, {[prop]: val}) : ''

export default function formatGTData(data: any): IRawResult {
    const { src, sentences, dict, examples } = data

    const obj: IRawResult = {
        src,
        sentences: {
            orig: sentences[0].orig,
            trans: sentences[0].trans,
        },
    }

    // sentences
    objHasProp(obj.sentences, 'src_translit', sentences[1].src_translit)
    objHasProp(obj.sentences, 'translit', sentences[1].translit)

    // dict
    if (dict !== undefined) {
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
    if (examples !== undefined) {
        let exp: object[] = []
        examples.example.some((i: any) => {
            exp.push(i.text)
        })
        Object.assign(obj, {examples: exp})
    }

    return obj
}
