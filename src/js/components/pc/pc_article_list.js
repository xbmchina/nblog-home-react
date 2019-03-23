import React from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from "react-router-dom";
import LoadingCom from './../common/loading_com';
import LoadEndCom from './../common/load_end_com';
import nlog from '../../../asset/images/n2.jpg';
import https from '../../utils/https';
import urls from '../../utils/urls';


import {
    getScrollTop,
    getDocumentHeight,
    getWindowHeight
} from '../../utils/uitl';

import { connect } from 'react-redux';
import { selectArticleList } from '../../store/actions/article'

@connect(
    state => ({ article: state.article.article }),
    { selectArticleList }
)
export default class PCArticleList extends React.Component {
    constructor() {
        super();
        this.state = {
            articleList: '',
            isLoadEnd: false,
            isLoading: false,
            pageNum: 1,
            pageSize: 10,
            total: 0,
            title: ''

        };
    }
    componentWillMount() {
        this.getArticleList();
    };

    componentWillUpdate(nextProps, nextState) {
        if (nextState.title === nextProps.article.title) {
            return false;
        } else if (nextProps.article.title === "" && nextState.title != '') {
            this.setState({
                articleList: '',
                isLoadEnd: false,
                isLoading: false,
                pageNum: 1,
                pageSize: 10,
                total: 0,
                title: ''
            })
            this.getArticleList();
        } else {
            this.selectArticleList(nextProps.article);
        }
    }
    componentDidMount() {

        //滚动加载更多
        window.onscroll = () => {
            if (getScrollTop() + getWindowHeight() > getDocumentHeight() - 100) {
                // 如果不是已经没有数据了，都可以继续滚动加载
                if (this.state.isLoadEnd === false && this.state.isLoading === false) {
                    this.getArticleList();
                }
            }
        };
    }

    selectArticleList(article) {
        this.setState({
            isLoading: true,
            title: article.title
        });
        let params = {
            pageNum: this.state.pageNum,
            pageSize: this.state.pageSize,
            specialId: this.props.specialId,
        }
        if (article && article.title) {
            params.title = article.title;
        }

        https.get(urls.getArticleList, { params }).then(res => {
            let result = res.data;
            if (result.code === 200) {
                this.setState(preState => ({
                    articleList: result.data.data,
                    isLoading: false,
                    pageNum: result.data.pageNum,
                    pageSize: result.data.pageSize,
                    total: result.data.total
                }));
                if (this.state.total === this.state.articleList.length) {
                    this.setState({
                        isLoadEnd: true,
                    });
                }
            }
        }).catch(err => {
            console.error(err);
        });

    }


    getArticleList() {
        this.setState({
            isLoading: true
        });
        https.get(urls.getArticleList, {
            params: {
                pageNum: this.state.pageNum,
                pageSize: this.state.pageSize,
                specialId: this.props.specialId,
            }
        }).then(res => {
            let result = res.data;
            if (result.code === 200) {
                this.setState(preState => ({
                    articleList: [...preState.articleList, ...result.data.data],
                    isLoading: false,
                    pageNum: result.data.pageNum + 1,
                    pageSize: result.data.pageSize,
                    total: result.data.total
                }));
                if (this.state.total === this.state.articleList.length) {
                    this.setState({
                        isLoadEnd: true,
                    });
                }
            }
        }).catch(err => {
            console.error(err);
        });

    }

    render() {
        const articleList = this.state.articleList;
        const newsList = articleList.length
            ? articleList.map((articleItem, index) => (
                <section key={index} class="article-item have-img shadow">
                    <Link to={`/detail/${articleItem.id}`} target="_blank" class="wrap-img">
                        {/* <a class="wrap-img" href="/p/86207ea765b2" target="_blank"> */}
                        <img class="img-blur-done" src={articleItem.img === null ? nlog : articleItem.img} alt="120" />
                        {/* </a> */}
                    </Link>
                    <div class="content">
                        <Link to={`/detail/${articleItem.id}`} target="_blank" class="title">
                            {articleItem.title}
                        </Link>
                        <p class="abstract">
                            {articleItem.shortcut === null ? articleItem.title : articleItem.shortcut}
                        </p>
                        <div class="meta">
                            <Link to={`/detail/${articleItem.id}`} target="_blank">
                                <i class="iconfont ic-list-read"><Icon type="eye" /></i> {articleItem.readerNum}
                            </Link>
                            <Link to={`/detail/${articleItem.id}`} target="_blank">
                                <i class="iconfont ic-list-comments"><Icon type="message" /></i> {articleItem.commentNum}
                            </Link>
                            <Link to={`/detail/${articleItem.id}`} target="_blank">
                                <i class="iconfont ic-list-comments"><Icon type="heart" /></i> {articleItem.likeNum}
                            </Link>
                            <Link to={`/detail/${articleItem.id}`} target="_blank">
                                <i class="iconfont ic-list-comments"><Icon type="tag" /></i> {articleItem.tagName == null ? '随笔' : articleItem.tagName}
                            </Link>
                            <span class="time" data-shared-at="2019-03-01T22:46:15+08:00">{articleItem.deployTime}</span>
                        </div>
                    </div>

                </section>
            ))
            : '没有加载到任何文章';
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div class="article-list">
                            {newsList}
                            {this.state.isLoading ? <LoadingCom /> : ''}
                            {this.state.isLoadEnd ? <LoadEndCom /> : ''}
                        </div>
                    </Col>
                </Row>
            </div>
        );
    };
}
