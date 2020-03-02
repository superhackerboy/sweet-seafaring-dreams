import React from "react";

const Temperature = props => (
  <div className="flex justify-center">
    <span className="temperature">{props.fahrenheit}</span>
    <span className="courier">•F/</span>
    <span className="temperature">{props.celsius}</span>
    <span className="courier">•C</span>{" "}
  </div>
);

export default Temperature;
