import React from 'react';
import { Row, Col, BackTop } from 'antd';
import PCArticleList from './pc_article_list'
import PCBlogBanner from './pc_blog_banner';
import PCBlogTips from './pc_blog_tips';
import PCBlogAbout from './pc_blog_about';
import PCArticleBlock from './pc_article_block';


export default class PCBlogContent extends React.Component {

	render() {
		return (
			<div class="container">
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
							<PCArticleBlock  count={8} type="top" width="100%" bordered="false" title="热文排行"/>
							<PCArticleBlock  count={8} type="guonei" width="100%" bordered="false" title="最近分享"/>
							<PCArticleBlock  count={8} type="yule" width="100%" bordered="false" title="友情链接"/>
						</Col>
					</Col>
					<Col span={2}></Col>
				</Row>
				<BackTop />
			</div>
		);
	};
}
