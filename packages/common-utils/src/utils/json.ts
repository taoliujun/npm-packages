import BIGJSON from 'json-bigint';

/** json parse 支持大数字 */
export const jsonParse = <T>(text: string) => {
    try {
        return BIGJSON.parse(text) as T;
    } catch {
        return null;
    }
};

/** json stringify 支持大数字 */
export const jsonStringify = (input: any) => {
    try {
        return BIGJSON.stringify(input);
    } catch {
        return '';
    }
};
