import Decimal from 'decimal.js';
import { tryConvertToNumber } from './number';

/** 千位分隔 */
export const thousandsFormat = (input: number | string): string => {
    return Number(input || 0).toLocaleString();
};

/** 金额前面的正负号 */
export const moneyPrefix = (money?: number) => {
    return tryConvertToNumber(money || 0, 0) >= 0 ? '+' : '-';
};

/** 元to分 */
export const yuanToFen = (money?: number) => {
    return Decimal.mul(money || 0, 100).toNumber();
};

/** 分to元 */
export const fenToYuan = (money?: number) => {
    return Decimal.div(money || 0, 100).toNumber();
};
