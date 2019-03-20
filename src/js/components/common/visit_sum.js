import React from 'react';
import { Divider, Statistic } from 'antd';

export default class VisitSum extends React.Component {

    constructor() {
        super();
    }
    
    render() {

        return (
            <div class="blog-module shadow">
                <Divider>{this.props.title}</Divider>
                <div class="banner-show">
                    <Statistic title="访问次数" value={112893} />
                </div>
            </div>
        );
    };

}