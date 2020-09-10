// import React from 'react';
// import MyPerson from './Person/Person';

// const persons = (props) => {
//     console.log('[Persons.js] rendering...');
//     return props.persons.map((person,index) => {
//             return <MyPerson 
//             click={()=>props.clicked(index)} 
//             name={person.name} 
//             age={person.age} 
//             key={person.id}
//             changed={(event)=>props.changed(event,person.id)}/>
//     })
// };

// export default persons;  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////                  Converting it to class based component

import React, {Component} from 'react';
import MyPerson from './Person/Person';
import { statement } from '@babel/template';

class Persons extends Component{

    static getDerivedStateFromProps(props,state){
        console.log('[Persons.js] getDerivedStateFromProps');
        return statement;
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'}
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot)
    }

    render(){
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person,index) => {
                return <MyPerson 
                click={()=>this.props.clicked(index)} 
                name={person.name} 
                age={person.age} 
                key={person.id}
                changed={(event)=>this.props.changed(event,person.id)}/>
        })
    
    }
}

export default Persons;  
