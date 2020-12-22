/* eslint-disable import/named */
/* eslint-disable react/prop-types */
import React from 'react';
import ForecastCard from './ForecastCard';
import { RowSegment } from '../styles';

function Forecast({ forecast }) {
  return (
    <RowSegment>
      {forecast.weather.map((weather) => (
        <ForecastCard weather={weather} />
      ))}
    </RowSegment>
  );
}

export default Forecast;
