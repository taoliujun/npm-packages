/* eslint-disable import/no-unused-modules */
import type { useRequest } from 'ahooks';

/** ahook useRequest cache */
export const ahookRequestCache = (cacheKey: string): any => {
    return {
        cacheKey,
        setCache: (data: unknown) => {
            return localStorage.setItem(cacheKey, JSON.stringify(data));
        },
        getCache: () => {
            return JSON.parse(localStorage.getItem(cacheKey) || '{}');
        },
    } as Pick<NonNullable<Parameters<typeof useRequest>[1]>, 'cacheKey' | 'setCache' | 'getCache'>;
};
