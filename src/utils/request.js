import {isApiSuccess,getUserToken} from './util';
import {APIFIX,PUBLICAPIFIX} from './config';
import axios from 'axios';
require('es6-promise').polyfill();

axios.defaults.baseURL = APIFIX
axios.defaults.timeout = 60000
axios.interceptors.request.use(config=>{
  if(config.url.includes('catechism')||config.url.includes('provinces')||config.url.includes('/hospital/level/list')){
    config.baseURL = PUBLICAPIFIX
  }
  config.headers.token = getUserToken()
  return config
})
axios.interceptors.response.use(res=>{
  if(isApiSuccess(res.data.code)){
    return res.data
  }else{
    let message = ''
    if(!res) message=''
    message = res.data.message
    return Promise.reject(message)
  }
},rea=>{
  if (rea.code === 'ECONNABORTED') return Promise.reject('请求超时')
  let {data={},status} = rea.response
  if(data.code===401){
    window.location.href = '/user/login'
  }
  if (status >= 500) {
    return Promise.reject('服务器出错了！')
  }
  return Promise.reject(data.message)
})
export function axiosPost(url,data){
  return axios.post(url,data).then(res=>{
    return Promise.resolve(res)
  },rea=>{
    return Promise.reject(rea)
  })
}
export function axiosGet(url,data){
  return axios.get(url,{params:data}).then(res=>{
    return Promise.resolve(res)
  },rea=>{
    return Promise.reject(rea)
  })
}
