import React from 'react';

const Temperature = props => (
  <>
    <p>{props.fahrenheit}</p>
    <p>{props.celsius}</p>
  </>
);

export default Temperature;
