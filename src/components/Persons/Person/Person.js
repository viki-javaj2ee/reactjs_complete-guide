// import React from 'react';
// import './Person.css';

// const person = (props) => {
//     console.log('[Person.js] rendering...');
//     return (
//         <div className="Person">
//             <p onClick={props.click}>I'm {props.name} and I am {props.age} years old !</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name}/>
//         </div>
//     )    
// }

// export default person;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////                  Converting it to class based component

import React, {Component} from 'react';
import './Person.css';
import Aux from '../../../hoc/Auxilliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
    render(){
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old !</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        )    
    
    }
}

export default withClass(Person,"Person");
