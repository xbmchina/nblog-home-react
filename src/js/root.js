import React from 'react';
import ReactDOM from 'react-dom';
import PCBlogIndex from './components/pc_blog_index'

import 'antd/dist/antd.css';
import '../css/pc.css';

class Root extends React.Component {

	render() {
		return (
            <PCBlogIndex />
		);
	}
}

ReactDOM.render(
	<Root />,
	document.getElementById('app'));