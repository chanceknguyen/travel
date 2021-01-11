/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import Stars from 'simple-rating-stars';
import RestaurantModal from './RestaurantModal';
import { Card } from '../styles';
import { makeTags } from '../helperFunctions';

function RestaurantCard({ restaurant }) {
  const tags = makeTags(restaurant.categories);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card>
      <div className="restaurantText">Name: {restaurant.name}</div>
      <Stars
        stars={Math.round(restaurant.rating)}
        outOf={5}
        full="#d00"
        empty="#E1F1FF"
        stroke="#369"
      />
      <div className="restaurantText">Reviews: {restaurant.review_count}</div>
      <div className="restaurantText">Categories: {tags}</div>
      <button type="button" onClick={() => setIsOpen(true)}>Open Modal</button>
      <RestaurantModal open={isOpen} restaurant={restaurant} tags={tags} closeModal={() => setIsOpen(false)} />
    </Card>
  );
}

export default RestaurantCard;
