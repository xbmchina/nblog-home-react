import React from 'react';
import ReactDOM from 'react-dom';
import PCBlogIndex from './components/pc_blog_index'
import PCArticleDetail from './components/pc_article_detail';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import '../css/pc.css';

class Root extends React.Component {

	render() {
		return (
		<Router>
			<div>
				<Route exact path="/" component={PCBlogIndex}></Route>
				<Route path="/detail/:id" component={PCArticleDetail}></Route>
			</div>
		</Router>

		);
	}
}

ReactDOM.render(
	<Root />,
	document.getElementById('app'));