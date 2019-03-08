import React from 'react';
import {
    Row,
    Col,
    Timeline,
    BackTop,
    Form,
    Input,
    Button,
    Icon
} from 'antd';

export default class PCMessage extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
    };

    render() {

        const TextArea = Input.TextArea;
        const formItemLayout = {
            labelCol: {
                xs: { span: 8 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        return (

            <div>
                <div class="container">
                    <Row>
                        <Col span={4}></Col>
                        <Col span={16}>
                            <div class="aboutinfo">
                                <p class="aboutinfo-nickname">留言墙</p>
                                <div class="aboutinfo-contact">
                                    <p>沟通交流，拉近你我！</p>
                                </div>
                                {/* <p class="aboutinfo-introduce">本页面可留言、吐槽、提问。欢迎灌水，杜绝广告！</p> */}
                                {/* <p class="aboutinfo-location">
                                    <i class="fa fa-clock-o"></i>&nbsp;<span>2019-3-3 21:25:17</span>
                                </p> */}
                                <Form onSubmit={this.handleSubmit.bind(this)}>
                                    <Form.Item {...formItemLayout} label="名字：">
                                        <Input placeholder="你的名字" />
                                    </Form.Item>
                                    <Form.Item {...formItemLayout} label="内容：">
                                        <TextArea rows={4} placeholder="可留言、吐槽、提问。欢迎灌水，杜绝广告！" />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button htmlType="submit" type="primary">
                                            提交
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                </div>

            </div>
        );
    };
}
