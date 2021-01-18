/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import EventModal from './EventModal';
import { Card } from '../styles';

function EventCard({ event }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card>
      <div>{event.title}</div>
      <div>{event.category}</div>
      <div>{event.entities[0] !== undefined ? event.entities[0].formatted_address : ''}</div>
      <div>{format(parseISO(event.start), "PPpp")}</div>
      <button type="button" onClick={() => setIsOpen(true)}>Open Modal</button>
      <EventModal open={isOpen} event={event} closeModal={() => setIsOpen(false)} />
    </Card>
  );
}

export default EventCard;
