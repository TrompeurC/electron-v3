import { IMenuData, IUserData } from "@renderer/interface/user";
import { http } from "@renderer/request";


//获取个人信息
export const getInfo = ()=>{
	return http.get<IUserData>('/personal/getInfo')
}

//获取路由
export const getMenu = ( data:string )=>{
	return http.get<IMenuData>(`/personal/getRouters/${data}`)
}
