import { generateSingleItem, generateWrapperItem } from './item';
import { renderStyle } from './style';
import type { Options } from './types';
import { clearDomChild } from './utils/dom';
import { isArray, isObject } from './utils/valueType';

const render = (keyName: string, values: object, opt?: Partial<{ isLast: boolean }>): HTMLElement => {
    const valueEntries = Object.entries(values);
    const isArrayType = isArray(values);

    const result = valueEntries.map(([key, value], index) => {
        const isLast = index === valueEntries.length - 1;
        if (isObject(value) || isArray(value)) {
            return render(isArrayType ? '' : key, value, { isLast });
        }
        return generateSingleItem(isArrayType ? '' : key, value, {
            isLast,
        });
    });

    return generateWrapperItem(keyName, result, {
        isArrayType,
        isLast: opt?.isLast,
    });
};

const jsonRender = (el: HTMLElement | null | undefined, jsonValue: object, options?: Partial<Options>) => {
    clearDomChild(el);
    el?.appendChild(renderStyle(options));
    el?.appendChild(render('', jsonValue, { isLast: true }));
};

export { jsonRender };
export default jsonRender;
