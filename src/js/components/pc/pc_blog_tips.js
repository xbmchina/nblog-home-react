import React from 'react';
import { Row, Col, Icon } from 'antd';
export default class PCBlogTips extends React.Component {

    componentDidMount() {
        // this.playAnnouncement(3000);
    }


    playAnnouncement(interval) {
        var index = 0;
        var announcement = this.refs.homeTips;
        //自动轮换
        setInterval(function () {
            index++;    //下标更新
            if (index >= announcement.length) {
                index = 0;
            }
            announcement.eq(index).stop(true, true).fadeIn().siblings('span').fadeOut();  //下标对应的图片显示，同辈元素隐藏
        }, interval);
    };

    render() {
        return (
            <div ref="homeTips" class="home-tips shadow">
                <i><Icon type="sound" theme="twoTone" /></i>
                <div class="home-tips-container">
                    <span class="tip-this">偷偷告诉大家，本博客即将推出并发编程系列文章！</span>
                </div>
            </div>

        );
    };
}
