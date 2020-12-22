/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from '../styles';

function ForecastCard({ weather }) {
  return (
    <Card>
      <p>Date: {weather.date}</p>
      <p>Min Temp (°F): {weather.mintemp_f}</p>
      <p>Max Temp (°F): {weather.maxtemp_f}</p>
      <p>Avg Temp (°F): {weather.avgtemp_f}</p>
      <p>Condition: {weather.condition.text}</p>
      <img src={`https://${weather.condition.icon}`} width="64" height="64" alt={weather.condition.text} />
    </Card>
  );
}

export default ForecastCard;
