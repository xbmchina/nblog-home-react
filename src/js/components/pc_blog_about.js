import React from 'react';
import {Row, Col } from 'antd';
export default class PCBlogAbout extends React.Component {

	render() {
		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={14}>
                       <PCArticleList count={20} type="top" />
					</Col>
					<Col span={6}></Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	};
}
