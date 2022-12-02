import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  loadPosts = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await result.json();
  }

  loadPhotos = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/photos");
    return result.json();
  }

  async componentDidMount() {
    const posts = await this.loadPosts();
    const photos = await this.loadPhotos();
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
        <div className="posts">
          {
            posts.map(post => {
              return (
                <div key={post.id} className="post">
                  <img src={post.imageUrl} alt={post.title}/>
                  <div className="post-content">
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                  </div>
                </div>
              );
            })
          }
        </div>
      </section>
    );
  }
}

export default App;
