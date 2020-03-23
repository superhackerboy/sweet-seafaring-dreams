import React from 'react';

export default function TestForm(props) {
  return (
    <form onSubmit={props.submitHandler}>
      <input onChange={props.changeHandler} type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}
