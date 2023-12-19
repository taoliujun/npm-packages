import { ROOT_KEY } from './constant';
import { getValueType, isBoolean, isNull, isNumber, isString, isUndefined } from './utils/valueType';

/** create a wrapper for an item  */
export const generateSingleItem = (
    label: string,
    value: unknown,
    opt?: Partial<{
        isLast: boolean;
    }>
) => {
    const { isLast } = opt || {};
    const comma = isLast ? '' : ',';

    const wrapperDom = document.createElement('div');
    wrapperDom.className = 'flex items-center';

    const labelDom = document.createElement('span');
    labelDom.innerText = `"${label}":`;

    const valueDom = document.createElement('span');
    valueDom.classList.add('item');

    if (isString(value)) {
        valueDom.innerText = `"${value}"${comma}`;
        valueDom.classList.add('string');
    } else if (isNumber(value)) {
        valueDom.innerText = `${value}${comma}`;
        valueDom.classList.add('number');
    } else if (isNull(value) || isUndefined(value) || isBoolean(value)) {
        valueDom.innerText = `${value}${comma}`;
        valueDom.classList.add('specialness');
    } else {
        valueDom.innerText = `${getValueType(value)}${comma}`;
    }

    wrapperDom.appendChild(labelDom);
    wrapperDom.appendChild(valueDom);

    return wrapperDom;
};

/** create a wrapper for items */
export const generateWrapperItem = (type: 'array' | 'object', label: string, values: HTMLElement[]) => {
    const wrapperDom = document.createElement('div');
    wrapperDom.className = 'item-wrapper';

    const typeSperatorBegin = type === 'array' ? '[' : '{';
    const typeSperatorEnd = type === 'array' ? ']' : '}';

    const beginWrapper = document.createElement('div');
    beginWrapper.className = 'begin-wrapper';
    beginWrapper.innerText =
        label === ROOT_KEY ? `${typeSperatorBegin}` : `"${label.toString()}": ${typeSperatorBegin}`;

    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'content-wrapper';
    values.forEach((v) => {
        contentWrapper.appendChild(v);
    });

    const endWrapper = document.createElement('div');
    endWrapper.className = 'end-wrapper';
    endWrapper.innerText = `${typeSperatorEnd},`;

    wrapperDom.appendChild(beginWrapper);
    wrapperDom.appendChild(contentWrapper);
    wrapperDom.appendChild(endWrapper);

    return wrapperDom;
};
