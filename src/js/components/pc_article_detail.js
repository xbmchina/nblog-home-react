import React from 'react';
import { Row, Col,BackTop } from 'antd';
import marked from 'marked';
import hljs from 'highlight.js';
import PCBlogHeader from './pc_blog_header';
import PCBlogFooter from './pc_blog_footer';
import PCArticleBlock from './pc_article_block';

export default class PCArticleDetail extends React.Component {

    constructor() {
        super();
        this.state = {
            newsItem: ''
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
            highlight: function(code) {
                return hljs.highlightAuto(code).value;
            },
        });
    };

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" +
        //     this.props.match.params.id, myFetchOptions)
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({ newsItem: json });
        //         document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
        //     })

        fetch("/blog/article/detail?id="+this.props.match.params.id,myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({ newsItem: json.data });
                document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
            })
    };

    createMarkup() {
        
        return { __html: this.state.newsItem.content ? marked(this.state.newsItem.content) : null };
    };


    render() {

        return (
            <div>
                <PCBlogHeader/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div class="articleContainer shadow">
                            <div class="title">{this.state.newsItem.title}</div>
                            <div dangerouslySetInnerHTML={this.createMarkup()}></div>
                        </div>
                        {/* <div class="articleContainer shadow" dangerouslySetInnerHTML={this.createMarkup()}></div> */}
                        <hr/>
						{/* <CommonComments uniquekey={this.props.match.params.uniquekey}/> */}
                    </Col>
                    <Col span={6}>
                    {/* <PCNewsImageBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="150px"/> */}
                    <PCArticleBlock  count={8} type="top" width="100%" bordered="false" title="相关专栏"/>
                    <PCArticleBlock  count={8} type="yule" width="100%" bordered="false" title="相似文章"/>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCBlogFooter />
                <BackTop />
            </div>
        );
    };

}
