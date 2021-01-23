import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>{props.username} joined the room.</p>
            <p>Everyone say hello to {props.username}.</p>
        </div>
    )
}

export default userOutput;