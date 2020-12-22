/* eslint-disable react/prop-types */
import React from 'react';

function Forecast({ forecast }) {
  return (
    <div>
      <h3>{forecast.firstDay.avgtemp_f}</h3>
    </div>
  );
}

export default Forecast;
