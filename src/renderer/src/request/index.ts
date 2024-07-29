import  axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

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


export const request = instance
