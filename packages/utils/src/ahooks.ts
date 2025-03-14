import type { useRequest } from 'ahooks';

/** ahook useRequest cache */
export const ahookRequestCache = <T = unknown>(cacheKey: string) => {
    return {
        cacheKey,
        setCache: (data: unknown) => {
            return localStorage.setItem(cacheKey, JSON.stringify(data));
        },
        getCache: () => {
            return JSON.parse(localStorage.getItem(cacheKey) || '{}');
        },
    } as Pick<NonNullable<Parameters<typeof useRequest<T, any>>[1]>, 'cacheKey' | 'setCache' | 'getCache'>;
};
