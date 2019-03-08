import React from 'react';
import AvatarIcon from '../../../images/avatar.jpg';
import { Icon } from 'antd';


export default class PCBlogAbout extends React.Component {

    render() {
        return (
            <div class="blogerinfo shadow">
                <div class="blogerinfo-figure">
                    <img src={AvatarIcon} alt="zero" />
                </div>
                <p class="blogerinfo-nickname">zero</p>
                <p class="blogerinfo-introduce">微信公众号：【 n平方 】 </p>
                <p class="blogerinfo-introduce">实践是检验技术的唯一标准！！！ </p>
                <div class="blogerinfo-contact">
                    <a target="_blank" title="QQ交流" href="#"><i class="fa fa-qq fa-2x"><Icon type="github" /></i></a>
                    <a target="_blank" title="给我写信" href="#"><i class="fa fa-envelope fa-2x"><Icon type="wechat" /></i></a>
                    <a target="_blank" title="新浪微博" href="#"><i class="fa fa-weibo fa-2x"><Icon type="weibo-circle" /></i></a>
                    <a target="_blank" title="知乎" href="#"><i class="fa fa-git fa-2x"><Icon type="zhihu" /></i></a>
                </div>
            </div>
        );
    };
}
