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
          slidesToShow={3}
          center
          centerPadding={30}
          breakpoints={[
            {
              size: 200,
              settings: {
                slidesToShow: 1,
                showArrows: false,
                showIndicator: true,
                swipeable: true,
              },
            },
            {
              size: 600,
              settings: {
                slidesToShow: 3,
                showArrows: false,
                showIndicator: true,
                swipeable: true,
              },
            },
            {
              size: 1000,
              settings: {
                slidesToShow: 4,
                showArrows: true,
                showIndicator: true,
                center: true,
                swipeable: true,
              },
            },
          ]}
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
