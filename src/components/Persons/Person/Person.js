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
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    render(){
        console.log('[Person.js] rendering...');
        return (
            <Aux>
            <AuthContext.Consumer>
                {context => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
            </AuthContext.Consumer>    
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old !</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
            
        )    
    
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person,"Person");
