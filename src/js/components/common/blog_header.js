import React from 'react';
import LogoIcon from '../../../asset/images/logo.jpg';

import {
    Row,
    Col,
    Menu,
    Icon,
    Tabs,
    Form,
    Input,
    Button,
    Modal
} from 'antd';

import { Link } from "react-router-dom";
import LoginAndRegCom from '../common/login_and_reg';

const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

import { connect } from 'react-redux';
import { selectArticleList } from '../../store/actions/article'

@connect(
    state => ({ article: state.article.article }),
    { selectArticleList }
)
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
            token: null,
            searchValue: ''
        }
    }


    componentDidMount() {
        if (sessionStorage.userid != null && sessionStorage.userid != '') {
            this.setState({ hasLogined: true });
            this.setState({ username: sessionStorage.username, userid: sessionStorage.userid, avatar: sessionStorage.avatar });
            this.setState({ token: sessionStorage.token });
        }
    }

    searchSumbit = () => {
        // if (!this.state.searchValue) {
        //     return;
        // }
        this.props.selectArticleList({
            title: this.state.searchValue
        })
    }

    searchChangeValue = (e) => {
        this.setState({
            searchValue: e.target.value,
        });
    };

    setModalVisible(value) {
        this.setState({ modalVisible: value });
    };

    //从子组件中拿数据
    getDataForm(value) {
        this.setState(value)
    }

    callback(key) {

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
        this.setState({
            current: e.key
        });
        if (e.key === 'logout') {
            this.logout();
        }
        if(e.key === 'login') {
            this.setModalVisible(true);
        }
    };



    render() {
        const { hasLogined, username, avatar, userid } = this.state;
        return (
            <header class="header-line">
                <Row>
                    <Col xs={{ span: 0 }} md={{ span: 2 }}>
                        <a href="/" class="logo">
                            <img src={LogoIcon} alt="logo" />
                            {/* <span>XbmChina</span> */}
                        </a>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
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
                            {hasLogined === true ?
                                <SubMenu class="header-login" title={<span>{avatar === null || avatar === undefined || avatar === 'null' ? <img style={{ height: '42px' }} src={LogoIcon} alt="avatar" /> : <img style={{ height: '42px' }} src={avatar} alt="avatar" />}{username}</span>}>
                                    <Menu.Item key="logout">退出</Menu.Item>
                                </SubMenu>
                                :<Menu.Item key="login" class="header-login">
                                    <Icon type="login" />登录
                                    {/* <Button class="header-login" type="danger" style={{ marginLeft: '18px', padding: '0 10px 0 10px' }} onClick={() => this.setModalVisible(true)}><Icon type="login" /></Button> */}
                                </Menu.Item>
                            }
                        </Menu>
                    </Col>
                    <Col xs={{ span: 0, offset: 10 }} md={{ span: 8, offset: 0 }}>
                        <Row gutter={16}>
                            <Col xs={{ span: 0 }} md={{ span: 11 }}>
                                <Input prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} onChange={this.searchChangeValue} placeholder="搜索内容" />
                            </Col>
                            <Col xs={{ span: 0 }} md={{ span: 4 }}>
                                <Button type="primary" htmlType="submit" onClick={this.searchSumbit}>搜索</Button>
                            </Col>
                            <Col xs={{ span: 8 }} md={{ span: 9 }} >
                                {hasLogined === true ?
                                    <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                                        <SubMenu title={<span>{avatar === null || avatar === undefined || avatar === 'null' ? <img style={{ height: '42px' }} src={LogoIcon} alt="avatar" /> : <img style={{ height: '42px' }} src={avatar} alt="avatar" />}{username}</span>}>
                                            <Menu.Item key="logout">退出</Menu.Item>
                                        </SubMenu>
                                    </Menu>
                                    : <Button type="danger" style={{ marginLeft: '18px', padding: '0 10px 0 10px' }} onClick={() => this.setModalVisible(true)}><Icon type="login" /></Button>
                                }
                            </Col>
                        </Row>

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
                    <Col xs={{ span: 0 }} md={{ span: 2 }}>
                    </Col>
                </Row>
            </header>
        );
    };
}



export default PCBlogHeader = Form.create({})(PCBlogHeader);