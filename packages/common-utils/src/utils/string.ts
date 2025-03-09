/** 在字符串开头补斜杠 */
export const padSlashStart = (input: string) => {
    return input.startsWith('/') ? input : `/${input}`;
};

/** 在字符串结尾补斜杠 */
export const padSlashEnd = (input: string) => {
    return input.endsWith('/') ? input : `${input}/`;
};

/** 移除字符串开头的斜杠 */
export const removeSlashStart = (input: string) => {
    return input.startsWith('/') ? input.slice(1) : input;
};

/** 移除字符串结尾的斜杠 */
export const removeSlashEnd = (input: string) => {
    return input.endsWith('/') ? input.slice(0, -1) : input;
};
