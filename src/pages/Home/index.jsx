import { Component } from 'react';
import './styles.css';
import PostsGrid from '../../components/PostsGrid';
import Button from '../../components/Button';
import SearchInput from '../../components/SearchInput'

import { loadPosts } from '../../utils/loadPosts.js';
import { loadPhotos } from '../../utils/loadPhotos.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 50,
      inputValue: "",
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

  handleChange = (event) => {
    const { value } = event.target; 
    this.setState({inputValue: value});
  }

  render() {
    const { posts, inputValue, allPosts } = this.state;
    const noMorePosts = posts.length >= this.state.allPosts.length;
    const filteredPosts = !!inputValue 
      ? allPosts.filter((item) => item.body.toLowerCase().includes(inputValue.toLowerCase()))
      : posts;

    return (
      <section className="container">
        <div className="search-container">
          {!!inputValue && (
            <h1>Searching by: {inputValue}</h1>
          )}
         <SearchInput inputValue={inputValue} handleChange={this.handleChange} /> 
        </div>

        {filteredPosts.length > 0 && (
          <PostsGrid posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>Ops! Not found =( </p>
        )}

        <div className="button-container">
          {!inputValue && (
            <Button text="Load more posts" handleOnClick={this.loadMorePosts} disabled={noMorePosts}/>
          )}
        </div>
      </section>
    );
  }
}

export default Home;
