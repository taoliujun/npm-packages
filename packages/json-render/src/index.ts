import { ROOT_KEY } from './constant';
import { generateSingleItem, generateWrapperItem } from './dom';
import type { Options } from './types';
import { getValueType, isArray, isObject } from './utils/valueType';

const render = (keyName: string, json: object, options?: Partial<Options>): HTMLElement => {
    const jsonEntries = Object.entries(json);
    const result = jsonEntries.map(([key, value], index) => {
        if (isObject(value) || isArray(value)) {
            return render(key, value, options);
        }

        return generateSingleItem(key, value, {
            isLast: index >= jsonEntries.length - 1,
        });
    });

    return generateWrapperItem(getValueType(json) as 'object', keyName, result);
};

const jsonRender = (el: HTMLElement | null | undefined, json: object, options?: Partial<Options>) => {
    const renderResult = render(ROOT_KEY, json, options);
    el?.appendChild(renderResult);
};

export { jsonRender };
export default jsonRender;
