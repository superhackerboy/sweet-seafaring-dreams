import React from "react";

const CityInput = props => (
  <form onSubmit={props.submitHandler} className="mb-12">
    <input onChange={props.changeHandler} type="text" placeholder="your city" />
    <button type="submit">enter</button>
  </form>
);

export default CityInput;
