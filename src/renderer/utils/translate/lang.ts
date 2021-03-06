import { IObjStr } from 'common'

// tslint:disable:jsdoc-format
/**
Array.from(document.querySelectorAll('#gt-sl-gms-menu .goog-menuitem-content'))
    .reduce((acc, curr) => (typeof acc==='object' ? `${acc.textContent}, ` : acc) + `${curr.textContent}, `)
检测语言,阿尔巴尼亚语,阿拉伯语,阿姆哈拉语,阿塞拜疆语,爱尔兰语,爱沙尼亚语,
巴斯克语,白俄罗斯语,保加利亚语,冰岛语,波兰语,波斯尼亚语,波斯语,布尔语(南非荷兰语),
丹麦语,德语,俄语,法语,菲律宾语,芬兰语,弗里西语,高棉语,格鲁吉亚语,古吉拉特语,哈萨克语,
海地克里奥尔语,韩语,豪萨语,荷兰语,吉尔吉斯语,加利西亚语,加泰罗尼亚语,捷克语,卡纳达语,
科西嘉语,克罗地亚语,库尔德语,拉丁语,拉脱维亚语,老挝语,立陶宛语,卢森堡语,罗马尼亚语,
马尔加什语,马耳他语,马拉地语,马拉雅拉姆语,马来语,马其顿语,毛利语,蒙古语,孟加拉语,缅甸语,
苗语,南非科萨语,南非祖鲁语,尼泊尔语,挪威语,旁遮普语,葡萄牙语,普什图语,齐切瓦语,日语,瑞典语,
萨摩亚语,塞尔维亚语,塞索托语,僧伽罗语,世界语,斯洛伐克语,斯洛文尼亚语,斯瓦希里语,苏格兰盖尔语,
宿务语,索马里语,塔吉克语,泰卢固语,泰米尔语,泰语,土耳其语,威尔士语,乌尔都语,乌克兰语,
乌兹别克语,西班牙语,希伯来语,希腊语,夏威夷语,信德语,匈牙利语,修纳语,亚美尼亚语,伊博语,
意大利语,意第绪语,印地语,印尼巽他语,印尼语,印尼爪哇语,英语,约鲁巴语,越南语,中文
*/

// language - chinese
const langsCN: IObjStr = {
    'auto': '自动',
    'af': '布尔语(南非荷兰语)',
    'sq': '	阿尔巴尼亚语',
    'am': '阿姆哈拉语',
    'ar': '阿拉伯语',
    'hy': '亚美尼亚语',
    'az': '阿塞拜疆语',
    'eu': '巴斯克语',
    'be': '白俄罗斯语',
    'bn': '孟加拉语',
    'bs': '波斯尼亚语',
    'bg': '保加利亚语',
    'ca': '加泰罗尼亚语',
    'ceb': '宿务语',
    'ny': '齐切瓦语',
    'zh-cn': '中文-简体',
    'zh-tw': '中文-繁体',
    'co': '科西嘉语',
    'hr': '克罗地亚语',
    'cs': '捷克语',
    'da': '丹麦语',
    'nl': '荷兰语',
    'en': '英语',
    'eo': '世界语',
    'et': '爱沙尼亚语',
    'tl': '菲律宾语',
    'fi': '芬兰语',
    'fr': '法语',
    'fy': '弗里西语',
    'gl': '加利西亚语',
    'ka': '格鲁吉亚语',
    'de': '德语',
    'el': '希腊语',
    'gu': '古吉拉特语',
    'ht': '海地克里奥尔语',
    'ha': '豪萨语',
    'haw': '夏威夷语',
    'iw': '希伯来语',
    'hi': '印地语',
    'hmn': '苗语',
    'hu': '匈牙利语',
    'is': '冰岛语',
    'ig': '伊博语',
    'id': '印尼语',
    'ga': '爱尔兰语',
    'it': '意大利语',
    'ja': '日语',
    'jw': '印尼爪哇语',
    'kn': '卡纳达语',
    'kk': '哈萨克语',
    'km': '高棉语',
    'ko': '韩语',
    'ku': '库尔德语',
    'ky': '吉尔吉斯语',
    'lo': '老挝语',
    'la': '拉丁语',
    'lv': '拉脱维亚语',
    'lt': '立陶宛语',
    'lb': '卢森堡语',
    'mk': '马其顿语',
    'mg': '马尔加什语',
    'ms': '马来语',
    'ml': '马拉雅拉姆语',
    'mt': '马耳他语',
    'mi': '毛利语',
    'mr': '马拉地语',
    'mn': '蒙古语',
    'my': '缅甸语',
    'ne': '尼泊尔语',
    'no': '挪威语',
    'ps': '普什图语',
    'pa': '旁遮普语',
    'fa': '波斯语',
    'pl': '波兰语',
    'pt': '葡萄牙语',
    'ro': '罗马尼亚语',
    'ru': '俄语',
    'sm': '萨摩亚语',
    'gd': '苏格兰盖尔语',
    'sr': '塞尔维亚语',
    'st': '塞索托语',
    'sn': '修纳语',
    'sd': '信德语',
    'si': '僧伽罗语',
    'sk': '斯洛伐克语',
    'sl': '斯洛文尼亚语',
    'so': '索马里语',
    'es': '西班牙语',
    'su': '印尼巽他语',
    'sw': '斯瓦希里语',
    'sv': '瑞典语',
    'tg': '塔吉克语',
    'ta': '泰米尔语',
    'te': '泰卢固语',
    'th': '泰语',
    'tr': '土耳其语',
    'uk': '乌克兰语',
    'ur': '乌尔都语',
    'uz': '乌兹别克语',
    'vi': '越南语',
    'cy': '威尔士语',
    'xh': '南非科萨语',
    'yi': '意第绪语',
    'yo': '约鲁巴语',
    'zu': '南非科萨语',
}

// language - english
// https://cloud.google.com/translate/docs/languages
const langs: IObjStr = {
    'auto': 'Automatic',
    'af': 'Afrikaans',
    'sq': 'Albanian',
    'am': 'Amharic',
    'ar': 'Arabic',
    'hy': 'Armenian',
    'az': 'Azerbaijani',
    'eu': 'Basque',
    'be': 'Belarusian',
    'bn': 'Bengali',
    'bs': 'Bosnian',
    'bg': 'Bulgarian',
    'ca': 'Catalan',
    'ceb': 'Cebuano',
    'ny': 'Chichewa',
    'zh-cn': 'Chinese(Simplified)',
    'zh-tw': 'Chinese(Traditional)',
    'co': 'Corsican',
    'hr': 'Croatian',
    'cs': 'Czech',
    'da': 'Danish',
    'nl': 'Dutch',
    'en': 'English',
    'eo': 'Esperanto',
    'et': 'Estonian',
    'tl': 'Filipino',
    'fi': 'Finnish',
    'fr': 'French',
    'fy': 'Frisian',
    'gl': 'Galician',
    'ka': 'Georgian',
    'de': 'German',
    'el': 'Greek',
    'gu': 'Gujarati',
    'ht': 'Haitian Creole',
    'ha': 'Hausa',
    'haw': 'Hawaiian',
    'iw': 'Hebrew',
    'hi': 'Hindi',
    'hmn': 'Hmong',
    'hu': 'Hungarian',
    'is': 'Icelandic',
    'ig': 'Igbo',
    'id': 'Indonesian',
    'ga': 'Irish',
    'it': 'Italian',
    'ja': 'Japanese',
    'jw': 'Javanese',
    'kn': 'Kannada',
    'kk': 'Kazakh',
    'km': 'Khmer',
    'ko': 'Korean',
    'ku': 'Kurdish (Kurmanji)',
    'ky': 'Kyrgyz',
    'lo': 'Lao',
    'la': 'Latin',
    'lv': 'Latvian',
    'lt': 'Lithuanian',
    'lb': 'Luxembourgish',
    'mk': 'Macedonian',
    'mg': 'Malagasy',
    'ms': 'Malay',
    'ml': 'Malayalam',
    'mt': 'Maltese',
    'mi': 'Maori',
    'mr': 'Marathi',
    'mn': 'Mongolian',
    'my': 'Myanmar (Burmese)',
    'ne': 'Nepali',
    'no': 'Norwegian',
    'ps': 'Pashto',
    'pa': 'Punjabi',
    'fa': 'Persian',
    'pl': 'Polish',
    'pt': 'Portuguese',
    'ro': 'Romanian',
    'ru': 'Russian',
    'sm': 'Samoan',
    'gd': 'Scots Gaelic',
    'sr': 'Serbian',
    'st': 'Sesotho',
    'sn': 'Shona',
    'sd': 'Sindhi',
    'si': 'Sinhala',
    'sk': 'Slovak',
    'sl': 'Slovenian',
    'so': 'Somali',
    'es': 'Spanish',
    'su': 'Sundanese',
    'sw': 'Swahili',
    'sv': 'Swedish',
    'tg': 'Tajik',
    'ta': 'Tamil',
    'te': 'Telugu',
    'th': 'Thai',
    'tr': 'Turkish',
    'uk': 'Ukrainian',
    'ur': 'Urdu',
    'uz': 'Uzbek',
    'vi': 'Vietnamese',
    'cy': 'Welsh',
    'xh': 'Xhosa',
    'yi': 'Yiddish',
    'yo': 'Yoruba',
    'zu': 'Zulu',
}

const getCode = (desiredLang: string) => {
    if (!desiredLang) {
        return false
    }
    desiredLang = desiredLang.toLowerCase()

    if (langs[desiredLang]) {
        return desiredLang
    }

    const keys = Object.keys(langs).filter(key => {
        if (typeof langs[key] !== 'string') {
            return false
        }

        return langs[key].toLowerCase() === desiredLang
    })

    return keys[0] || false
}

const isSupported = (desiredLang: string) => Boolean(getCode(desiredLang))

export {
    langs,
    langsCN,
    getCode,
    isSupported,
}
