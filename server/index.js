const express = require('express');
const axios = require('axios');
const asyncHandler = require('express-async-handler');
require('dotenv').config();
const utilFunctions = require ('./utilFunctions.js');

const weatherAPI = process.env.WEATHER_API_KEY;
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('./dist'));

app.get('/api/:location', asyncHandler(async (req, res) => {
  const location = req.params.location;
  let data = {};
  let forecast = await utilFunctions.parseForecast(location);
  data.forecast = forecast;
  let localEvents = await utilFunctions.fetchLocalEvents(data);
  let localRestaurants = await utilFunctions.fetchLocalRestaurants(forecast.location.lat, forecast.location.lon)
  data.events = localEvents;
  data.restaurants = localRestaurants;
  res.send(data);
}));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
