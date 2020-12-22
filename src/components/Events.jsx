/* eslint-disable react/prop-types */
import React from 'react';

function Events({ events }) {
  return (
    <div>
      <h3>{events.results[0].title}</h3>
    </div>
  );
}

export default Events;
