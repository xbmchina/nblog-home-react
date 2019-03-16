import React from 'react';
import {
    Comment, Avatar, Form, Button, List, Input,Divider
} from 'antd';
import moment from 'moment';

const TextArea = Input.TextArea;


const Editor = ({
    onChange, onSubmit, submitting, value,
}) => (
        <div>
            <Form.Item>
                <TextArea rows={4} onChange={onChange} value={value} placeholder="骂人请不要带脏话"/>
            </Form.Item>
            <Form.Item>
                <Button
                    htmlType="submit"
                    loading={submitting}
                    onClick={onSubmit}
                    type="primary"
                >
                    发表
        </Button>
            </Form.Item>
        </div>
    );

export default class CommentCom extends React.Component {

    constructor() {
        super();
    }
    state = {
        comments: [],
        submitting: false,
        value: '',
        articleId: null
    }


    handleSubmit = () => {
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        this.props.handleCommentSubmit(this.state);

        this.setState({
            submitting: false,
            value: '',
        });
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    }

    render() {
        const { submitting, value } = this.state;
        return (
            <div>
                <Divider orientation="left">评论：</Divider>
                <Comment
                    avatar={(
                        <Avatar icon="user" />
                    )}
                    content={(
                        <Editor
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            submitting={submitting}
                            value={value}
                        />
                    )}
                />
            </div>
        );
    }

}