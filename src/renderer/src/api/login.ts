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

//登录动态验证码
export const loginCaptcha = ( data )=>{
	return request({
    url:'/captcha/sendRegisterOrLoginCaptcha',
    method: "get",
    params:data
  })
}

//手机验证码登录
export const loginByMobile = ( data )=>{
	return request({
    method: "post",
    url:'/u/loginByMobile' ,
    data
  } )
}
