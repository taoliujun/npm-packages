import { ClassNameEnum, generateClassName } from './style';
import { getValueType, isBoolean, isNull, isNumber, isString } from '../utils/valueType';
import type { Options } from './types';
import { ROOT_KEY } from './constant';

/** create a wrapper for an item  */
export const generateSingleItem = (
    label: string,
    value: unknown,
    opt?: Partial<{
        isLast: boolean;
    }>,
) => {
    const { isLast } = opt || {};
    const comma = isLast ? '' : ',';

    const wrapperDom = document.createElement('div');
    wrapperDom.classList.add(generateClassName(ClassNameEnum.SINGLE_WRAPPER));

    const contentWrapperDom = document.createElement('div');
    contentWrapperDom.classList.add(generateClassName(ClassNameEnum.SINGLE_CONTENT));

    if (label) {
        const labelDom = document.createElement('span');
        labelDom.classList.add(generateClassName(ClassNameEnum.SINGLE_LABEL));
        labelDom.innerHTML = `"${label}":&nbsp;`;
        contentWrapperDom.appendChild(labelDom);
    }

    const valueDom = document.createElement('span');
    valueDom.classList.add(generateClassName(ClassNameEnum.SINGLE_VALUE));

    if (isString(value)) {
        valueDom.innerText = `"${value}"${comma}`;
        valueDom.classList.add(generateClassName(ClassNameEnum.SINGLE_STRING));
    } else if (isNumber(value)) {
        valueDom.innerText = `${value}${comma}`;
        valueDom.classList.add(generateClassName(ClassNameEnum.SINGLE_NUMBER));
    } else if (isNull(value) || isBoolean(value)) {
        valueDom.innerText = `${value}${comma}`;
        valueDom.classList.add(generateClassName(ClassNameEnum.SINGLE_SPECIALNESS));
    } else {
        valueDom.innerText = `${getValueType(value)}${comma}`;
    }
    contentWrapperDom.appendChild(valueDom);

    wrapperDom.appendChild(contentWrapperDom);

    return wrapperDom;
};

/** create a wrapper for items */
export const generateWrapperItem = (
    label: string,
    values: HTMLElement[],
    opt?: Partial<{
        isArrayType: boolean;
        isLast: boolean;
    }> &
        Partial<Pick<Options, 'expand'>>,
) => {
    const { isArrayType, isLast, expand = false } = opt || {};

    const wrapperDom = document.createElement('div');
    wrapperDom.classList.add(generateClassName(ClassNameEnum.ITEMS_WRAPPER));
    if (!label || label === ROOT_KEY) {
        wrapperDom.classList.add(generateClassName(ClassNameEnum.ROOT_WRAPPER));
    }
    if (label === ROOT_KEY && expand) {
        wrapperDom.classList.add(generateClassName(ClassNameEnum.BASE_ROOT_WRAPPER));
    }

    const expandDom = document.createElement('button');
    expandDom.classList.add(generateClassName(ClassNameEnum.ITEMS_EXPAND));
    expandDom.innerText = '+';

    const typeSperatorBegin = isArrayType ? '[' : '{';
    const typeSperatorEnd = isArrayType ? ']' : '}';

    const beginWrapper = document.createElement('div');
    beginWrapper.classList.add(generateClassName(ClassNameEnum.ITEMS_BEGIN));
    beginWrapper.innerHTML =
        label && label !== ROOT_KEY ? `"${label.toString()}":&nbsp;${typeSperatorBegin}` : `${typeSperatorBegin}`;
    if (expand) {
        beginWrapper.prepend(expandDom);
    }

    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add(generateClassName(ClassNameEnum.ITEMS_CONTENT));
    values.forEach((v) => {
        contentWrapper.appendChild(v);
    });

    const endWrapper = document.createElement('div');
    endWrapper.classList.add(generateClassName(ClassNameEnum.ITEMS_END));
    endWrapper.innerText = `${typeSperatorEnd}${isLast ? '' : ','}`;

    wrapperDom.appendChild(beginWrapper);
    wrapperDom.appendChild(contentWrapper);
    wrapperDom.appendChild(endWrapper);

    let hasExpand = false;
    const toggleExpand = () => {
        hasExpand = !hasExpand;
        expandDom.innerText = hasExpand ? '-' : '+';
        contentWrapper.classList.toggle(generateClassName(ClassNameEnum.ITEMS_CONTENT_EXPAND), hasExpand);
    };

    toggleExpand();
    expandDom.addEventListener('click', toggleExpand);

    return wrapperDom;
};
