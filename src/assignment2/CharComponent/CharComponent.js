import React from 'react';

const charComponent = (props) => {
    const letter = props.letter;
    const letterStyle = {
        display: 'inline-block',
        padding: '16px',
        textAllign: 'center',
        margin: '16px',
        border: '1px solid black'
    }

    return <div style={letterStyle} onClick={props.clicked}>{letter}</div>
};

export default charComponent;