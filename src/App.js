//import React,{useState} from 'react';
import React,{Component} from 'react';
import './App.css';
import MyPerson from './Person/Person';

class App extends Component{
  state = {
    persons: [
      {name: 'Viki', age: 25},
      {name: 'Sai', age: 35},
      {name: 'GAnesh', age: 45}
    ]
  }

  switchNameHandler = (newName)=>{
    //console.log('Was clicked.');
    //Do not mutate state directly: this.state.persons[0].name = 'Viki Sangani';
    this.setState({
      persons: [
        {name: 'Viki Sangani', age: 30},
        {name: newName, age: 35},
        {name: 'Ganesh', age: 45}
      ]
    }
    );
  }

nameChangedHandler = (event)=>{
  this.setState({
    persons: [
      {name: 'Viki', age: 30},
      {name: event.target.value, age: 35},
      {name: 'Ganesh', age: 45}
    ]
  }
  );
}  

  render(){

    const inlineStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
       <h1>Hi, I'm React App.</h1>
       
       {/*<button onClick={this.switchNameHandler.bind(this,'Prashant')}>Switch Name</button>*/}
       <button style={inlineStyle} onClick={()=>this.switchNameHandler('Prashant')}>Switch Name</button>

       <MyPerson name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <MyPerson name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler}/>
       <MyPerson name="Ganesh" age="45" click={this.switchNameHandler.bind(this,'Krishna')}>My Hobbies: Racing</MyPerson>

      </div>
    );
  
  }
}

export default App;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const App = props =>  {

//     const [personsState, setPersonsState] = useState({
//             persons: [
//               {name: 'Viki', age: 25},
//               {name: 'Sai', age: 35},
//               {name: 'GAnesh', age: 45}
//             ],
//             otherState: 'Some other value'
//         });

//   const [newState, setNewState] = useState('New State');        

//   console.log(personsState,newState);

//   const switchNameHandler = ()=>{
//     //console.log('Was clicked.');
//     //Do not mutate state directly: this.state.persons[0].name = 'Viki Sangani';
//     setPersonsState({
//       persons: [
//         {name: 'Viki Sangani', age: 30},
//         {name: 'Sai', age: 35},
//         {name: 'GAnesh', age: 45}
//       ]
//       // ],
//       // otherState: personsState.otherState
//     }
//     )
//   }

//     return (
//       <div className="App">
//        <h1>Hi, I'm React App.</h1>
//        <button onClick={switchNameHandler}>Switch Name</button>
//        <MyPerson name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//        <MyPerson name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//        <MyPerson name="Ganesh" age="45">My Hobbies: Racing</MyPerson>
//       </div>
//     );
// }

// export default App;