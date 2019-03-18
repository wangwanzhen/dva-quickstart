import {axiosPost ,axiosGet} from '../utils/request'
import {API} from '../utils/config'
export function userLogin({login,password}) {
	return axiosPost(`${API.userLogin}?login=${login}&password=${password}`)
}
