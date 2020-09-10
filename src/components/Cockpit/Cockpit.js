import React, { useEffect } from 'react';

const inlineStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

const Cockpit = (props) => {

    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');

        setTimeout(()=>{
            alert('Saved data to cloud !');
        },1000);
    },[]);

    return(
        <div>
            <h1>{props.title}</h1>
            <button style={inlineStyle} onClick={props.clicked}>Toggle Persons</button>
        </div>
    )
}

export default Cockpit;
