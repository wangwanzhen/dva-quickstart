import React from 'react';
import {getUserToken} from './utils/util';
import { Router, Route, Switch, Redirect } from 'dva/router';
import UserLogin from './views/user/UserLogin';
import AppLayout from './layout/AppLayout';
import dynamic from 'dva/dynamic'; // 路由按需加载

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
  	<Route {...rest} render={props => (
	    getUserToken() ? (
	      <Component {...props}/>
	    ) : (
	      <Redirect to={{
	        pathname: '/user/login',
	        state: { from: props.location }
	      }}/>
	    )
	  )
  	}/>
  )
}
function RouterConfig({ history, app }) {
	const routers = [
		{
			path:'/',
			models:()=>[import('./models/TeamModel'),],
			component:()=> import("./views/team/TeamList")
		}
	]
  return (
    <Router history={history}>
      <Switch>
        <Route path='/user/login' exact component={UserLogin} />
        <AppLayout>
        	{
        		routers.map(({path,...dynamics},key)=>{
        			return <PrivateRoute exact key={key} path={path} component={dynamic({app,...dynamics})} />
        		})
        	}
        </AppLayout>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
