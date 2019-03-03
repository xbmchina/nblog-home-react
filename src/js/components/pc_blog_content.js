import React from 'react';
import {Row, Col,BackTop } from 'antd';
import PCArticleList from './pc_article_list'
import PCBlogBanner from './pc_blog_banner';

export default class PCBlogContent extends React.Component {

	render() {
		return (
			<div>
				<PCBlogBanner/>
				<Row>
					<Col span={2}></Col>
					<Col span={14}>
                       <PCArticleList count={20} type="top" />
					</Col>
					<Col span={6}></Col>
					<Col span={2}></Col>
				</Row>
				<BackTop/>
			</div>
		);
	};
}
