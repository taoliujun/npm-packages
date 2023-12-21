import type { Options } from './types';
import { DEFAULT_OPTIONS } from './constant';

export enum ClassNameEnum {
    ROOT_WRAPPER = 'root_wrapper',

    ITEMS_WRAPPER = 'items_wrapper',
    ITEMS_CONTENT = 'items_content',
    ITEMS_BEGIN = 'items_begin',
    ITEMS_END = 'items_end',

    SINGLE_WRAPPER = 'single_wrapper',
    SINGLE_CONTENT = 'single_content',
    SINGLE_LABEL = 'single_label',
    SINGLE_VALUE = 'single_value',
    SINGLE_STRING = 'single_string',
    SINGLE_NUMBER = 'single_number',
    SINGLE_SPECIALNESS = 'single_specialness',
}

const classNamePrefix = Math.random().toString(36).slice(2);

const BASE_STYLES = {
    lineHeight: 20,
    fontSize: 14,
};

export const generateClassName = (className: ClassNameEnum) => {
    return `json_render_${classNamePrefix}_${className}`;
};

export const renderStyle = (options?: Partial<Options>): HTMLElement => {
    const valueColors = { ...DEFAULT_OPTIONS.valueColors, ...(options?.valueColors ?? {}) };
    const { labelColor, valueColor, activeBgColor, activeHighLightColor, levelHighLightColor } = {
        ...DEFAULT_OPTIONS,
        ...options,
    };

    const dom = document.createElement('style');
    dom.setAttribute('rel', 'stylesheet');

    // root
    dom.innerHTML += `
        .${generateClassName(ClassNameEnum.ROOT_WRAPPER)} {
          position: relative;
          font-family: monospace, Arial;
          font-size: ${BASE_STYLES.fontSize}px;
          line-height: ${BASE_STYLES.lineHeight}px;
        }
        .${generateClassName(ClassNameEnum.ROOT_WRAPPER)} * {
          font-family: inherit;
        }
    `;

    // items wrapper
    dom.innerHTML += `
        .${generateClassName(ClassNameEnum.ITEMS_WRAPPER)} {
          position: relative;
        }
        .${generateClassName(ClassNameEnum.ITEMS_WRAPPER)}::before {
          content: ' ';
          position: absolute;
          left: 0;
          top: ${BASE_STYLES.lineHeight}px;
          bottom: ${BASE_STYLES.lineHeight}px;
          border-left: 1px dashed #ccc;
        }
        .${generateClassName(ClassNameEnum.ITEMS_CONTENT)} {
          padding-left: 24px;
        }
        .${generateClassName(ClassNameEnum.ITEMS_BEGIN)} {
          color: ${labelColor};
        }
        .${generateClassName(ClassNameEnum.ITEMS_END)} {
          color: ${labelColor};
        }
        .${generateClassName(ClassNameEnum.ITEMS_WRAPPER)}:hover > .${generateClassName(ClassNameEnum.ITEMS_BEGIN)},
        .${generateClassName(ClassNameEnum.ITEMS_WRAPPER)}:hover > .${generateClassName(ClassNameEnum.ITEMS_END)} {
          color: ${levelHighLightColor};
        }
    `;

    // single wrapper
    dom.innerHTML += `
      .${generateClassName(ClassNameEnum.SINGLE_WRAPPER)} {
        display: flex;
        align-items: center;
      }
      .${generateClassName(ClassNameEnum.SINGLE_CONTENT)} {
        display: inline-flex;
        align-items: center;
      }
      .${generateClassName(ClassNameEnum.SINGLE_WRAPPER)}.active,
      .${generateClassName(ClassNameEnum.SINGLE_WRAPPER)}:hover {
        background-color: ${activeBgColor};
      }
      .${generateClassName(ClassNameEnum.SINGLE_WRAPPER)}.active .${generateClassName(ClassNameEnum.SINGLE_CONTENT)},
      .${generateClassName(ClassNameEnum.SINGLE_WRAPPER)}:hover  .${generateClassName(ClassNameEnum.SINGLE_CONTENT)} {
        background-color: ${activeHighLightColor};
        font-weight: 700;
      }
      .${generateClassName(ClassNameEnum.SINGLE_LABEL)} {
        color: ${labelColor};
      }
      .${generateClassName(ClassNameEnum.SINGLE_VALUE)} {
        color: ${valueColor};
      }
      .${generateClassName(ClassNameEnum.SINGLE_STRING)} {
        color: ${valueColors.string};
      }
      .${generateClassName(ClassNameEnum.SINGLE_NUMBER)} {
        color: ${valueColors.number};
      }
      .${generateClassName(ClassNameEnum.SINGLE_SPECIALNESS)} {
        color: ${valueColors.specialness};
      }
    `;

    return dom;
};
