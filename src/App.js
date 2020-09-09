import React,{Component} from 'react';
import './App.css';
import MyPerson from './Person/Person';

// function App() {
//   return (
//     <div className="App">
//      <h1>Hi, I'm React App.</h1>
//     </div>
//   );
// }

class App extends Component{
  state = {
    persons: [
      {name: 'Viki', age: 25},
      {name: 'Sai', age: 35},
      {name: 'GAnesh', age: 45}
    ]
  }


  render(){
    return (
      <div className="App">
       <h1>Hi, I'm React App.</h1>
       <MyPerson name={this.state.persons[0].name} age={this.state.persons[0].age}/>
       <MyPerson name={this.state.persons[1].name} age={this.state.persons[1].age}/>
       <MyPerson name="Ganesh" age="45">My Hobbies: Racing</MyPerson>
      </div>
    );
  
  }
}

export default App;
