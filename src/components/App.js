import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello World"
    };
  }

  onChangeText(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <input
          type="textarea"
          id="textInput"
          value={this.state.text}
          onChange={this.onChangeText.bind(this)}/>
        <br/>
        <span id="displayArea">{this.state.text}</span>
      </div>
    );
  }
}

export default App;
