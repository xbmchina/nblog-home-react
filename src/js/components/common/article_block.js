import React from 'react';
import { Card, Divider, Icon } from 'antd';

import { Link } from "react-router-dom";
import https from '../../utils/https';
import urls from '../../utils/urls';

export default class PCArticleBlock extends React.Component {

    constructor() {
        super();
        this.state = {
            news: ''
        };
    }

    componentWillMount() {

        https.get(urls.getArticleList, {
            params: {
                pageNum: this.props.pageNum,
                pageSize: this.props.pageSize,
                tagName: this.props.tagName
            }
        }).then(res => {
            let result = res.data;
            if (result.code === 200) {
                this.setState({ news: result.data.data });
            }
        }).catch(err => {
            console.error(err);
        });

    };


    render() {
        const { news } = this.state;
        const newsList = news.length
            ? news.map((newsItem, index) => (

                <li key={index}>
                    <div class="blog-module-item">
                        <Link to={`/detail/${newsItem.id}`} target="_blank">
                            {newsItem.title}
                        </Link>
                    </div>
                </li>
            ))
            : '没有加载到任何文章';
        return (
            <div class="blog-module shadow">
                <Divider>{this.props.title}</Divider>
                <ul class="fa-ul blog-module-ul">
                    {newsList}
                </ul>
            </div>
        );
    };

}