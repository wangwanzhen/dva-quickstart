import Cookies from 'js-cookie';

let getCookie = (cname)=>{
  return Cookies.get(cname)
}
let setCookie=(cvalue='',cname='',exdays=30)=>{
  Cookies.set(cname,cvalue,{expires:exdays,path:'/',domain:document.domain})
}
let deleteCookie = (cname)=>{
  Cookies.remove(cname,{path:'/',domain:document.domain})
}
export let isApiSuccess = code => code === 0 //调用成功
export let  getUserToken =() =>{
	let userInfo = getCookie('userInfo')
	let token = userInfo ? JSON.parse(userInfo).token:''
	return token
}
export let rememberUserInfo = (cvalue={},cname='userInfo',exdays=30)=>{
	cvalue = JSON.stringify(cvalue)
	setCookie(cvalue,cname,exdays)
}
export let rememberLoginName = (cvalue='',cname='username',exdays=30)=>{
	setCookie(cvalue,cname,exdays)
}
export let clearUserInfo = ()=> deleteCookie('userInfo')
export let getUserInfo = (cname='userInfo')=>{
	let userInfo = getCookie(cname)
	return userInfo ? JSON.parse(userInfo):{}
}
export let clearLoginName = ()=> deleteCookie('username')
