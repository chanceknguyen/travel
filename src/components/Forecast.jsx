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
        slidesToShow={3}
        center
        centerPadding={30}
        breakpoints={[
          {
            size: 200,
            settings: {
              slidesToShow: 1,
              showArrows: false,
              showIndicator: false,
              swipeable: true,
            },
          },
          {
            size: 600,
            settings: {
              slidesToShow: 3,
              showArrows: false,
              showIndicator: true,
              swipeable: true,
            },
          },
          {
            size: 1000,
            settings: {
              slidesToShow: 4,
              showArrows: true,
              showIndicator: true,
              center: true,
              swipeable: true,
            },
          },
        ]}
      >

        {forecast.weather.map((weather) => (
          <ForecastCard weather={weather} key={weather.date} />
        ))}
      </Carousel>
    </RowSegment>
  );
}

export default Forecast;
