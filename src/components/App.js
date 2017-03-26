import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello World",
      someStyle: {
        // Font size should have px at the end of it.
        // https://www.w3schools.com/css/css_font.asp
        "fontSize": 100,
        // What would happen if you put in another color, say red?
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
    // Fix formatting. This is way too long.
    // The value e.target.value is a number.
    // You need to add px to the end of it.
    // Can you think of another way to no have to save the color?
    this.setState({someStyle: {"fontSize": e.target.value, "color": this.state.someStyle.color}});
  }

  onChangeFontColor(e){
    // Fix formatting. This is way too long.
    // Can you think of another way to not have to save the font size?
    this.setState({someStyle: {"color": e.target.value, "fontSize": this.state.someStyle.fontSize}});
  }

  render() {
    return (
      <div className="App">
        {/* Can you change this to an actual textarea? */}
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
