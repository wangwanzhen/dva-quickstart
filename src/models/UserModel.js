import * as UserService from '../services/UserService'
import { rememberUserInfo, rememberLoginName, clearUserInfo, getUserInfo, clearLoginName } from '../utils/util'
export default {
	namespace:'usermodel',
	state:{
		userInfo:getUserInfo()
	},
	effects:{
		* userLogin({payload:{login='',password='',isRember=true},success,fail},{call,put}){
			const data = yield call(UserService.userLogin, {
        login,
        password
      })
      if (data.code === 0) {
        rememberUserInfo(data.data)
        success(data.data)
        isRember ? rememberLoginName(login) : clearLoginName()
        yield put({
          type: 'save',
          payload: {
            userInfo: data.data
          }
        })
      } else {
        // fail(data.message)
      }
		}
	},
	reducers:{
		save(state,{payload}){
			return {...state,...payload}
		}
	},
	subscriptions:{

	}
}
