import React from "react";

const CityInput = props => (
  <form onSubmit={props.submitHandler} className="mb-12 flex">
    <input onChange={props.changeHandler} type="text" placeholder="your city" />
    <button type="submit" className="ml-5">
      enter
    </button>
  </form>
);

export default CityInput;
