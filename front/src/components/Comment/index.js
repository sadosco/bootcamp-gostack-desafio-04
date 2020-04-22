import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default class Comment extends Component {
  constructor(props) {
    super(props);

    const { comments } = this.props;

    this.state = {
      comments,
    };
  }

  render() {
    const { comments } = this.state;

    return (
      <ul>
        {comments.map((comment) => (
          <Container key={comment.id}>
            <img src={comment.author.avatar} alt="avatar_perfil" />
            <div>
              <p>
                <strong>{comment.author.name}</strong> {comment.content}
              </p>
            </div>
          </Container>
        ))}
      </ul>
    );
  }
}

Comment.propTypes = {
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
};
