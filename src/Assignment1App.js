import React, { Component } from 'react';
import UserInput from './assignment1/UserInput/UserInput';
import UserOutput from './assignment1/UserOutput/UserOutput';

class App extends Component {

    state = {
        username: 'rednectar'
    }

    usernameChangedHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Assignment 1</h1>
                <UserInput
                    change={this.usernameChangedHandler}
                    username={this.state.username} />
                <UserOutput username={this.state.username} />
                <UserOutput username={this.state.username} />
            </div>
        );
    }
}

export default App;