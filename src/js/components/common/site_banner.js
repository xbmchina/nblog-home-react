import React from 'react';
import { Divider } from 'antd';
import nlog from '../../../asset/images/n2.jpg';

export default class SiteBanner extends React.Component {

    constructor() {
        super();
    }

    render() {

        return (
            <div class="blog-module shadow">
                <Divider>{this.props.title}</Divider>
                <div class="banner-show">
                    <img src={this.props.bannerUrl == null ? nlog : this.props.bannerUrl} />
                    <p>{this.props.bannerTip}</p>
                </div>
            </div>
        );
    };

}