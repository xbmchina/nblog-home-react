import React from 'react';

import {
    Row,
    Col,
    Timeline,
    Icon
} from 'antd';

export default class PCTimeLine extends React.Component {


    render() {
        const style = {
          marginTop:'20px'
		};
        return (

            <div>
                <div class="container">
                    <Row>
                        <Col span={2}></Col>
                        <Col span={20}>
                            <div style={style}>
                            <Timeline mode="alternate">
                                <Timeline.Item color="green">个人博客<br/>第一版正式发布。<br/>2019.03.08</Timeline.Item>
                                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>傻傻地、<br/>疯狂地 <br/>浪了一阵子.....</Timeline.Item>
                                <Timeline.Item color="red">Job 2。<br/>坐标：广州 <br/>2018.04.19</Timeline.Item>
                                <Timeline.Item>Job 1。<br/>坐标：广州<br/> 2017.03.20</Timeline.Item>
                                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>广东海洋大学毕业<br/> 2017.06.24</Timeline.Item>
                            </Timeline>
                            </div>
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                </div>
            </div>
        );
    };
}
