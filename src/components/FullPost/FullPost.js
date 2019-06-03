import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './FullPost.css';
import Axios from 'axios';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidUpdate() {
    const { id } = this.props;
    const { loadedPost } = this.state;
    if (id) {
      if (!loadedPost || loadedPost.id !== id) {
        Axios.get(`/posts/${id}`).then(response => {
          this.setState({ loadedPost: response.data });
        });
      }
    }
  }

  deletePostHanlder = () => {
    const { id } = this.state;
    Axios.delete(`/posts/${id}`).then(response => console.log(response));
  };

  render() {
    const { id } = this.props;
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (id) {
      post = <p style={{ textAlign: 'center' }}>Loading...</p>;
    }
    const { loadedPost } = this.state;
    if (loadedPost) {
      const { title, body } = loadedPost;
      post = (
        <div className="FullPost">
          <h1>{title}</h1>
          <p>{body}</p>
          <div className="Edit">
            <button
              onClick={this.deletePostHanlder}
              type="button"
              className="Delete"
            >
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

FullPost.propTypes = {
  id: PropTypes.number,
};

export default FullPost;
