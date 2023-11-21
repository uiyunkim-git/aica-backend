/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse, Method } from 'axios';
import { useRouter } from 'next/navigation';
import { useCallback, useReducer } from 'react';

import { Optional } from '@Types';
import { asyncStateReducer } from '@Functions';
import { useLocalStorage } from './useLocalStorage';

export interface RequestOptions {
    url: string;
    method: Method;
    params?: any;
    data?: any;
    headers?: any;
}

type RequestFunction = <T>(
    options: RequestOptions,
) => Promise<AxiosResponse<IResponse<T>, any>>;

interface RequestHandler {
    request: RequestFunction;
    loading: boolean;
    error: boolean;
}

interface IResponse<D> {
    data: D;
    message: string;
    meta: Optional<Record<string, unknown> | string>;
}

export function useRequest(deps: any[] = []): RequestHandler {
    const router = useRouter();
    const [accessToken] = useLocalStorage<string>('accessToken', '');

    const [{ loading, error }, dispatch] = useReducer(asyncStateReducer, {
        loading: true,
        error: false,
    });

    const request = useCallback(
        async <T>({ url, method, params, data, headers }: RequestOptions) => {
            try {
                dispatch({ type: 'LOADING' });
                const res = await axios.request<IResponse<T>>({
                    url,
                    method,
                    params,
                    data,
                    headers: {
                        ...headers,
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                dispatch({ type: 'SUCCESS' });
                return res;
            } catch (error: any) {
                dispatch({ type: 'ERROR', error });

                const resStatus = error.response?.status;
                if (resStatus === 401 || resStatus === 403) {
                    router.push('/login');
                }

                return error;
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        deps,
    );

    return { request, loading, error };
}
