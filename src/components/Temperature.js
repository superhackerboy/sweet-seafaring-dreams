import React from "react";

const Temperature = props => (
  <p>
    <span className="temperature">{props.fahrenheit}</span>ºF /{" "}
    <span className="temperature">{props.celsius}</span>ºC
  </p>
);

export default Temperature;
