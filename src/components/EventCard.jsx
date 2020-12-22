/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from '../styles';

function EventCard({ event }) {
  return (
    <Card>
      <div>{event.title}</div>
      <div>{event.category}</div>
      <div>{event.entities[0] !== undefined ? event.entities[0].formatted_address : ''}</div>
      <div>{event.start}</div>
      <div>{event.end}</div>
    </Card>
  );
}

export default EventCard;
