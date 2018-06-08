interface IRawResult {
    src: string;
    sentences: Array<{
        orig: string;
        trans: string;
    }>
    dict?: Array<{
        pos: string;
        terms: string[]
        entry: object[]
    }>
}

interface IPhonetic {
    name: string;
    ttsURI: string;
    value: string;
}

export interface ItranslateResult {
    text: string;
    raw: any;
    from: string;
    to: string;
    phonetic?: string | IPhonetic[];
    dict?: string[];
    result?: string[];
}

// interface ItranslateOpts {
//     from: string;
//     to: string;
// }


// ---------------------------------------------
export interface ItranslateOpts {
    [key: string]: any;
    url?: string,
    from?: string | any;
    to?: string | any;
}

// export interface ITranslateURI {
//     hostname: string;
//     // true: com(default);
//     // false: cn;
//     suffix: boolean | string;
// }

// function transformRaw(rawRes: IRawResult, queryObj: ItranslateOpts) {
//     const {text, to} = queryObj

//     const obj: ItranslateResult = {
//         text,
//         raw: '',
//         from: '',
//         to,

//     }
// }
