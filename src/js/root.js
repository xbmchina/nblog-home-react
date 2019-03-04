import React from 'react';
import ReactDOM from 'react-dom';
import PCBlogIndex from './components/pc_blog_index'
import PCArticleDetail from './components/pc_article_detail';
import PCAlbumIndex from './components/pc_album_index';
import PCTimeLine from './components/pc_timeline_index';
import PCMessage from './components/pc_message_index';
import PCAboutMe from './components/pc_aboutme_index';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import '../css/monokai_sublime.min.css';
import '../css/md.css';
import '../css/pc.css';

class Root extends React.Component {

	render() {
		return (
		<Router>
			<div>
				<Route exact path="/" component={PCBlogIndex}></Route>
				<Route path="/detail/:id" component={PCArticleDetail}></Route>
				<Route path="/album" component={PCAlbumIndex}></Route>
				<Route path="/timeline" component={PCTimeLine}></Route>
				<Route path="/message" component={PCMessage}></Route>
				<Route path="/about" component={PCAboutMe}></Route>
			</div>
		</Router>

		);
	}
}

ReactDOM.render(
	<Root />,
	document.getElementById('app'));