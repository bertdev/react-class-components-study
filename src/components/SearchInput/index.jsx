import './styles.css';
import { Component } from 'react';

class SearchInput extends Component {
  render() {
    return (
      <input 
        type="search" 
        name="" 
        value={this.props.inputValue} 
        onChange={this.props.handleChange} 
        className="search-input"
      />   
    );
  }
}

export default SearchInput;
