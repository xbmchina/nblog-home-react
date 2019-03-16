import React from 'react';
import { Row, Col, Divider, Icon, Button, message } from 'antd';
import marked from 'marked';
import hljs from 'highlight.js';
import PCArticleBlock from '../common/article_block';
import SiteBanner from '../common/site_banner';
import LoadingCom from '../common/loading_com';
import PreNextArticle from '../common/pre_next_article';
import CommentCom from '../common/comment_com';
import CommentListCom from '../common/commentList_com';
import https from '../../utils/https';
import urls from '../../utils/urls';
import qs from 'Qs';
import moment from 'moment';

export default class PCArticleDetail extends React.Component {

    constructor() {
        super();
        this.state = {
            articleItem: '',
            isLoading: false,
            userid: sessionStorage.userid,
            token: sessionStorage.token,
            isLiked: false,
            commentValue: '',
            submitting: false,
            comments: [],
        };

        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.getArticleComments = this.getArticleComments.bind(this);
        this.handleLikeClick = this.handleLikeClick.bind(this);
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

        https.get(urls.getArticleDetail, {
            params: {
                id: this.props.match.params.id
            }
        }).then(res => {
            let result = res.data;
            if (result.code === 200) {
                this.setState({ articleItem: result.data, isLoading: false });
                document.title = this.state.articleItem.title + " - n平方 | n平方 专注Java和大数据平台";
            }
        }).catch(err => {
            console.error(err);
        });

        this.getArticleComments();
    };


    getArticleComments() {
          https.get(urls.getComments, {
            params: {
                articleId: this.props.match.params.id
            }
        }).then(res => {
            let result = res.data;
            if (result.code === 200) {
                this.setState({comments:result.data});
            }
        }).catch(err => {
            console.error(err);
        });
    }

    //提交评论
    handleCommentSubmit(commentValue) {
        const { articleItem } = this.state;
        let userid = sessionStorage.userid;
        let token = sessionStorage.token;
        let username = sessionStorage.username;

        if (userid != null && token != null) {
            https.post(
                urls.addComment,
                qs.stringify({
                    userId: userid,
                    username:username,
                    articleId: articleItem.id,
                    content: commentValue.value
                }), {
                    headers: {
                        "Authorization": "Bearer " + token  //token换成从缓存获取
                    }
                },
            ).then(res => {
                const result = res.data;
                if (result.code === 200) {
                    this.getArticleComments();
                    message.success(result.message);
                } else {
                    message.warn(result.message);
                }
            }).catch(err => {
                console.error(err);
                message.warn("请先登录！");
            });
        } else {
            message.warn("请先登录！");
        }
    }

    //点赞
    handleLikeClick(e) {
        e.preventDefault();
        const { userid, token, articleItem } = this.state;
        if (userid != null && token != null) {
            https.post(
                urls.likeArticle,
                qs.stringify({
                    userId: userid,
                    articleId: articleItem.id,
                }), {
                    headers: {
                        "Authorization": "Bearer " + token  //token换成从缓存获取
                    }
                },
            ).then(res => {
                const result = res.data;
                if (result.code === 200) {
                    this.setState({ isLiked: true });
                    message.success(result.message);
                } else {
                    message.warn(result.message);
                }
            }).catch(err => {
                console.error(err);
                message.warn("请先登录！");
            });
        } else {
            message.warn("请先登录！");
        }

    };

    createMarkup() {

        return { __html: this.state.articleItem.content ? marked(this.state.articleItem.content) : null };
    };


    render() {
        const { articleItem, comments,myComments } = this.state;
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div class="articleContainer shadow">
                            <div class="title">{articleItem.title}</div>
                            <div class="meta">
                                <span class="item">{articleItem.deployTime}</span>
                                <span class="item">分类：{articleItem.categoryId == null ? '无' : articleItem.categoryId}</span>
                                <span class="item">阅读(0)</span>
                                <span class="item">评论(0)</span>
                                <span class="item">点赞(0)</span>
                            </div>
                            <div dangerouslySetInnerHTML={this.createMarkup()}></div>
                            {this.state.isLoading ? <LoadingCom /> : ''}
                            <Divider dashed="true">END</Divider>
                            <div class="like">
                                <Button type="danger" disabled={this.state.isLiked} onClick={this.handleLikeClick}><Icon type="heart" />喜欢</Button >
                            </div>
                            <PreNextArticle preId={articleItem.preId} preTitle={articleItem.preTitle} nextId={articleItem.nextId} nextTitle={articleItem.nextTitle} />
                            <CommentCom handleCommentSubmit={this.handleCommentSubmit}  />
                            <CommentListCom comments={comments} getArticleComments={this.getArticleComments}/>
                        </div>
                    </Col>
                    <Col span={6}>
                        {/* <PCNewsImageBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="150px"/> */}
                        <PCArticleBlock pageNum={0} pageSize={8} tagName="Java" width="100%" bordered="false" title="相关专栏" />
                        <PCArticleBlock pageNum={0} pageSize={8} tagName="SpringBoot" width="100%" bordered="false" title="相似文章" />
                        <SiteBanner width="100%" bordered="false" title="本站公众号" bannerTip="专注Java和大数据的平台"/>
                    </Col>
                    <Col span={2}></Col>
                </Row>

            </div>
        );
    };

}
