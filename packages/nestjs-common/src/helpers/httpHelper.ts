import { jsonParse, jsonStringify } from '@taoliujun/common-utils/lib/utils/json';
import { ProxyAgent } from 'undici';

/** 发起http请求 */
export class HttpHelper {
    async post<T>(
        url: string,
        data: unknown,
        headers?: Record<string, string>,
        opts?: Partial<{
            /** 代理 */
            httpProxy: string;
        }>,
    ) {
        const signal = new AbortController();

        const t = setTimeout(() => {
            signal.abort();
        }, 10000);

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: jsonStringify(data),
            signal: signal.signal,
            ...(opts?.httpProxy && {
                dispatcher: new ProxyAgent(opts.httpProxy),
            }),
        });

        clearTimeout(t);

        return res.text().then((e) => {
            return jsonParse<T>(e);
        });
    }

    async postWithFormData<T>(
        url: string,
        data: object,
        headers?: Record<string, string>,
        opts?: Partial<{
            /** 代理 */
            httpProxy: string;
        }>,
    ) {
        const signal = new AbortController();

        const t = setTimeout(() => {
            signal.abort();
        }, 10000);

        const body = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            body.append(key, value);
        });

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded',
                ...headers,
            },
            // body: qs.stringify(data),
            body,
            signal: signal.signal,
            ...(opts?.httpProxy && {
                dispatcher: new ProxyAgent(opts.httpProxy),
            }),
        });

        clearTimeout(t);

        return res.text().then((e) => {
            return jsonParse<T>(e);
        });
    }

    async get<T>(
        url: string,
        data?: ConstructorParameters<typeof URLSearchParams>[0],
        headers?: Record<string, string>,
        opts?: Partial<{
            /** 代理 */
            httpProxy: string;
        }>,
    ) {
        const signal = new AbortController();

        const t = setTimeout(() => {
            signal.abort();
        }, 10000);

        const q = new URLSearchParams(data).toString();
        const queryFlag = url.includes('?') ? '&' : '?';

        const sUrl = `${url}${q ? queryFlag : ''}${q}`;

        // console.debug('==get==', { sUrl });

        const res = await fetch(sUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            signal: signal.signal,
            ...(opts?.httpProxy && {
                dispatcher: new ProxyAgent(opts.httpProxy),
            }),
        });

        clearTimeout(t);

        return res.text().then((e) => {
            return jsonParse<T>(e);
        });
    }
}
