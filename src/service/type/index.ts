import type { AxiosResponse, AxiosRequestConfig } from 'axios'

export interface keyieRequestType<T = AxiosResponse> {
  onFulfilled?: (config: AxiosRequestConfig) => AxiosRequestConfig
  onRejected?: (error: any) => any
  onFulfilledRes?: (res: T) => T
  onRejectedRes?: (error: any) => any
}

// 针对AxiosRequestConfig配置进行拓展
export interface KeyieRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: keyieRequestType<T>
}
