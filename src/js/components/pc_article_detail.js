import React from 'react';
import { Row, Col,BackTop } from 'antd';
import PCBlogHeader from './pc_blog_header';
import PCBlogFooter from './pc_blog_footer';

export default class PCArticleDetail extends React.Component {

    constructor() {
        super();
        this.state = {
            newsItem: ''
        };

    };

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" +
            this.props.match.params.id, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({ newsItem: json });
                document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
            })
    };

    createMarkup() {
        return { __html: this.state.newsItem.pagecontent };
    };


    render() {

        return (
            <div>
                <PCBlogHeader/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <hr/>
						{/* <CommonComments uniquekey={this.props.match.params.uniquekey}/> */}
                    </Col>
                    <Col span={6}>
                    {/* <PCNewsImageBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="150px"/> */}
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCBlogFooter />
                <BackTop />
            </div>
        );
    };

}
