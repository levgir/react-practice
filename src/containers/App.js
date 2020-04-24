import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import AuthContext from "../context/auth-context";

class App extends Component {
  state = {
    persons: [
      { id: "odsfoweo", name: "Levi", age: 36 },
      { id: "oewjoj buyf", name: "Danielle", age: 31 },
      { id: "momxibkqwd", name: "Guster", age: 4 },
    ],
    otherState: "some other value",
    showPersons: false,
    authenticated: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          onClick={this.deletePersonHandler}
          nameChanged={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <div className={classes.App}>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          <Cockpit
            title={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            onClick={this.togglePersonsHandler}
          />
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
