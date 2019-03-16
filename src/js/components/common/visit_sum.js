import React from 'react';
import { Divider, Statistic } from 'antd';
import moment from 'moment';

const Countdown = Statistic.Countdown;
const deadline = moment().format('YYYY-MM-DD HH:mm:ss');
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
                    {/* <Statistic title="当前时间" value={deadline} /> */}
                </div>
            </div>
        );
    };

}