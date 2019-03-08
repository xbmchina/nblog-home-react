import React from 'react';

import { Link } from "react-router-dom";

export default class PreNextArticle extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div class="article-nav">
                <span class="article-nav-prev">
                    {this.props.preId === null ? '' :
                        <Link to={`/detail/${this.props.preId}`} target="_blank">
                            上一篇<br />{this.props.preTitle}
                        </Link>
                    }
                </span>

                <span class="article-nav-next">
                    {this.props.nextId === null ? '' :
                        <Link to={`/detail/${this.props.nextId}`} target="_blank" >
                            下一篇<br />{this.props.nextTitle}
                        </Link>
                    }
                </span>

            </div>
        );
    };

}