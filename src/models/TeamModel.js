import * as UserService from '../services/UserService'
import {} from '../utils/util'
export default {
  namespace:'teammodel',
  state:{
  },
  effects:{

  },
  reducers:{
    save(state,{payload}){
      return {...state,...payload}
    }
  },
  subscriptions:{

  }
}
