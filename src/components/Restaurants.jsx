/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'styled-components-carousel';
import { RowSegment } from '../styles';
import RestaurantCard from './RestaurantCard';

function Restaurants({ restaurants }) {
  if (restaurants.length > 0) {
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

          {restaurants.map((restaurant) => (
            <RestaurantCard restaurant={restaurant} key={restaurant.id} />
          ))}
        </Carousel>
      </RowSegment>
    );
  }
  return (
    <RowSegment>
      <div>Local restaurants could not be located at this time.</div>
    </RowSegment>
  );
}

export default Restaurants;
