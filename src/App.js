import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.timeoutUpdate = null;
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.timeoutUpdate = setTimeout(() => {
      this.setState({
        posts: [
          {
            id: 1,
            title: 'Post 1',
            content: 'Content 1'
          },
          {
            id: 2,
            title: 'Post 2',
            content: 'Content 1'
          }
        ]
      });
    }, 3000);
  }

  componentDidUpdate() {
    console.log('component status was updated');
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        {
          posts.map(post => {
            return (
              <div key={post.id}> 
                <h1>{post.title}</h1>
                <p>{post.content}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
