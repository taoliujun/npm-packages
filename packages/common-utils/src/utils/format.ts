// 放一些数据的二次处理的方法

/** 格式化文件大小 */
export const formatFileSize = (originSize: number) => {
    const size = originSize;
    if (!size) {
        return size;
    }

    if (size / (1024 * 1024 * 1024) > 1) {
        return `${Number((size / (1024 * 1024 * 1024)).toFixed(1))}GB`;
    }

    if (size / (1024 * 1024) > 1) {
        return `${Number(size / (1024 * 1024)).toFixed(1)}MB`;
    }

    if (size / 1024 > 1) {
        return `${Number((size / 1024).toFixed(1))}KB`;
    }

    return `${size}B`;
};

/** 功率W单位转换 */
export const formatWatt = (originValue: number) => {
    const value = Number(originValue) || 0;

    if (value / (1000 * 1000 * 1000) >= 1) {
        return `${Number((value / (1000 * 1000 * 1000)).toFixed(4))}GW`;
    }

    if (value / (1000 * 1000) >= 1) {
        return `${Number((value / (1000 * 1000)).toFixed(3))}MW`;
    }

    if (value / 1000 >= 1) {
        return `${Number((value / 1000).toFixed(2))}KW`;
    }

    return `${value}W`;
};

/** 手机号隐藏中间5位 */
export const hideMobile = (mobile: string | undefined | null) => {
    if (!mobile) {
        return '';
    }
    return `${mobile.slice(0, 3)}****${mobile.slice(-3)}`;
};
