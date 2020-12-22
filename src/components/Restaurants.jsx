/* eslint-disable react/prop-types */
import React from 'react';
import { RowSegment } from '../styles';
import RestaurantCard from './RestaurantCard';

function Restaurants({ restaurants }) {
  return (
    <RowSegment>
      {restaurants.map((restaurant) => (
        <RestaurantCard restaurant={restaurant} />
      ))}
    </RowSegment>
  );
}

export default Restaurants;
