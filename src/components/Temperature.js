import React from "react";

const Temperature = props => (
  <p>
    {props.fahrenheit}ºF / {props.celsius}ºC
  </p>
);

export default Temperature;
