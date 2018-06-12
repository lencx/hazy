export interface ITranslateOpts {
    url?: string;
    from?: string;
    to?: string;
}

// export interface ITranslateResult {
//     src: string;
//     alternative_translations: object[];
//     definitions?: object[];
//     dict?: object[];
//     examples?: object;
//     sentences: object[];
//     synsets: object[];
//     translit?: object;
// }

export interface IDictEntry {
    word: string;
    entry: string[];
}

export interface IDefinitionsEntry {
    example: string;
    gloss: string;
}

export interface IDefinitions {
    pos: string;
    entry: IDefinitionsEntry;
}

export interface IRawResult {
    src: string;

    sentences: {
        orig: string;
        trans: string;
        src_translit?: string;
        translit?: string;
    }

    dict?: Array<{
        pos: string;
        terms: string[];
        entry: IDictEntry[];
    }>

    examples?: string[];

    definitions?: Array<{

    }>
}
