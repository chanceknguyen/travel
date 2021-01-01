const express = require('express');
const asyncHandler = require('express-async-handler');
require('dotenv').config();
const utilFunctions = require('./utilFunctions.js');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('./dist'));

app.get('/local/*', (req, res) => {
  res.sendFile('index.html', { root: `${__dirname}/../dist` });
});

app.get('/api/:location', asyncHandler(async (req, res) => {
  const { location } = req.params;
  const data = {};
  const forecast = await utilFunctions.parseForecast(location);
  data.forecast = forecast;
  const [localEvents, localRestaurants] = await Promise.all(
    [
      utilFunctions.parseForecast(location),
      utilFunctions.fetchLocalRestaurants(forecast.location.lat, forecast.location.lon),
    ],
  );
  data.events = localEvents;
  data.restaurants = localRestaurants;
  res.send(data);
}));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running on port ${PORT}`);
});
