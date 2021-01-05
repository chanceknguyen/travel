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
          // center
          showArrows
          // showIndicator
          swipeable
          slidesToShow={5}
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
