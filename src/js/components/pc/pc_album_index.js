import React from 'react';
import { Row, Col, Card, List } from 'antd';
import { Link } from "react-router-dom";
import https from '../../utils/https';
import urls from '../../utils/urls';

export default class PCAlbumIndex extends React.Component {

    constructor() {
        super();
        this.state = {
            news: '',
            specialList: [],
            isLoadEnd: false,
            isLoading: false,
        };
    }

    componentWillMount() {
     this.getSpecialList();
    };

    getSpecialList() {
        this.setState({
            isLoading: true,
        });

        https.get(urls.getSpecialList).then(res => {
            let result = res.data;
            if (result.code === 200) {
                this.setState(preState => ({
                    specialList: [...preState.specialList, ...result.data.data],
                    isLoading: false,
                    pageNum: result.data.pageNum + 1,
                    pageSize: result.data.pageSize,
                    total: result.data.total
                }));
                if (this.state.total === this.state.specialList.length) {
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
        const { specialList } = this.state;
      
        const { Meta } = Card;

        return (
            <div>
                <div class="container">
                    <Row>
                        <Col span={2}></Col>
                        <Col span={20}>
                            <List
                                grid={{ gutter: 16, column: 4 }}
                                dataSource={specialList}
                                renderItem={item => (
                                    <Link to={`/albumList/${item.id}`} >
                                    <List.Item>
                                        <Card
                                            hoverable
                                            style={{ width: 240 }}
                                            cover={<img alt={item.name} src={item.img}  style={{height:'160px'}}/>}
                                        >
                                            <Meta
                                                title={item.name}
                                                description={item.detail}
                                            />
                                        </Card>
                                    </List.Item>
                                    </Link>
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