function RL(a: string | any, b : string | any) {
	let t = "a"
	let Yb = "+"
	let d
	for (let c = 0; c < b.length - 2; c += 3) {
		d = b.charAt(c + 2),
		d = d >= t ? d.charCodeAt(0) - 87 : Number(d),
		d = b.charAt(c + 1) == Yb ? a >>> d : a << d
		a = b.charAt(c) == Yb ? a + d & 4294967295 : a ^ d
	}
	return a
}

/**
 * calcTKK
 * @param {String} - translate text
 * @return {String} - '964583.557971'
 */
export function calcTKK(a: any): string {
	let  k = ''
	let b = 406644
	let b1 = 3293161072

	let jd = '.'
	let $b = '+-a^+6'
	let Zb = '+-3^+b+-f'
	for (var e = [], f = 0, g = 0; g < a.length; g++) {
		let m = a.charCodeAt(g)
		128 > m ? e[f++] = m : (2048 > m ? e[f++] = m >> 6 | 192 : (55296 == (m & 64512) && g + 1 < a.length && 56320 == (a.charCodeAt(g + 1) & 64512) ? (m = 65536 + ((m & 1023) << 10) + (a.charCodeAt(++g) & 1023),
		e[f++] = m >> 18 | 240,
		e[f++] = m >> 12 & 63 | 128) : e[f++] = m >> 12 | 224,
		e[f++] = m >> 6 & 63 | 128),
		e[f++] = m & 63 | 128)
	}
	a = b
	for (f = 0; f < e.length; f++) a += e[f], a = RL(a, $b)
	a = RL(a, Zb)
	a ^= b1 || 0
	0 > a && (a = (a & 2147483647) + 2147483648)
	a %= 1E6
	return (a.toString() + jd + (a ^ b)).trim()
}

/**
 * tk
 * @param {String} - original text
 * @return {String} - '&tk=964583.557971'
 */
export default function tk(origin: string): string {
	return `&tk=${calcTKK(origin)}`
}
