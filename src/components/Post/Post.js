import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const post = ({ title, author, click }) => (
  <button className="Post" onClick={click} type="button">
    <h1>{title}</h1>
    <div className="Info">
      <div className="Author">{author}</div>
    </div>
  </button>
);

post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  click: PropTypes.func,
};

export default post;
