import React from 'react';

const inlineStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

const cockpit = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <button style={inlineStyle} onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default cockpit;
