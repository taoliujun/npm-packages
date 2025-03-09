interface Option {
    label: string;
    value: string | number;
}

/** 数组转options */
export const arrayToOptions = (array: (string | number)[], dict: Record<string | number, string>) => {
    return (
        array?.map((v) => {
            const out: Option = {
                label: dict[v],
                value: v,
            };
            return out;
        }) || []
    );
};

/** 字典转options */
export const dictToOptions = (dict: Record<string | number, string>, keyType: 'string' | 'number' = 'number') => {
    return Object.entries(dict || {}).map(([key, value]) => {
        const out: Option = {
            label: value,
            value: keyType === 'number' ? Number(key) : key,
        };
        return out;
    });
};
