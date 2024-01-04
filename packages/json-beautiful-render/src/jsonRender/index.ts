import { clearDomChild } from '../utils/dom';
import { generateSingleItem, generateWrapperItem } from './item';
import { renderStyle } from './style';
import type { Options } from './types';
import { isArray, isObject } from '../utils/valueType';

const render = (
    keyName: string,
    values: object,
    opt?: Partial<{ isLast: boolean }> & Partial<Pick<Options, 'expand'>>,
): HTMLElement => {
    const valueEntries = Object.entries(values);
    const isArrayType = isArray(values);

    const result = valueEntries.map(([key, value], index) => {
        const isLast = index === valueEntries.length - 1;
        if (isObject(value) || isArray(value)) {
            return render(isArrayType ? '' : key, value, { isLast, expand: opt?.expand });
        }
        return generateSingleItem(isArrayType ? '' : key, value, {
            isLast,
        });
    });

    return generateWrapperItem(keyName, result, {
        isArrayType,
        isLast: opt?.isLast,
        expand: opt?.expand,
    });
};

const renderMain = (el: HTMLElement | null | undefined, jsonValue: object, options?: Partial<Options>) => {
    const wrapper = document.createElement('div');
    wrapper.appendChild(renderStyle(options));
    wrapper.appendChild(render('', jsonValue, { isLast: true, expand: options?.expand }));

    if (el) {
        clearDomChild(el);
        el.appendChild(wrapper);
    }

    return wrapper;
};

export { renderMain as jsonRender };
export type { Options as JsonRenderOptions };
