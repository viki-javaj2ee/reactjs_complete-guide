import React,{Component} from 'react';
import './App.css';
import MyPerson from './Person/Person';

class App extends Component{
  state = {
    persons: [
      {id: 'id1', name: 'Viki', age: 25},
      {id: 'id2', name: 'Sai', age: 35},
      {id: 'id3', name: 'Ganesh', age: 45}
    ],
    showPersons: false
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

togglePersonsHandler = ()=>{
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow})
}

deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons;
  const persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons: persons})
}

  render(){

    const inlineStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
        persons = (
          <div>
            {this.state.persons.map((person,index) => {
              return <MyPerson 
              click={()=>this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age} 
              key={person.id}/>
            })}
          </div>
        );
    }

    return (
      <div className="App">
       <h1>Hi, I'm React App.</h1>
       <button style={inlineStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>
       {persons}
      </div>
    );
  
  }
}

export default App;