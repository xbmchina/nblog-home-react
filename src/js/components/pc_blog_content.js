import React from 'react';
import {Row, Col} from 'antd';
import PCArticleList from './pc_article_list'
export default class PCBlogContent extends React.Component {

	render() {
		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20}>
                       <PCArticleList count={20} type="top" />
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	};
}
