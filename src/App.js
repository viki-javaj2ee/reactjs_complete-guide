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
       <MyPerson />
       <MyPerson />
       <MyPerson />
      </div>
    );
  
  }
}

export default App;
