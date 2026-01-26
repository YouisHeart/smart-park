import { message } from "antd";
import axios from "axios";
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from "axios";

const http: AxiosInstance = axios.create({
    baseURL: 'https://www.demo.com',
    timeout: 5000
})

// 请求拦截器
http.interceptors.request.use((config: InternalAxiosRequestConfig)=> {
    return config
})

// 响应拦截器
http.interceptors.response.use((response: AxiosResponse) => {
    const res = response.data
    if (res.code != 200) {
        message.error(res.code + ":" + res.message);
        return Promise.reject(new Error(res.message))
    }
    return response.data
})

export default http