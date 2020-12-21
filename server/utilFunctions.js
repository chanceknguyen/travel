const axios = require('axios');
require('dotenv').config();

const weatherAPI = process.env.WEATHER_API_KEY;
const predicthqAPI = process.env.PREDICTHQ_API_KEY;
const yelpAPI = process.env.YELP_API_KEY;

module.exports = {

  parseForecast: (location) => new Promise((resolve, reject) => {
    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${weatherAPI}&q=${location}&days=3`)
      .then((response) => {
        const weather = {};
        weather.location = response.data.location;
        const forecast = response.data.forecast.forecastday;
        weather.firstDay = {
          date: forecast[0].date,
          mintemp_f: forecast[0].day.mintemp_f,
          maxtemp_f: forecast[0].day.maxtemp_f,
          avgtemp_f: forecast[0].day.avgtemp_f,
          condition: {
            text: forecast[0].day.condition.text,
            icon: forecast[0].day.condition.icon.substring(2),
          },
        };
        weather.secondDay = {
          date: forecast[1].date,
          mintemp_f: forecast[1].day.mintemp_f,
          maxtemp_f: forecast[1].day.maxtemp_f,
          avgtemp_f: forecast[1].day.avgtemp_f,
          condition: {
            text: forecast[1].day.condition.text,
            icon: forecast[1].day.condition.icon.substring(2),
          },
        };
        weather.thirdDay = {
          date: forecast[2].date,
          mintemp_f: forecast[2].day.mintemp_f,
          maxtemp_f: forecast[2].day.maxtemp_f,
          avgtemp_f: forecast[2].day.avgtemp_f,
          condition: {
            text: forecast[2].day.condition.text,
            icon: forecast[2].day.condition.icon.substring(2),
          },
        };
        resolve(weather);
      })
      .catch((err) => reject(err));
  }),

  fetchLocalEvents: (data) => new Promise((resolve, reject) => {
    const { location } = data.forecast;
    const firstDay = data.forecast.firstDay.date;
    const lastDay = data.forecast.thirdDay.date;
    const config = {
      method: 'get',
      url: `https://api.predicthq.com/v1/events?active.gte=${firstDay}&active.lte=${lastDay}&brand_unsafe.exclude=true&category=conferences%2Cexpos%2Cconcerts%2Cfestivals%2Cperforming-arts%2Csports%2Ccommunity&limit=10&location_around.origin=${location.lat}%2C${location.lon}`,
      headers: {
        Authorization: `Bearer ${predicthqAPI}`,
      },
    };
    axios(config)
      .then((localEvents) => resolve(localEvents.data))
      .catch((err) => reject(err));
  }),

  fetchLocalRestaurants: (latitude, longitude) => new Promise((resolve, reject) => {
    const config = {
      method: 'get',
      url: `https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=${latitude}&longitude=${longitude}&limit=10`,
      headers: {
        Authorization: `Bearer ${yelpAPI}`,
      },
    };
    axios(config)
      .then((restaurants) => resolve(restaurants.data))
      .catch((err) => reject(err));
  }),

};
