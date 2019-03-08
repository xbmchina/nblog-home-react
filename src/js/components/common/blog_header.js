import React from 'react';
import LogoIcon from '../../../images/logo.jpg';

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
import LoginAndRegCom from '../common/login_and_reg';

const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;

class PCBlogHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            current: 'home',
            modalVisible: false,
            hasLogined: false,
            username: null,
            avatar: null,
            userid: null,
            token: null
        }
    }


    componentDidMount() {
        if (sessionStorage.userid != null && sessionStorage.userid != '') {
            this.setState({ hasLogined: true });
            this.setState({ username: sessionStorage.username, userid: sessionStorage.userid, avatar: sessionStorage.avatar });
            this.setState({ token: sessionStorage.token });
        }
    }

    setModalVisible(value) {
        this.setState({ modalVisible: value });
    };

    //从子组件中拿数据
    getDataForm(value) {
        console.log("getDataForm 11111:" + value);
        this.setState(value)
        console.log("getDataForm 2342412:" + this.state);
    }

    callback(key) {
        if (key == 1) {
            this.setState({ action: 'login' });
        } else if (key == 2) {
            this.setState({ action: 'register' });
        }
    };

    logout() {
        sessionStorage.clear();
        this.setState({
            modalVisible: false,
            hasLogined: false,
            username: null,
            avatar: null,
            userid: null,
            token: null
        });
    };

    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
        console.log('click '+ this.setState.current);
        if (e.key === 'logout') {
            this.logout();
        }
    };



    render() {
        const { hasLogined, username, avatar, userid } = this.state;
        return (
            <header class="header-line">
                <Row>
                    <Col span={2}></Col>
                    <Col span={2}>
                        <a href="/" class="logo">
                            <img src={LogoIcon} alt="logo" />
                            {/* <span>XbmChina</span> */}
                        </a>
                    </Col>
                    <Col span={10}>
                        <Menu style={{height:"60px"}} mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>

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
                    <Col span={8}>
                        <div>
                            <Form layout="inline">
                                <Form.Item>
                                    <Input prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="搜索内容" />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">搜索</Button>
                                    {hasLogined === true ?
                                        <Menu class="logout-menu" mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                                            <SubMenu title={<span className="submenu-title-wrapper">{avatar === null || avatar=== undefined ? <img style={{ height: '42px' }} src={LogoIcon} alt="avatar" /> : <img style={{ height: '42px' }} src={avatar} alt="avatar" />}{username}</span>}>
                                                <Menu.Item key="logout">退出</Menu.Item>
                                            </SubMenu>
                                        </Menu>
                                        : <Button type="danger" style={{ marginLeft: '18px', padding: '0 10px 0 10px' }} onClick={() => this.setModalVisible(true)}><Icon type="login" /></Button>
                                    }
                                </Form.Item>
                            </Form>
                        </div>

                        <Modal visible={this.state.modalVisible} footer={null} onCancel={() => this.setModalVisible(false)} >
                            <Tabs type="card" onChange={this.callback.bind(this)} class="login-tab">
                                <TabPane tab="登录" key="1">
                                    <LoginAndRegCom tabSelect={1} closeModal={this.getDataForm.bind(this)} />
                                </TabPane>
                                <TabPane tab="注册" key="2">
                                    <LoginAndRegCom tabSelect={2} closeModal={this.getDataForm.bind(this)} />
                                </TabPane>
                            </Tabs>
                        </Modal>

                    </Col>
                    <Col span={2}>
                    </Col>
                </Row>
            </header>
        );
    };
}



export default PCBlogHeader = Form.create({})(PCBlogHeader);