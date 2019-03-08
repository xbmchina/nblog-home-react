import React from 'react';
import ReactDOM from 'react-dom';
import PCBlogIndex from './components/pc/pc_blog_index'
import PCArticleDetail from './components/pc/pc_article_detail';
import PCAlbumIndex from './components/pc/pc_album_index';
import PCTimeLine from './components/pc/pc_timeline_index';
import PCMessage from './components/pc/pc_message_index';
import PCAboutMe from './components/pc/pc_aboutme_index';

import routers from './router/index';

import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import 'antd/dist/antd.css';
import '../css/monokai_sublime.min.css';
import '../css/md.css';
import '../css/pc.css';

class Root extends React.Component {

	render() {
		return (
			<Router>
				{/* <Route exact path="/" component={PCBlogIndex}></Route>
				<Route path="/detail/:id" component={PCArticleDetail}></Route>
				<Route path="/album" component={PCAlbumIndex}></Route>
				<Route path="/timeline" component={PCTimeLine}></Route>
				<Route path="/message" component={PCMessage}></Route>
				<Route path="/about" component={PCAboutMe}></Route> */}
				<Switch>
					<PCBlogIndex>
						{routers.map((r, key) => <Route component={r.component} exact={!!r.exact} key={key} path={r.path} />)}
					</PCBlogIndex>
				</Switch>
			</Router>

		);
	}
}

ReactDOM.render(
	<Root />,
	document.getElementById('app'));