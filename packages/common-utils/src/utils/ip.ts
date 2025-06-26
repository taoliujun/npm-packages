/** 是否是内网段 */
export const isPrivateIp = (originIp: string) => {
    // IPv4 私有地址正则
    const ipv4Regex = /^(10\.|172\.(1[6-9]|2[0-9]|3[0-1])\.|192\.168\.|169\.254\.)/;

    // IPv6 ULA 正则
    const ipv6Regex = /^fc[0-9a-f]/i;

    let ip = originIp || '';

    if (ip.startsWith('::ffff:')) {
        ip = ip.replace('::ffff:', '');
    }

    return ip?.startsWith('127.0.0.1') || ipv4Regex.test(ip) || ipv6Regex.test(ip);
};
