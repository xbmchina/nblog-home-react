import React from 'react';
import { Row, Col, Divider, Icon, Button } from 'antd';
import marked from 'marked';
import hljs from 'highlight.js';
import PCArticleBlock from '../common/article_block';
import SiteBanner from '../common/site_banner';
import LoadingCom from '../common/loading_com';
import PreNextArticle from '../common/pre_next_article';
import CommentCom from '../common/comment_com';

export default class PCArticleDetail extends React.Component {

    constructor() {
        super();
        this.state = {
            newsItem: '',
            isLoading: false
        };

    };

    componentWillMount() {
        // marked相关配置
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            },
        });
    };

    componentDidMount() {

        this.setState({
            isLoading: true,
        });
        var myFetchOptions = {
            method: 'GET'
        };

        fetch("/blog/article/detail?id=" + this.props.match.params.id, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({ newsItem: json.data, isLoading: false });
                document.title = this.state.newsItem.title + " - n平方 | n平方 专注Java和大数据平台";

            })
    };

    handleLikeClick(e) {
        console.log("999999999");
    };

    createMarkup() {

        return { __html: this.state.newsItem.content ? marked(this.state.newsItem.content) : null };
    };


    render() {
        const { newsItem }  = this.state; 
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div class="articleContainer shadow">
                            <div class="title">{newsItem.title}</div>
                            <div class="meta">
                                <span class="item">{newsItem.deployTime}</span>
                                <span class="item">分类：{newsItem.categoryId==null?'无':newsItem.categoryId}</span>
                                <span class="item">阅读(0)</span>
                                <span class="item">评论(0)</span>
                                <span class="item">点赞(0)</span>
                            </div>
                            <div dangerouslySetInnerHTML={this.createMarkup()}></div>
                            {this.state.isLoading ? <LoadingCom /> : ''}
                            <Divider dashed="true">END</Divider>
                            <div class="like">
                                <Button type="danger" onClick={this.handleLikeClick.bind(this)}><Icon type="heart" />喜欢</Button >
                            </div>
                            <PreNextArticle preId={newsItem.preId} preTitle={newsItem.preTitle} nextId={newsItem.nextId} nextTitle={newsItem.nextTitle} />
                            <CommentCom />
                        </div>
                        {/* <div class="articleContainer shadow" dangerouslySetInnerHTML={this.createMarkup()}></div> */}
                        {/* <CommonComments uniquekey={this.props.match.params.uniquekey}/> */}
                    </Col>
                    <Col span={6}>
                        {/* <PCNewsImageBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="150px"/> */}
                        <SiteBanner width="100%" bordered="false" title="本站公众号" />
                        <PCArticleBlock pageNum={0} pageSize={8} tagName="Java" width="100%" bordered="false" title="相关专栏" />
                        <PCArticleBlock pageNum={0} pageSize={8} tagName="SpringBoot" width="100%" bordered="false" title="相似文章" />
                    </Col>
                    <Col span={2}></Col>
                </Row>

            </div>
        );
    };

}
