import React from 'react';
import qs from 'Qs'

import {
    Icon,
    message,
    Form,
    Input,
    Button,
} from 'antd';

import https from '../../utils/https';
import urls from '../../utils/urls';

const FormItem = Form.Item;


class LoginAndRegCom extends React.Component {

    constructor() {
        super();
        this.state = {
            modalVisible: false,
            hasLogined: false,
            username: null,
            avatar: null,
            userid: null,
            token: null
        };
    }
    //传到父组件中
    handleCloseModal() {
        this.props.closeModal(this.state);
    }

    login(username, password) {
        https.post(
            urls.login,
            qs.stringify({
                username: username,
                password: password,
            }),
        ).then(res => {
            const result = res.data;
            if (result.code === 200) {
                let userDat = result.data;
                //用户信息
                this.setState({ username: userDat.username, userid: userDat.id, avatar: userDat.icon });
                this.setState({ hasLogined: true });

                sessionStorage.userid = userDat.id;
                sessionStorage.username = userDat.username;
                sessionStorage.token = userDat.token;
                sessionStorage.avatar = userDat.icon;

                message.success(result.message);
                this.handleCloseModal();
                this.props.form.resetFields();
            } else {
                message.error(result.message);
            }
        }).catch(err => {
            console.error(err);
        });
    }

    register(data) {

        https.post(
            urls.register,
            qs.stringify({
                username: data.username,
                password: data.password,
                ackPassword: data.ackPassword
            }),
        ).then(res => {
            const result = res.data;
            if (result.code === 200) {
                message.success(result.message);
                this.handleCloseModal();
                this.props.form.resetFields();
            } else {
                message.error(result.message);
            }
        }).catch(err => {
            console.error(err);
        });

    }

    handleSubmit(e) {
        //页面开始向 API 进行提交数据
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { tabSelect } = this.props;
                if (tabSelect === 1) {//登录
                    this.login(values.username, values.password);

                } else {//注册
                    this.register(values);
                }



            }
        });


    };

    render() {
        const { tabSelect } = this.props;
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
            tabSelect === 1 ?
                <Form horizontal="true" onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem  {...formItemLayout} label="账户">
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem  {...formItemLayout} label="密码">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <Button type="primary" htmlType="submit" style={{ width: '80%' }}>登录</Button>
                </Form>
                :
                <Form horizontal="true" onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem  {...formItemLayout} label="账户">
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="输入用户名" />
                        )}
                    </FormItem>
                    <FormItem  {...formItemLayout} label="密码">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="输入密码" />
                        )}
                    </FormItem>
                    <FormItem  {...formItemLayout} label="确认密码">
                        {getFieldDecorator('ackPassword', {
                            rules: [{ required: true, message: 'Please input your ackPassword!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="再次输入密码" />
                        )}
                    </FormItem>
                    <Button type="primary" htmlType="submit" style={{ width: '80%' }}>注册</Button>
                </Form>
        );
    }




}


export default LoginAndRegCom = Form.create({})(LoginAndRegCom);