import React from "react";

const Temperature = props => (
  <p>
    <span className="handlee">{props.fahrenheit}</span>ºF /{" "}
    <span className="handlee">{props.celsius}</span>ºC
  </p>
);

export default Temperature;
