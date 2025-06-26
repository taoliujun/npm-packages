import { jsonParse, jsonStringify } from './json';

/** 发起http请求 */
export class HttpHelper {
    public async baseRequest<T>(url: string, params: RequestInit) {
        const signal = new AbortController();

        const t = setTimeout(() => {
            signal.abort();
        }, 10000);

        const res = await fetch(url, {
            ...params,
            headers: {
                ...params?.headers,
            },
            signal: signal.signal,
        });

        clearTimeout(t);

        return res.text().then((e) => {
            return jsonParse<T>(e);
        });
    }

    async post<T>(url: string, data: unknown, headers?: Record<string, string>) {
        return this.baseRequest<T>(url, {
            method: 'POST',
            body: jsonStringify(data),
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        });
    }

    async postWithFormData<T>(url: string, data: object, headers?: Record<string, string>) {
        const body = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            body.append(key, value);
        });

        return this.baseRequest<T>(url, {
            method: 'POST',
            body,
            headers: {
                ...headers,
            },
        });
    }

    async get<T>(
        url: string,
        data?: ConstructorParameters<typeof URLSearchParams>[0],
        headers?: Record<string, string>,
    ) {
        const q = new URLSearchParams(data).toString();
        const queryFlag = url.includes('?') ? '&' : '?';

        const sUrl = `${url}${q ? queryFlag : ''}${q}`;

        return this.baseRequest<T>(sUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        });
    }

    async put<T>(url: string, data: unknown, headers?: Record<string, string>) {
        return this.baseRequest<T>(url, {
            method: 'PUT',
            body: jsonStringify(data),
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        });
    }

    async delete<T>(url: string, data: unknown, headers?: Record<string, string>) {
        return this.baseRequest<T>(url, {
            method: 'GET',
            body: jsonStringify(data),
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        });
    }
}
