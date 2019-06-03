import React, { Component } from 'react';

import './NewPost.css';
import Axios from 'axios';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Max',
  };

  postDataHandler = () => {
    const { ...data } = this.state;
    Axios.post('/posts', data).then(response => console.log(response));
  };

  render() {
    const { title, content, author } = this.state;
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label htmlFor="nPTitle">
          Title
          <input
            id="nPTitle"
            type="text"
            value={title}
            onChange={event => this.setState({ title: event.target.value })}
          />
        </label>
        <label htmlFor="nPContent">
          Content
          <textarea
            id="nPContent"
            rows="4"
            value={content}
            onChange={event => this.setState({ content: event.target.value })}
          />
        </label>
        <label htmlFor="nPAuthor">
          Author
          <select
            id="nPAuthor"
            value={author}
            onChange={event => this.setState({ author: event.target.value })}
          >
            <option value="Max">Max</option>
            <option value="Manu">Manu</option>
          </select>
        </label>
        <button onClick={this.postDataHandler} type="button">
          Add Post
        </button>
      </div>
    );
  }
}

export default NewPost;
