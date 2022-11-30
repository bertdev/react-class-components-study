import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.state = {
      name: 'Herbert',
      counter: 0
    };
  }

  handleTextClick() {
    this.setState({name: 'Junior'});
  }

  // if you use arrow, you don't need bind the function
  handleLinkClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    const nextCounter = counter + 1;
    this.setState({ counter: nextCounter });
  }

  render() {
    const { name, counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick ={ this.handleTextClick }>
           { name } - { counter } 
          </p>
          <a
            onClick = { this.handleLinkClick }
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
