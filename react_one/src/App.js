import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    people: [
      {name: "Jose", age: 36},
      {name: "Brenda", age: 38},
      {name: "Jenny", age: 36}
    ],
    otherState: 'example value'
  }

  switchNameHandler = (newName) => {
    // console.log("was clicked!");
    // DONT DO THIS to Mutate state: this.state.people[0].name = "Natalie"
    this.setState({people: [
      {name: newName, age: 37},
      {name: "Brenda", age: 31},
      {name: "Jenny", age: 22}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({people: [
      {name: "Jose", age: 37},
      {name: event.target.value, age: 4},
      {name: "Jenny", age: 36}
    ]})
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, Im here</h1>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, "fankie")}>Switch names</button>
        <Person
          name={this.state.people[0].name}
          age={this.state.people[0].age}/>
        <Person
          name={this.state.people[1].name}
          age={this.state.people[1].age}
          click={this.switchNameHandler}
          changed={this.nameChangedHandler}>Hobbies: Piano music</Person>
        <Person
          name={this.state.people[2].name}
          age={this.state.people[1].age}/>
      </div>
    );
  }
}

export default App;
