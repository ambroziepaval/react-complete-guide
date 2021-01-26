import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  // whenever the state changes, the component will re-render and reflect the new state
  state = {
    persons: [
      { id: '1asa', name: 'Zica', age: 26 },
      { id: '2dsa', name: 'Manu', age: 17 },
      { id: '3das', name: 'Ligia', age: 27 }
    ],
    otherState: 'some other value',
    showPersons: false
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    let persons = null;
    let btnClasses = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      btnClasses = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // assignedClasses = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold) // assignedClasses = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClasses} onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
