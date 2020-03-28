import React from 'react';

export default function CityInput(props) {
  return (
    <form onSubmit={props.submitHandler}>
      <input
        onChange={props.changeHandler}
        type="text"
        placeholder="location"
        className="input"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
