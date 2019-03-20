import React from 'react';
import { Row, Col, Divider } from 'antd';
import LogoIcon from '../../../asset/images/logo.jpg';
import n2 from '../../../asset/images/n.png'

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
                                <p class="aboutinfo-introduce">记录博主学习和成长之路，分享学习Java和大数据相关技术</p>
                                <p class="aboutinfo-location"><a target="_blank" href="http://www.xbmchina.cn">www.xbmchina.cn</a></p>
                                <Divider>简介</Divider>
                                <div class="">
                                    <p >这是个人博客网站，诞生于2019年3月17日</p>
                                    <h1>当前版本</h1>
                                    <p>本站前台使用react搭建，后台使用Springboot+mysql进行搭建</p>
                                    <p>总体模块包括：文章，分类，专栏，留言，评论等。</p>
                                    <h1>技术栈</h1>
                                    <p>前端：javaScript、vue.js、略懂react.js</p>
                                    <p>后端：Springboot,SpringCloud,数据库等</p>
                                    <p>最后对<span style={{ fontWeight:'bold'}}>Java和大数据</span>有兴趣的朋友可以扫下方二维码关注我的公众号</p>
                                    <p style={{marginTop:'20px'}}>
                                        <img src={n2} />
                                    </p>
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