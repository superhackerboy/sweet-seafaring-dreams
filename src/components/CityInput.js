import React from "react";

const CityInput = props => (
  <form onSubmit={props.submitHandler}>
    <input onChange={props.changeHandler} type="text" placeholder="Paris" />
    <button type="submit">enter</button>
  </form>
);

export default CityInput;
