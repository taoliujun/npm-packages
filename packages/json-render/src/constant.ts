import type { Options } from './types';

export const DEFAULT_VALUES: Options = {
    valueColors: {
        string: '#0b7500',
        number: '#1a01cc',
        specialness: '#ff6b00',
    },
    textColor: '#000',
    activeBgColor: '#f9f9f9',
    activeHighLightColor: '#ff5',
    levelHighLightColor: '#f00',
};

export const ROOT_KEY = `$$ROOT_${Math.random()}`;
