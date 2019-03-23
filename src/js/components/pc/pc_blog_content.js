import React from 'react';
import { Row, Col } from 'antd';
import BannerCom from '../common/banner_com';
import PCArticleBlock from '../common/article_block';
import SiteBanner from '../common/site_banner';
import PCArticleList from './pc_article_list'
import PCBlogTips from './pc_blog_tips';
import PCBlogAbout from './pc_blog_about';
import VisitSum from '../common/visit_sum';


export default class PCBlogContent extends React.Component {

	render() {
		return (
			<div class="container">
				<Row>
					<Col xs={{ span: 0 }} md={{ span: 2}}></Col>
					<Col xs={{ span: 24 }} md={{ span: 20}}>
						<BannerCom />
						<PCBlogTips />
						<Col xs={{ span: 24 }} md={{ span: 16}}>
							<PCArticleList />
						</Col>
						<Col xs={{ span: 0 }} md={{ span: 8}}>
							<PCBlogAbout />
							<VisitSum />
							<PCArticleBlock pageNum={0} pageSize={8} tagName="SpringBoot" width="100%" bordered="false" title="热文排行" />
							<PCArticleBlock pageNum={0} pageSize={8} tagName="SpringBoot" width="100%" bordered="false" title="猜你喜欢" />
							<SiteBanner width="100%" bordered="false" title="本站公众号" bannerTip="专注Java和大数据的平台" />
							<PCArticleBlock pageNum={0} pageSize={8} tagName="SpringBoot" width="100%" bordered="false" title="友情链接" />

						</Col>
					</Col>
					<Col xs={{ span: 0 }} md={{ span: 2}}></Col>
				</Row>
			</div>
		);
	};
}
