import React from 'react';
import { Row, Col, BackTop } from 'antd';
import PCArticleList from './pc_article_list'
import PCBlogBanner from './pc_blog_banner';
import PCBlogTips from './pc_blog_tips';
import PCBlogAbout from './pc_blog_about';

export default class PCBlogContent extends React.Component {

	render() {
		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20}>
						<PCBlogBanner />
						<PCBlogTips />
						<Col span={16}>
							<PCArticleList count={20} type="top" />
						</Col>
						<Col span={8}>
							<PCBlogAbout />
						</Col>
					</Col>
					<Col span={2}></Col>
				</Row>
				<BackTop />
			</div>
		);
	};
}
