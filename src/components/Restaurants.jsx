/* eslint-disable react/prop-types */
import React from 'react';

function Restaurants({ restaurants }) {
  return (
    <div>
      <h3>{restaurants.businesses[0].name}</h3>
    </div>
  );
}

export default Restaurants;
