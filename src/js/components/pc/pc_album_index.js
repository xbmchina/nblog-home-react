import React from 'react';
import { Row, Col, Card, Divider, Icon, List } from 'antd';

export default class PCAlbumIndex extends React.Component {

    constructor() {
        super();
        this.state = {
            news: ''
        };
    }

    componentWillMount() {
        // var myFetchOptions = {
        //     method: 'GET'
        // };
        // fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({ news: json }));
    };


    render() {
        const { news } = this.state;
        const data = [
            {
                title: 'Title 1',
            },
            {
                title: 'Title 2',
            },
            {
                title: 'Title 3',
            },
            {
                title: 'Title 4',
            },
            {
                title: 'Title 1',
            },
            {
                title: 'Title 2',
            },
            {
                title: 'Title 3',
            },
            {
                title: 'Title 4',
            },
        ];
        const { Meta } = Card;

        return (
            <div>
                <div class="container">
                    <Row>
                        <Col span={2}></Col>
                        <Col span={20}>
                            <List
                                grid={{ gutter: 16, column: 4 }}
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <Card
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                        >
                                            <Meta
                                                title="Europe Street beat"
                                                description="www.instagram.com"
                                            />
                                        </Card>
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Col span={2}></Col>
                    </Row>
                </div>
              
            </div>
        );
    };

}