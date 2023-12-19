type Color = CSSStyleDeclaration['color'];

interface Options {
    /** 不同变量类型的颜色 */
    valueColors: Partial<
        Record<
            /** 字符串 */
            | 'string'
            /** 数字 */
            | 'number'
            /** 特殊值的颜色，如boolean、null */
            | 'specialness',
            Color
        >
    >;
    /** 普通文字颜色 */
    textColor: Color;
    /** 项目激活时，整行区域的背景色 */
    activeBgColor: Color;
    /** 项目激活时，文字区域的背景色 */
    activeHighLightColor: Color;
    /** 项目激活时，该项目所有父级键名的颜色 */
    levelHighLightColor: Color;
}

export type { Options };
