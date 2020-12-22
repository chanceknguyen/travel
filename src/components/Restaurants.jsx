/* eslint-disable react/prop-types */
import React from 'react';
import { RowSegment } from '../styles';
import RestaurantCard from './RestaurantCard';

function Restaurants({ restaurants }) {
  if (restaurants.length > 0) {
    return (
      <RowSegment>
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
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
