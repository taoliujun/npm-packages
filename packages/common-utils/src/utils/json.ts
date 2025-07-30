import BIGJSON from 'json-bigint';

/** json parse 支持大数字
 * @deprecated use jsonParse2
 */
export const jsonParse = <T>(text: string) => {
    try {
        return BIGJSON.parse(text) as T;
    } catch {
        return null;
    }
};

/** json parse 支持大数字 */
export const jsonParse2 = <T>(text: string | null | undefined, defaultValue: unknown = {}): T => {
    if (!text) {
        return defaultValue as T;
    }

    try {
        return BIGJSON.parse(text) as T;
    } catch {
        return defaultValue as T;
    }
};

/** json stringify 支持大数字 */
export const jsonStringify = (input: unknown) => {
    try {
        return BIGJSON.stringify(input);
    } catch {
        return '';
    }
};
