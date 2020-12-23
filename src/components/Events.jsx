/* eslint-disable react/prop-types */
import React from 'react';
import { RowSegment } from '../styles';
import EventCard from './EventCard';

function Events({ events }) {
  if (events.length > 0) {
    return (
      <RowSegment>
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </RowSegment>
    );
  }
  return (
    <RowSegment>
      <div>Local events could not be located at this time.</div>
    </RowSegment>
  );
}

export default Events;
