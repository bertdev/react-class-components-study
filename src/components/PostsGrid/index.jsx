import { Component } from 'react';
import Post from '../Post';

class PostsGrid extends Component {
  render() {
    return (
      <div className="posts">
        {
          this.props.posts.map(post => (
            <Post 
              key={post.id}
              title={post.id}
              imageUrl={post.imageUrl}
              id={post.id}
              body={post.body}
            />
          ))
        }
      </div>
    );
  }
}

export default PostsGrid;
