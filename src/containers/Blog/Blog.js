import React, { Component } from 'react';
// import Axios from 'axios';
import Axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  };

  componentDidMount() {
    Axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => ({ ...post, author: 'Ryan' }));
        this.setState({ posts: updatedPosts });
      })
      .catch(error => this.setState({ error: true }));
  }

  selectPostHanlder = id => {
    this.setState({ selectedPostId: id });
  };

  render() {
    const { posts, selectedPostId, error } = this.state;
    let formattedPosts = (
      <p style={{ textAlign: 'center', color: 'red' }}>Something went wrong!</p>
    );
    if (!error) {
      formattedPosts = posts.map(post => (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          click={() => this.selectPostHanlder(post.id)}
        />
      ));
    }

    return (
      <div>
        <section className="Posts">{formattedPosts}</section>
        <section>
          <FullPost id={selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
