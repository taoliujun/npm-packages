import { formatNumber, tryConvertToNumber } from './utils/number';

/** 人民币符号 */
export const cnyUnit = '¥';

/**
 * 千位分隔
 */
export const thousandsFormat = (input: number | string): string => {
    return Number(input || 0).toLocaleString();
};

/**
 * 分 转 元
 */
export const fenToYuan = (money: number | undefined, fixedDigits?: number) => {
    const yuanBased = Math.floor(tryConvertToNumber(money || 0, 0)) / 100;
    return formatNumber(yuanBased, fixedDigits);
};
