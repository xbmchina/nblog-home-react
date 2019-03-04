import React from 'react';
import { Row, Col, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
        // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({ news: json }));
        fetch("/blog/article/list",myFetchOptions).then(response => response.json()).then(json => this.setState({ news: json.data.data }));
    };
    render() {
        const { news } = this.state;
        const newsList = news.length
            ? news.map((newsItem, index) => (
                <section key={index} class="article-item have-img shadow">
                    <Link to={`/detail/${newsItem.id}`} target="_blank" class="wrap-img">
                        {/* <a class="wrap-img" href="/p/86207ea765b2" target="_blank"> */}
                        <img class="img-blur-done" src="//upload-images.jianshu.io/upload_images/13150128-a65b8a3f64ed4a25.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="120" />
                        {/* </a> */}
                    </Link>
                    <div class="content">
                        <Link to={`/detail/${newsItem.id}`} target="_blank" class="title">
                            {newsItem.title}
                        </Link>
                        <p class="abstract">
                         {newsItem.shortcut}
                        </p>
                        <div class="meta">
                            <Link to={`/detail/${newsItem.id}`} target="_blank">
                                <i class="iconfont ic-list-read"><Icon type="eye" /></i> 5
                            </Link>
                            <Link to={`/detail/${newsItem.id}`} target="_blank">
                                <i class="iconfont ic-list-comments"><Icon type="message" /></i> 0
                            </Link>
                            <Link to={`/detail/${newsItem.id}`} target="_blank">
                                <i class="iconfont ic-list-comments"><Icon type="heart" /></i> 0
                            </Link>
                            <Link to={`/detail/${newsItem.id}`} target="_blank">
                                <i class="iconfont ic-list-comments"><Icon type="tag" /></i> Java
                            </Link>
                            <span class="time" data-shared-at="2019-03-01T22:46:15+08:00">{newsItem.createTime}</span>
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
