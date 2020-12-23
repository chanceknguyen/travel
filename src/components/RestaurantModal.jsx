import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { ModalStyles, OverlayStyles } from '../styles';

function RestaurantModal({ open, restaurant, closeModal }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <OverlayStyles />
      <ModalStyles>
        <div>
          {restaurant.name}
        </div>
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
