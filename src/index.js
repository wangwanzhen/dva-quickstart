import '@babel/polyfill';
import dva from 'dva';
import './index.css';
import { LocaleProvider,message } from 'antd'
import {createBrowserHistory as creteHistory} from 'history'
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva({
	history:creteHistory(),
	onError(error) {
    message.error(error.message);
  }
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/UserModel').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
