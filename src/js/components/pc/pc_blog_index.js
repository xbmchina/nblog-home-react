import React from 'react';
import PCBlogHeader from '../common/blog_header';
import PCBlogFooter from '../common/blog_footer';
import { Layout, BackTop } from 'antd';

const {
	Header, Footer, Sider, Content,
} = Layout;

export default class PCBlogIndex extends React.Component {
	render() {
		const headerStyle = {
			position: 'fixed',
			zIndex: '999',
			width: '100%',
			top: '0px',
			// height: '66px',
			float: 'left',
			backgroundColor: 'white',
			borderBottom: '1px solid rgb(238, 238, 238)'
		}
		return (
			<div>
				<Layout>
					<Header style={headerStyle}><PCBlogHeader /></Header>
					<Content style={{ background: 'white',marginTop: '60px' }}>{this.props.children}</Content>
					<Footer style={{ background: 'white' }}><PCBlogFooter /></Footer>
				</Layout>
				<BackTop />
			</div>
		);
	};
}
