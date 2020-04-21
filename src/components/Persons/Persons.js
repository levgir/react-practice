import React from "react";
import Person from "./Person/Person";

const Persons = (props) => {
  console.log("[Persons.js] rendering...");
  return props.persons.map((person, index) => {
    return (
      <Person
        onClick={() => props.onClick(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        nameChanged={(event) => props.nameChanged(event, person.id)}
      />
    );
  });
};

export default Persons;
