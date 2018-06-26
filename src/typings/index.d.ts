declare module 'common' {
    export interface IObjStr {
        [key: string]: string;
    }

    export interface IObjAny {
        [key: string]: any;
    }

    export interface IIPAddress {
        IPv4: object | any;
        IPv6: object | any;
        [index: string]: object | any;
    }
}
