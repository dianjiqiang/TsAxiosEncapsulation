import { BASE_URL, TIME_OUT } from './config'
import KeyieRequest from './request'

export * from './modules/home'

const keyieRequest = new KeyieRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export const aibiyingRequest = new KeyieRequest({
  baseURL: 'http://codercba.com:1888/airbnb/api',
  timeout: 8000,
  // 添加局部拦截器 由于我们本身类型中是没有 interceptors 属性的 所以我们只能给他添加类型
  interceptors: {
    onFulfilled(config) {
      console.log('爱彼迎请求成功的拦截')
      return config
    },
    onRejected(err) {},
    onFulfilledRes(res) {
      console.log('爱彼迎响应成功的拦截')
      return res
    },
    onRejectedRes(error) {}
  }
})

export default keyieRequest
