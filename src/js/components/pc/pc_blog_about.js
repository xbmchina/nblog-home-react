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
                    <a target="_blank" title="GitHub" href="https://github.com/xbmchina"><i class="fa fa-qq fa-2x"><Icon type="github" /></i></a>
                    <a target="_blank" title="微信" href="https://mp.weixin.qq.com/s/_-0GWxBKcBOqSyd23UgMhw"><i class="fa fa-envelope fa-2x"><Icon type="wechat" /></i></a>
                    <a target="_blank" title="知乎" href="https://www.zhihu.com/people/zero-96-65-84/activities"><i class="fa fa-git fa-2x"><Icon type="zhihu" /></i></a>
                </div>
            </div>
        );
    };
}
