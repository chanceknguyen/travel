/* eslint-disable react/prop-types */
import React from 'react';
import ForecastCard from './ForecastCard';

function Forecast({ forecast }) {
  return (
    <div>
      {forecast.weather.map((weather) => (
        <ForecastCard weather={weather} />
      ))}
    </div>
  );
}

export default Forecast;
