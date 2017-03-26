import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello World",
      someStyle: {
        "fontSize": 100,
        "color": "black"
      }
    };
  }

  onChangeText(e) {
    this.setState({
      text: e.target.value
    });
  }

  onChangeFontSize(e){
    this.setState({someStyle: {"fontSize": e.target.value, "color": this.state.someStyle.color}});
  }

  onChangeFontColor(e){
    this.setState({someStyle: {"color": e.target.value, "fontSize": this.state.someStyle.fontSize}});
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
        <input
          type="number"
          id="fontSizeInput"
          value={this.state.someStyle.fontSize}
          onChange={this.onChangeFontSize.bind(this)}/>
        <br/>
        <input
          type="color"
          id="fontColorInput"
          value={this.state.someStyle.color}
          onChange={this.onChangeFontColor.bind(this)}/>
        <br/>
        <span id="displayArea" style={this.state.someStyle}>{this.state.text}</span>
      </div>
    );
  }
}

export default App;
