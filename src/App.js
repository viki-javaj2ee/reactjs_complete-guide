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
  render(){
    return (
      <div className="App">
       <h1>Hi, I'm React App.</h1>
       <MyPerson name="Viki" age="25"/>
       <MyPerson name="Sai" age="35"/>
       <MyPerson name="Ganesh" age="45">My Hobbies: Racing</MyPerson>
      </div>
    );
  
  }
}

export default App;
