import { Component } from 'react';
import './styles.css';
import PostsGrid from '../../components/PostsGrid';
import Button from '../../components/Button';

import { loadPosts } from '../../utils/loadPosts.js';
import { loadPhotos } from '../../utils/loadPhotos.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 50
    };
  }

  async componentDidMount() {
    const posts = await loadPosts();
    const photos = await loadPhotos();
    const postsWithPhotos = posts.map(post => ({ ...post, imageUrl: photos[post.id].url }));
    this.setState(
      { 
        posts: postsWithPhotos.slice(this.state.page, this.state.postsPerPage), 
        allPosts: postsWithPhotos 
      }
    );
  }

  componentDidUpdate() {
    console.log('component status was updated');
  }

  componentWillUnmount() {
  }

  loadMorePosts = () => {
    const nextPage = this.state.page + this.state.postsPerPage;
    const nextPosts = this.state.allPosts.slice(nextPage, nextPage + this.state.postsPerPage);
    this.state.posts.push(...nextPosts);
    this.setState({posts: this.state.posts, page: nextPage })
  }

  render() {
    const { posts } = this.state;
    const noMorePosts = posts.length >= this.state.allPosts.length;
    return (
      <section className="container">
        <PostsGrid posts={posts} />
        <div className="button-container">
          <Button text="Load more posts" handleOnClick={this.loadMorePosts} disabled={noMorePosts}/>
        </div>
      </section>
    );
  }
}

export default Home;
