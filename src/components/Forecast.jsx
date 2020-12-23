/* eslint-disable import/named */
/* eslint-disable react/prop-types */
import React from 'react';
import ForecastCard from './ForecastCard';
import { RowSegment } from '../styles';

function Forecast({ forecast }) {
  return (
    <RowSegment>
      {forecast.weather.map((weather) => (
        <ForecastCard weather={weather} key={weather.date} />
      ))}
    </RowSegment>
  );
}

export default Forecast;
