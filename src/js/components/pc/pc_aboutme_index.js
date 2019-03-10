import React from 'react';
import { Row, Col, Divider, Icon, LDivider } from 'antd';
import LogoIcon from '../../../images/logo.jpg';

export default class PCAlbumIndex extends React.Component {

    constructor() {
        super();
        this.state = {
            news: ''
        };
    }

    componentWillMount() {
        
    };


    render() {
        const { news } = this.state;

        return (
            <div>
                <div class="container">
                    <Row>
                        <Col span={4}></Col>
                        <Col span={16}>
                            <div class="aboutinfo">
                                <div class="aboutinfo-figure">
                                    <img src={LogoIcon} alt="n平方" />
                                </div>
                                <p class="aboutinfo-nickname">n平方</p>
                                <p class="aboutinfo-introduce">一个Java程序员的个人博客，记录博主学习和成长之路，分享Java方面技术和源码</p>
                                <p class="aboutinfo-location"><a target="_blank" href="http://www.xbmchina.cn">www.xbmchina.cn</a></p>
                                <Divider>简介</Divider>
                                <div class="aboutinfo-abstract">
                                    <p >不落阁是一个由ASP.NET MVC开发的个人博客网站，诞生于2016年11月7日，起劲为止经历了一次大改，暂且称为不落阁2.0。</p>
                                    <h1>第一个版本</h1>
                                    <p>诞生的版本，采用ASP.NET MVC + Entity Framework作为后台框架，前端几乎自己手写，用了Bootstrap的栅格系统来布局！起初并没有注意美工，只打算完成基本的功能，故视觉体验是比较差的。</p>
                                    <h1>第二个版本</h1>
                                    <p>由于感觉EF查询数据的时候较慢（后来发现是自己搞错了），于是自己写了个ORM，其实也算不上ORM，就是将ADO.NET进行封装，再封装，再利用反射将数据库表与实体类一一对应，有了基本的增删改查、事务、自动建表等功能，同时为了配合这个ORM，将项目改成三层，前端方面加入了Animate.css的动画效果，同时自己手写了几个动画，并制作了浅色于深色两种主题的样式，视觉体验稍有提高。</p>
                                    <h1>当前版本</h1>
                                    <p>从公司的一个后台管理系统的前端发现了Layer弹窗插件，于是追根溯源，发现了Layui前端框架！Layui简洁的风格让我很是喜欢，于是决定再次将网站改版！此次改版从里到外几乎全部更新。后台增加了面向接口开发，使用了IOC框架，同时ORM回归到Entity Framework，前端则移除Bootstarp，引入Layui。视觉体验显著提高。</p>
                                    <h1 class="end-tab">The End</h1>
                                </div>
                            </div>
                        </Col>
                        <Col span={4}></Col>
                    </Row>
                </div>
            </div>
        );
    };

}