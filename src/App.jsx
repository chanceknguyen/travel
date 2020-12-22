/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from 'react-loading-animation';
import Forecast from './components/Forecast';
import Restaurants from './components/Restaurants';
import Events from './components/Events';

function App() {
  const { location } = useParams();
  const [currentLocation, setCurrentLocation] = useState();
  const [forecast, setForecast] = useState();
  const [events, setEvents] = useState();
  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    axios.get(`/api/${location}`)
      .then((response) => {
        setForecast(response.data.forecast);
        setEvents(response.data.events);
        setRestaurants(response.data.restaurants);
        setCurrentLocation(response.data.forecast.location.name);
      });
  }, []);

  if (currentLocation) {
    return (
      <div>
        <h1>Welcome to {currentLocation}</h1>
        <Forecast forecast={forecast} />
        <Restaurants restaurants={restaurants} />
        <Events events={events} />
      </div>
    );
  }
  return (
    <div>
      <h1>Pulling information for {location}</h1>
      <Loading />
    </div>
  );
}

export default App;
