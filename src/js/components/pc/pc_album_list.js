import React from 'react';
import { Row, Col } from 'antd';
import PCArticleBlock from '../common/article_block';
import SiteBanner from '../common/site_banner';
import PCArticleList from './pc_article_list'

export default class PCAlbumList extends React.Component {

	render() {
		return (
			<div class="container">
				<Row>
					<Col span={2}></Col>
					<Col span={20}>
						<Col span={16}>
							<PCArticleList specialId={this.props.match.params.id}/>
						</Col>
						<Col span={8}>
							<PCArticleBlock  pageNum={0} pageSize={8} tagName="SpringBoot" width="100%" bordered="false" title="热文排行"/>
							<PCArticleBlock  pageNum={0} pageSize={8} tagName="SpringBoot" width="100%" bordered="false" title="猜你喜欢"/>
							<SiteBanner width="100%" bordered="false" title="本站公众号" bannerTip="专注Java和大数据的平台"/>
							<PCArticleBlock  pageNum={0} pageSize={8} tagName="SpringBoot" width="100%" bordered="false" title="友情链接"/>
						</Col>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	};
}
