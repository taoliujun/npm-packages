type Color = CSSStyleDeclaration['color'];

interface Options {
    /** 项目激活时，整行区域的背景色 */
    activeBgColor: Color;
    /** 项目激活时，文字区域的背景色 */
    activeHighLightColor: Color;
    /** 项目激活时，该项目所有父级键名的颜色 */
    levelHighLightColor: Color;
    /** 键名的文本颜色 */
    labelColor: Color;
    /** 键值的文本颜色 */
    valueColor: Color;
    /** 不同变量类型的文本颜色 */
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
}

export type { Options };
