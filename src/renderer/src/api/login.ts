import {request} from '@renderer/request'



// 获取验证码
export const getCaptcha = (params) => {
  return request({
    url: '/captcha/image',
    params,
    responseType:'arraybuffer',
  })
}

// 用户登录
export const loginByAccount = (data) => {
  return request({
    url: '/u/loginByJson',
    method: 'post',
    data
  })
}
