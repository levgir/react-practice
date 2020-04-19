import React from "react";
import styled from "styled-components";

const Person = (props) => {
  const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;

    @media (min-width: 500px) {
      width: 450px;
    }
  `;

  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.onClick}>
        I'm {props.name} person and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.nameChanged} value={props.name} />
    </StyledDiv>
  );
};

export default Person;
