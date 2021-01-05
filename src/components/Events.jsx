/* eslint-disable react/prop-types */
import React from 'react';
import Carousel from 'styled-components-carousel';
import { RowSegment } from '../styles';
import EventCard from './EventCard';

function Events({ events }) {
  if (events.length > 0) {
    return (
      <RowSegment>
        <Carousel
          // center
          showArrows
          // showIndicator
          swipeable
          slidesToShow={5}
        >

          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </Carousel>
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
