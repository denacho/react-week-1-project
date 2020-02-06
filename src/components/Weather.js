import React from "react";

const Weather = props => (
  <div>
    {props.city && props.country && (
      <p>
        Location: {props.temperature}, {props.city}
      </p>
    )}
    {props.temperature && <p>Temperature:{props.country}</p>}
    {props.humidity && <p>Humidity:{props.humidity}</p>}
    {props.description && <p>Condition:{props.description}</p>}
    {props.error && <p> {props.error}</p>}
  </div>
);
export default Weather;
