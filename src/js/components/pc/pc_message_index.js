import React from 'react';
import {
    Row,
    Col,
    Timeline,
    BackTop,
    Form,
    Input,
    Button,
    Icon,
    message
} from 'antd';

import https from '../../utils/https';
import urls from '../../utils/urls';
import qs from 'Qs';

const FormItem = Form.Item;

class PCMessage extends React.Component {

    constructor() {
        super();


        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                let userid = sessionStorage.userid;
                let token = sessionStorage.token;
                if (userid != null && token != null) {
                    https.post(
                        urls.addMessage,
                        qs.stringify({
                            userId: userid,
                            email:values.email,
                            content: values.content
                        }), {
                            headers: {
                                "Authorization": "Bearer " + token  //token换成从缓存获取
                            }
                        },
                    ).then(res => {
                        const result = res.data;
                        if (result.code === 200) {
                            message.success(result.message);
                        } else {
                            message.warn(result.message);
                        }
                    }).catch(err => {
                        console.error(err);
                        message.warn("请先登录！");
                    });
                } else {
                    message.warn("请先登录！");
                }
            }
        });

    };

    render() {

        const TextArea = Input.TextArea;
        const { getFieldDecorator } = this.props.form;

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
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Item {...formItemLayout} label="邮箱：">
                                        {getFieldDecorator('email', {
                                            rules: [{
                                                type: 'email', message: '你的邮箱呢!',
                                            }, {
                                                required: true, message: '你的邮箱呢!',
                                            }],
                                        })(
                                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="你的邮箱" />
                                        )}
                                    </Form.Item>
                                    <Form.Item {...formItemLayout} label="内容：">
                                        {getFieldDecorator('content', {
                                            rules: [{ required: true, message: '你的宝贵留言呢！！' }],
                                        })(
                                            <TextArea rows={4} placeholder="可留言、吐槽、提问。欢迎灌水，杜绝广告！" />
                                        )}
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



export default PCMessage = Form.create({})(PCMessage);