/** 尝试转数字 */
export const tryConvertToNumber = <T>(value: T, defaultOnFailure?: number): number | T => {
    const number = Number(value);
    if (!Number.isNaN(number)) {
        return number;
    }
    if (defaultOnFailure !== undefined) {
        return defaultOnFailure;
    }
    return value;
};

/** 格式化数字 */
export const formatNumber = (num: number, fixedDigits?: number): string => {
    if (fixedDigits === undefined) {
        return `${num}`;
    }
    return num.toFixed(fixedDigits);
};
