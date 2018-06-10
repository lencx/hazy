export interface ITranslateOpts {
    url?: string;
    from?: string;
    to?: string;
}

export interface ITranslateResult {
    src: string;
    alternative_translations: object[];
    definitions?: object[];
    dict?: object[];
    examples?: object;
    sentences: object[];
    synsets: object[];
    translit?: object;
}
