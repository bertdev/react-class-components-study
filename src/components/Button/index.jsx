import { Component } from 'react';
import './styles.css';

class Button extends Component {
  render() {
    return (
      <button 
        className="button"
        onClick={this.props.handleOnClick}
        disabled={this.props.disabled}
      >
        { this.props.text }
      </button>
    );
  }
}

export default Button;
