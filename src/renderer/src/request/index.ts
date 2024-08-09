import useUserStore from '@renderer/store/useUserStore'
import  axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'


export interface ResponseType <T = any> {
  code: string
  msg: string
  data?: T
}

const instance = axios.create({
  baseURL: '/api',
  timeout: 5 * 1000
})


instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = useUserStore().token
  if(token) {
    // config.headers.Authorization = `Bearer ${token}`
    config.headers.Authorization = `${token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})


instance.interceptors.response.use((response: AxiosResponse) => {
  return response.data
}, err => {
  return Promise.reject(err)
})

export const http = {
  async get<T>(url: string , params: Record<string, any> = {}, config: Record<string, any> = {}): Promise<ResponseType<T>> {
    return instance.get(url , {
      params,
      ...config
    })
  },
  async post<T>(url: string, data: Record<string, any> = {}, config: Record<string, any> = {}): Promise<ResponseType<T>> {
    return  instance.post(url, data, config)
  }
}


export const request = <T = any>(params) => {
  return instance(params) as any as ResponseType<T>
}
