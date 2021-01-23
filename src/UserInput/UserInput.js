import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid red',
        width: '20%',
        padding: '10px'
    }

    return <input
        type='text'
        style={inputStyle}
        onChange={props.change}
        value={props.username} />;
}

export default userInput;