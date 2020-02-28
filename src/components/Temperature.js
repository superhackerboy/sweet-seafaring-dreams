import React from "react";

const Temperature = props => (
  <p className="flex justify-center">
    <span className="temperature">{props.fahrenheit}</span>•F /{" "}
    <span className="temperature">{props.celsius}</span>•C
  </p>
);

export default Temperature;
