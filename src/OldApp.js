import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // whenever the state changes, the component will re-render and reflect the new state
  state = {
    persons: [
      { name: 'Zica', age: 26 },
      { name: 'Manu', age: 17 },
      { name: 'Ligia', age: 27 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // DON"T DO THIS: this.state.persons[0].name = 'Ambrozie';
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Manu', age: 17 },
        { name: 'Ligia', age: 10 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Zica', age: 26 },
        { name: event.target.value, age: 17 },
        { name: 'Ligia', age: 10 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Ambrozie')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Beniamin')}
          changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
