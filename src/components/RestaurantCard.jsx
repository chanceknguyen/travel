/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Stars from 'simple-rating-stars';
import { Card } from '../styles';

function RestaurantCard({ restaurant }) {
  const tags = restaurant.categories.map((tag) => tag.title);
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
      <div className="restaurantText">Categories: {tags.join(', ')}</div>
      <img src={restaurant.image_url} height="64" alt="restaurant" />
    </Card>
  );
}

export default RestaurantCard;
