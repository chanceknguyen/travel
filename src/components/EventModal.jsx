/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ModalStyles, OverlayStyles } from '../styles';

function EventModal({
  open, event, closeModal,
}) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <OverlayStyles />
      <ModalStyles>
        <div>{event.title}</div>
        <div>Category: {event.category}</div>
        <br />
        <div>{(event.description !== '' ? `Description: ${event.description}` : '')}</div>
        <br />
        <div>{event.entities[0] !== undefined ? event.entities[0].formatted_address : ''}</div>
        <button type="button" onClick={() => closeModal()}>Close Modal</button>
      </ModalStyles>
    </>,
    document.getElementById('portal'),
  );
}

EventModal.propTypes = {
  open: PropTypes.bool.isRequired,
  event: PropTypes.oneOfType([PropTypes.object]).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default EventModal;
