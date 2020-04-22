import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PostBody, PostInfo } from './styles';

import Comment from '../Comment/index';

export default class Post extends Component {
  constructor(props) {
    super(props);

    const { post } = this.props;

    this.state = {
      post,
    };
  }

  render() {
    const { post } = this.state;

    return (
      <PostBody>
        <PostInfo>
          <img src={post.author.avatar} alt="avatar_perfil" />
          <div>
            <strong>{post.author.name}</strong>
            <small>{post.date}</small>
          </div>
        </PostInfo>
        <p>{post.content}</p>
        <Comment comments={post.comments} />
      </PostBody>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
    }).isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        author: PropTypes.shape({
          name: PropTypes.string,
          avatar: PropTypes.string,
        }),
        content: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};
