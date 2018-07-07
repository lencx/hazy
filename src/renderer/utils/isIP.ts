/**
 * isIP
 * @param string ip
 * @return boolean
 * @see https://stackoverflow.com/questions/106179/regular-expression-to-match-dns-hostname-or-ip-address
 */
export default (ip: string): boolean => {
    // tslint:disable-next-line:max-line-length
    const reg = '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$'
    return new RegExp(reg).test(ip)
}
