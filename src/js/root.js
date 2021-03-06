import React from 'react';
import ReactDOM from 'react-dom';
import PCBlogIndex from './components/pc/pc_blog_index'

import routers from './router/index';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'antd/dist/antd.css';
import '../asset/css/pc.css';
import '../asset/css/moblie.css';
// import '../asset/css/pc.scss';

import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
const store = configureStore();

class Root extends React.Component {

	render() {
		return (
			<Provider store={store}>
			<Router>
				<Switch>
					<PCBlogIndex>
						{routers.map((r, key) => <Route component={r.component} exact={!!r.exact} key={key} path={r.path} />)}
					</PCBlogIndex>
				</Switch>
			</Router>
			</Provider>
		);
	}
}

ReactDOM.render(
	<Root />,
	document.getElementById('app'));