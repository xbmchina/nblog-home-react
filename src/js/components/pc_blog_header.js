import React from 'react';
import LogoIcon from '../../images/logo.jpg';

import {
    Row,
    Col,
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    CheckBox,
    Modal
} from 'antd';


export default class PCBlogHeader extends React.Component {
    render() {
        return (
            <header class="header-line">
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" class="logo">
                            <img src={LogoIcon} alt="logo" />
                        </a>
                    </Col>
                    <Col span={10}>
                        <Menu mode="horizontal">

                            <Menu.Item key="home">
                                <Icon type="home" />首页
                            </Menu.Item>
                            <Menu.Item key="special">
                                <Icon type="book" />专栏
                            </Menu.Item>
                            <Menu.Item key="history">
                                <Icon type="camera" />历程
                            </Menu.Item>
                            <Menu.Item key="message">
                                <Icon type="message" />留言
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Icon type="user" />关于我
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={6}>
                        <Form layout="inline">
                            <Form.Item>
                                <Input prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="搜索内容" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">搜索</Button>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    };
}
