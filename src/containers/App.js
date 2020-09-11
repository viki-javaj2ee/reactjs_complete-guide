import React,{Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass';
import Auxilliary from '../hoc/Auxilliary';
import AuthContext from '../context/auth-context';

class App extends Component{
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }


  state = {
    persons: [
      {id: 'id1', name: 'Viki', age: 25},
      {id: 'id2', name: 'Sai', age: 35},
      {id: 'id3', name: 'Ganesh', age: 45}
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
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

  this.setState((prevState,props)=>{
    return { 
      persons: persons, 
      changeCounter: prevState.changeCounter+1 }
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

static getDerivedStateFromProps(props, state){
  console.log('[App.js] getDerivedStateFromProps',props);
  return state;
}

componentDidMount(){
  console.log('[App.js] componentDidMount');
}

shouldComponentUpdate(nextProps,nextState){
  console.log('[App.js] shouldComponentUpdate');
  return true;
}

componentDidUpdate(){
  console.log('[App.js] componentDidUpdate');
}

loginHandler = ()=>{
  this.setState({authenticated: true});
};


  render(){
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons){
        persons = (
            <Persons 
              persons={this.state.persons} 
              clicked={this.deletePersonHandler} 
              changed={this.nameChangedHandler}
              isAuthenticated={this.state.authenticated}/>
        );
    }

    return (
      <Auxilliary>
        <button onClick={()=>{
                                this.setState({
                                  showCockpit: false
                                })
                              }
                        }>
            Remove Cockpit
        </button>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}} >
          {this.state.showCockpit ? 
          <Cockpit 
            title={this.props.appTitle}
            clicked={this.togglePersonsHandler}/>
            :null}
          {persons}
          </AuthContext.Provider>
      </Auxilliary>
    );
  
  }
}

export default withClass(App,"App");