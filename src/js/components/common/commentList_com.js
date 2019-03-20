import React from 'react';
import {
    Comment, Avatar, List, Modal, Form, Input, message
} from 'antd';
import https from '../../utils/https';
import urls from '../../utils/urls';
import qs from 'Qs';

const TextArea = Input.TextArea;

const Editor = ({
    onChange, onSubmit, submitting, value,
}) => (
        <div>
            <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} placeholder="请不要说脏话!!" />
            </Form.Item>
        </div>
    );


export default class CommentListCom extends React.Component {

    constructor() {
        super();


    }
    state = {
        visible: false,
        confirmLoading: false,
        submitting: false,
        value: '',
        item: null,//楼主的评论
        child: null,//回复某人的评论
    }

    showModal = (item, child, e) => {
        this.setState({
            visible: true,
            item: item,
            child: child
        });
    }

    handleOk = () => {

        this.setState({
            confirmLoading: true,
        });
        const { item, child, value } = this.state;
        let userid = sessionStorage.userid;
        let token = sessionStorage.token;
        let username = sessionStorage.username;

        if (userid != null && token != null) {
            let commentForm = null;
            if (child != null && child != undefined && child != '') {
                commentForm = {
                    fid: userid,
                    fusername: username,
                    favatar: '',
                    tid: child.fid,
                    tusername: child.fusername,
                    tavatar: child.favatar,
                    content: value
                }
            } else {
                commentForm = {
                    fid: userid,
                    fusername: username,
                    favatar: '',
                    tid: item.userId,
                    tusername: item.username,
                    tavatar: item.avatar,
                    content: value
                }
            }

            https.post(
                urls.addComment,
                qs.stringify({
                    id: item.id,
                    children: JSON.stringify(commentForm)
                }), {
                    headers: {
                        "Authorization": "Bearer " + token  //token换成从缓存获取
                    }
                },
            ).then(res => {
                const result = res.data;
                if (result.code === 200) {
                    this.props.getArticleComments();//刷新评论列表
                    message.success(result.message);
                    this.setState({
                        visible: false,
                        confirmLoading: false,
                        value:''
                    });
                } else {
                    message.warn(result.message);
                }
            }).catch(err => {
                console.error(err);
                message.warn("请先登录！");
            });
        } else {
            message.warn("请先登录！");
        }

     
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        const comments = this.props.comments;
        const articleId = comments.articleId;
        const total = comments.total;
        const commentList = comments.comments;
        const { visible, confirmLoading, ModalText, submitting, value } = this.state

        return (
            <div>
                <List
                    className="comment-list"
                    header={`总共${total} 条评论`}
                    itemLayout="horizontal"
                    dataSource={commentList}
                    renderItem={item => (
                        <Comment
                            actions={[<a onClick={this.showModal.bind(this, item, null)}>回复</a>]}
                            author={item.username}
                            avatar={<Avatar icon="user" />}
                            content={item.content}
                            datetime={item.createTime}
                        >
                            {item.childComments != null && item.childComments.length > 0 ?
                                <List
                                    className="comment-list"
                                    itemLayout="horizontal"
                                    dataSource={item.childComments}
                                    renderItem={child => (
                                        <Comment
                                            actions={[<a onClick={this.showModal.bind(this, item, child)}>回复</a>]}
                                            author={<span>{child.fusername} @ {child.tusername}</span>}
                                            avatar={<Avatar icon="user" />}
                                            content={child.content}
                                            datetime={child.createTime}
                                        >
                                        </Comment>
                                    )}
                                /> : ''}


                        </Comment>
                    )}
                />

                <Modal
                    title="回复"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <Editor
                        onChange={this.handleChange}
                        onSubmit={this.handleOk}
                        submitting={submitting}
                        value={value}
                    />
                </Modal>
            </div>

        );


    }
}