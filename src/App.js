import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = prosp => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Zica', age: 26 },
      { name: 'Manu', age: 17 },
      { name: 'Ligia', age: 27 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value')

  console.log(personsState);
  console.log(otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Ambrozie', age: 26 },
        { name: 'Manu', age: 17 },
        { name: 'Ligia', age: 10 }
      ],
      otherState: personsState.otherState
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
};

export default app;