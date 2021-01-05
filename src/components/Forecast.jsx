/* eslint-disable import/named */
/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'styled-components-carousel';
import ForecastCard from './ForecastCard';
import { RowSegment } from '../styles';

function Forecast({ forecast }) {
  return (
    <RowSegment>
      <Carousel
        center
        showArrows
        // showIndicator
        swipeable
        slidesToShow={3}
      >

        {forecast.weather.map((weather) => (
          <ForecastCard weather={weather} key={weather.date} />
        ))}
      </Carousel>
    </RowSegment>
  );
}

export default Forecast;
