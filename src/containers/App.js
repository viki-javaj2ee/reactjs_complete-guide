import React,{Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component{
  state = {
    persons: [
      {id: 'id1', name: 'Viki', age: 25},
      {id: 'id2', name: 'Sai', age: 35},
      {id: 'id3', name: 'Ganesh', age: 45}
    ],
    showPersons: false
  }

nameChangedHandler = (event,id)=>{

  const personIndex = this.state.persons.findIndex( p=> {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  }
  person.name = event.target.value;
  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({ persons: persons }
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

    let persons = null;

    if (this.state.showPersons){
        persons = (
            <Persons 
              persons={this.state.persons} 
              clicked={this.deletePersonHandler} 
              changed={this.nameChangedHandler}/>
        );
    }

    return (
      <div className="App">
        <Cockpit 
          title={this.props.appTitle}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  
  }
}

export default App;