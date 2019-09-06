import axios, { AxiosRequestConfig, AxiosError } from 'axios';

import { getAccessToken, clearAuthToken } from 'app/helpers/storage';

const axiosInstance = axios.create({
    baseURL: 'http://playground.tesonet.lt/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(configs => {
    const accessToken = getAccessToken();

    if (accessToken) {
        configs.headers = {
            Authorization: accessToken,
        };
    }

    return configs;
});

axiosInstance.interceptors.response.use(
    response => response,
    (reject: AxiosError) => {
        if (reject.response.status === 401) {
            clearAuthToken();
        }

        throw reject;
    },
);

export default {
    post: (url: string, data?: any, config?: AxiosRequestConfig) => axiosInstance.post(url, data, config),
    get: (url: string, config?: AxiosRequestConfig) => axiosInstance.get(url, config),
};
