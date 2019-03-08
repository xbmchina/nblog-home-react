import React from 'react';
import { Card,Divider,Icon } from 'antd';

import { Link } from "react-router-dom";

export default class PCArticleBlock extends React.Component {

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

        fetch("/blog/article/list?pageNum=" + this.props.pageNum + "&pageSize=" + this.props.pageSize+"&tagName="+this.props.tagName, myFetchOptions)
        .then(response => response.json())
        .then(json => this.setState({ news: json.data.data }));

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
                <Divider>{ this.props.title}</Divider>
                    <ul class="fa-ul blog-module-ul">
                        {newsList}
                    </ul>
            </div>
        );
    };

}