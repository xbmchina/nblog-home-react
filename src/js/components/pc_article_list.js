import React from 'react';
import { Row, Col,Icon } from 'antd';

export default class PCArticleList extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        };
    }
    componentWillMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({ news: json }));
    };
    render() {
        const { news } = this.state;
        const newsList = news.length
            ? news.map((newsItem, index) => (
                <section key={index} class="article-item have-img">
                    <a class="wrap-img" href="/p/86207ea765b2" target="_blank">
                        <img class="img-blur-done" src="//upload-images.jianshu.io/upload_images/13150128-a65b8a3f64ed4a25.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="120" />
                    </a>
                        <div class="content">
                            <a class="title" target="_blank" href="/p/86207ea765b2">武林秘籍</a>
                            <p class="abstract">
                                微信公众号：n平方如有问题或建议，请后台留言，我会尽力解决你的问题。 前言 废话不多说作为自学出身的程序猿怎么可能没有，这不就整理了一份超全的编...</p>
                            <div class="meta">
                                <a target="_blank" href="/p/86207ea765b2">
                                    <i class="iconfont ic-list-read"><Icon type="eye"/></i> 5
                                </a>        
                                <a target="_blank" href="/p/86207ea765b2#comments">
                                    <i class="iconfont ic-list-comments"><Icon type="message"/></i> 0
                                </a>
                                <a target="_blank" href="/p/86207ea765b2#comments">
                                    <i class="iconfont ic-list-comments"><Icon type="heart"/></i> 0
                                </a>
                                <a target="_blank" href="/p/86207ea765b2#comments">
                                    <i class="iconfont ic-list-comments"><Icon type="tag"/></i> Java
                                </a>
                                <span class="time" data-shared-at="2019-03-01T22:46:15+08:00">前天 22:46</span>
                            </div>
                        </div>
                </section>
                    ))
                    : '没有加载到任何新闻';
                return (
            <div>
                        <Row>
                            <Col span={24}>
                                <div class="article-list">
                                {newsList}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    );
                };
            }
