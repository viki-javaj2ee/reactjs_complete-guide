import React, { useEffect, useContext } from 'react';
import AuthContext from '../../context/auth-context';

const inlineStyle = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

const Cockpit = (props) => {

    const authContext = useContext(AuthContext);

    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');

        setTimeout(()=>{
            alert('Saved data to cloud !');
        },1000);

        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    },[]);

    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect');

        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    });

    return(
        <div>
            <h1>{props.title}</h1>
            <button style={inlineStyle} onClick={props.clicked}>Toggle Persons</button>
            {<button style={inlineStyle} onClick={authContext.login}>Log in</button>}
        </div>
    )
}

export default Cockpit;
