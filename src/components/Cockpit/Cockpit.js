import React from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1 className="App-title">{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.onClick}>
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log In</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default Cockpit;
