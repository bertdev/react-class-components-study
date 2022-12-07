import { Component } from 'react';
import './App.css';
import PostsGrid from './components/PostsGrid';

import { loadPosts } from './utils/loadPosts.js';
import { loadPhotos } from './utils/loadPhotos.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    const posts = await loadPosts();
    const photos = await loadPhotos();
    const postsWithPhotos = posts.map(post => ({ ...post, imageUrl: photos[post.id].url }));
    this.setState({ posts: postsWithPhotos });
  }

  componentDidUpdate() {
    console.log('component status was updated');
  }

  componentWillUnmount() {
  }

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <PostsGrid posts={posts} />
      </section>
    );
  }
}

export default App;
