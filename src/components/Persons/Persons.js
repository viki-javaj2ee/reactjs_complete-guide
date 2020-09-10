import React from 'react';
import MyPerson from './Person/Person';

const persons = (props) => props.persons.map((person,index) => {
    return <MyPerson 
    click={()=>props.clicked(index)} 
    name={person.name} 
    age={person.age} 
    key={person.id}
    changed={(event)=>props.changed(event,person.id)}/>
  });

export default persons;  