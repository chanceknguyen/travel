/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from 'react-loading-animation';
import Navbar from './components/Navbar';
import Forecast from './components/Forecast';
import Restaurants from './components/Restaurants';
import Events from './components/Events';
import { AppContainer } from './styles';

function App() {
  const { location } = useParams();
  const [currentLocation, setCurrentLocation] = useState();
  const [forecast, setForecast] = useState();
  const [events, setEvents] = useState();
  const [restaurants, setRestaurants] = useState();

  const getLocalInfo = (local) => {
    setCurrentLocation(null);
    axios.get(`/api/${local}`)
      .then((response) => {
        setForecast(response.data.forecast);
        setEvents(response.data.events.results);
        setRestaurants(response.data.restaurants.businesses);
        setCurrentLocation(response.data.forecast.location.name);
      });
  };

  useEffect(() => {
    getLocalInfo(location);
  }, []);

  if (currentLocation) {
    return (
      <AppContainer>
        <Navbar getLocalInfo={getLocalInfo} />
        <h1>Welcome to {currentLocation}</h1>
        <Forecast forecast={forecast} />
        <Restaurants restaurants={restaurants} />
        <Events events={events} />
      </AppContainer>
    );
  }
  return (
    <AppContainer>
      <h1>Pulling information for {location}</h1>
      <Loading />
    </AppContainer>
  );
}

export default App;
