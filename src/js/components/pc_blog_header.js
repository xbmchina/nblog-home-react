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

import { Link } from "react-router-dom";

export default class PCBlogHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            current: 'top'
        }
    }

    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <header class="header-line">
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" class="logo">
                            <img src={LogoIcon} alt="logo" />
                            {/* <span>XbmChina</span> */}
                        </a>
                    </Col>
                    <Col span={10}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>

                            <Menu.Item key="home">
                                <Link to='/'>
                                    <Icon type="home" />首页
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="special">
                                <Link to='/album'>
                                    <Icon type="book" />专栏
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="history">
                                <Link to='/timeline'>
                                    <Icon type="camera" />历程
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="message">
                                <Link to='/message'>
                                    <Icon type="message" />留言
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link to='/about'>
                                    <Icon type="user" />关于我
                                </Link>
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
