export const DATETIME_FULL = 'YYYY-MM-DD HH:mm:ss';
export const MILLISECONDS_FULL = 'YYYY-MM-DD HH:mm:ss.SSS';
export const DATE_FULL = 'YYYY-MM-DD';
export const DATE_FULL_CN = 'YYYY年MM月DD日';
export const TIME_FULL = 'HH:mm:ss';

/** 秒 转 可读对象 */
export const secondsToData = (input: number) => {
    const originInput = input || 0;

    let remain = originInput;

    const fullDays = Math.floor(originInput / 86400);
    const days = Math.floor(remain / 86400);
    remain %= 86400;

    const fullHours = Math.floor(originInput / 3600);
    const hours = Math.floor(remain / 3600);
    remain %= 3600;

    const fullMinutes = Math.floor(originInput / 60);
    const minutes = Math.floor(remain / 60);
    remain %= 60;

    const fullSeconds = originInput;
    const seconds = remain;

    return { days, hours, minutes, seconds, fullDays, fullHours, fullMinutes, fullSeconds };
};

/** 秒转格式化 */
export const secondsFormat = (input: number, format = 'D天H时m分s秒') => {
    const o = secondsToData(input);
    let r = format;
    r = r.replaceAll('DD', o.days.toString().padStart(2, '0'));
    r = r.replaceAll('D', o.days.toString().padStart(1, '0'));
    r = r.replaceAll('HH', o.hours.toString().padStart(2, '0'));
    r = r.replaceAll('H', o.hours.toString().padStart(1, '0'));
    r = r.replaceAll('mm', o.minutes.toString().padStart(2, '0'));
    r = r.replaceAll('m', o.minutes.toString().padStart(1, '0'));
    r = r.replaceAll('ss', o.seconds.toString().padStart(2, '0'));
    r = r.replaceAll('s', o.seconds.toString().padStart(1, '0'));
    return r;
};

/** 将n秒，提取为 天、时、分、秒 */
export const extractSecond = (n: number) => {
    const days = Math.floor(n / 86400);
    const hours = Math.floor((n % 86400) / 3600);
    const minutes = Math.floor((n % 3600) / 60);
    const seconds = n % 60;

    const fullHours = Math.floor(n / 3600);
    const fullMinutes = Math.floor(n / 60);
    const fullSeconds = n;

    return { days, hours, minutes, seconds, fullHours, fullMinutes, fullSeconds };
};
