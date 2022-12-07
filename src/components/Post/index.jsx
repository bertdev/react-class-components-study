import { Component } from 'react';
import './styles.css';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <img src={this.props.imageUrl} alt={this.props.title}/>
        <div className="post-content">
          <h1>{this.props.title}</h1>
          <p>{this.props.body}</p>
        </div>
      </div>
    );
  }
}

export default Post;
