import React, { Component } from 'react';
import CharComponent from './assignment2/CharComponent/CharComponent';
import ValidationComponent from './assignment2/ValidationComponent/ValidationComponent';


class App extends Component {

  state = {
    text: ''
  }

  textChangedHandler = (event) => {
    const string = event.target.value;
    this.setState({ text: string })
  };

  letterClickedHandler = (index) => {
    const letters = this.state.text.split('');
    letters.splice(index, 1);
    this.setState({ text: letters.join('') });
  };

  render() {

    const characters = this.state.text.split('').map((letter, index) => {
      return <CharComponent
        key={index}
        letter={letter}
        clicked={() => this.letterClickedHandler(index)} />
    });



    return (
      <div>
        <h1>Assignment 2</h1>
        <input type='text' onChange={this.textChangedHandler} value={this.state.text} />
        <p>Current length is {this.state.text.length}</p>
        <ValidationComponent length={this.state.text.length} />
        {characters}
      </div>
    );
  }
}

export default App;