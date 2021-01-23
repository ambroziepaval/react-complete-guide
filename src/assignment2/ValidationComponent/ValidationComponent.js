import React from 'react';

const validationComponent = (props) => {

    const length = props.length;

    if (length <= 5) {
        return <p>Text too short!</p>
    } else {
        return <p>Text long enough!</p>
    }
};

export default validationComponent;