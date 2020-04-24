import React from "react";
import classes from "./Person.css";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

const Person = (props) => {
  return (
    <div className={classes.Person}>
      <AuthContext.Consumer>
        {(context) =>
          context.authenticated ? <p>Authenticated!</p> : <p>Please log in.</p>
        }
      </AuthContext.Consumer>

      <p onClick={props.onClick}>
        I'm {props.name} person and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.nameChanged} value={props.name} />
    </div>
  );
};

Person.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  onChange: PropTypes.func,
};

export default Person;
