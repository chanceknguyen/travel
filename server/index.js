const express = require('express');
const axios = require('axios');
require('dotenv').config();
const utilFunctions = require ('./utilFunctions.js');

const weatherAPI = process.env.WEATHER_API_KEY;
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('./dist'));

app.get('/api/:location', (req, res) => {
  const location = req.params.location;
  let data = {};
  axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${weatherAPI}&q=${location}&days=3`)
    .then((response) => {
      data.weather = utilFunctions.parseForecast(response);
      res.send(data);
    })
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
