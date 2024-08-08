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
    return await instance.get(url , {
      params,
      ...config
    })
  },
  async post<T>(url: string, data: Record<string, any> = {}, config: Record<string, any> = {}): Promise<ResponseType<T>> {
    return await instance.post(url, data, config)
  }
}


export const request = <T>(params) => {
  return instance(params) as any as ResponseType<T>
}
