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
                    <span class="tip-this">偷偷告诉大家，本博客的后台管理也正在制作，为大家准备了游客专用账号！</span>
                    <span>网站新增留言回复啦！使用QQ登陆即可回复，人人都可以回复！</span>
                    <span>如果你觉得网站做得还不错，来Fly社区点个赞吧！<a href="http://fly.layui.com/case/2017/" target="_blank">点我前往</a></span>
                    <span>不落阁 &nbsp;—— &nbsp;一个.NET程序员的个人博客，新版网站采用Layui为前端框架，目前正在建设中！</span>
                </div>
            </div>

        );
    };
}
