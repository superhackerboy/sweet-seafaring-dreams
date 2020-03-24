import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: black;
  color: white;
  padding: 8px 14px;
  border-radius: 4px;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 3px solid black;
  margin-right: 1rem;
  background: transparent;
  width: 12rem;
  font-size: 1.5rem;
`;

export default function CityInput(props) {
  return (
    <form onSubmit={props.submitHandler}>
      <StyledInput
        onChange={props.changeHandler}
        type="text"
        placeholder="location"
      />
      <StyledButton type="submit">Submit</StyledButton>
    </form>
  );
}
