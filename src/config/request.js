import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:8090",
  timeout: 5000,
  withCredentials: false,
})


//请求拦截器
request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

//响应拦截器
request.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    const { response, message } = error;
    switch (response.code) {
      case 400:
        message = message ?? '请求参数错误'
        break
      case 401:
        message = message ?? '登录已过期'
        useUserStore().logout()
        break
      case 403:
        message = message ?? '没有权限'
        break
      case 404:
        message = message ?? '资源或接口不存在'
        break
      case 500:
        message = message ?? '服务器异常'
        break
      default:
        message = message ?? `【${code}】: 未知异常!`
        break
    }
    return Promise.reject(message);
  }
)


/**
 * @param {String} url 请求地址
 * @param {object} data   请求参数
 * @param {Object} params
 * @returns
 */

export const post = (url, data, params) => {
  return request({
    method: "post",
    url,
    data,
    params
  })
}

/**
 *
 * @param {*} url
 * @param {*} params
 * @returns
 */

export const get = (url, params) => {
  return request({
    method: "get",
    url,
    params
  })
}

/**
 *
 * @param {*} url
 * @param {*} data
 * @param {*} params
 * @returns
 */

export const put = (url, data, params) => {
  return request({
    method: "put",
    url,
    data,
    params
  })
}

/**
 *
 * @param {*} url
 * @param {*} params
 * @returns
 */

export const del = (url, params) => {
  return request({
    method: "delete",
    url,
    params
  })
}


export default request;
