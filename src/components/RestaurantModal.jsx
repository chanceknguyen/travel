/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Stars from 'simple-rating-stars';
import { ModalStyles, OverlayStyles } from '../styles';

function RestaurantModal({
  open, restaurant, closeModal, tags,
}) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <OverlayStyles />
      <ModalStyles>
        <div>{restaurant.name}</div>
        <img className="image" src={restaurant.image_url} alt={restaurant.name} height="500px" />
        <Stars
          stars={Math.round(restaurant.rating)}
          outOf={5}
          full="#d00"
          empty="#E1F1FF"
          stroke="#369"
        />
        <div>Review Count: {restaurant.review_count}</div>
        <div>Price: {restaurant.price}</div>
        <div>Categories: {tags}</div>
        <div>{restaurant.location.display_address.join(', ')}</div>
        <div>{restaurant.display_phone}</div>
        <a href={restaurant.url} target="_blank" rel="noreferrer">Yelp Link</a>
        <button type="button" onClick={() => closeModal()}>Close Modal</button>
      </ModalStyles>
    </>,
    document.getElementById('portal'),
  );
}

RestaurantModal.propTypes = {
  open: PropTypes.bool.isRequired,
  restaurant: PropTypes.oneOfType([PropTypes.object]).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default RestaurantModal;
