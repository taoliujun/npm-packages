/** 延迟ms后执行 */
export const delay = (millseconds: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millseconds);
    });
};
