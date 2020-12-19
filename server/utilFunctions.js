module.exports = {

  parseForecast: (response) => {
    let weather = {};
    const forecast = response.data.forecast.forecastday;
    weather.firstDay = {
      date: forecast[0].date,
      mintemp_f: forecast[0].day.mintemp_f,
      maxtemp_f: forecast[0].day.maxtemp_f,
      avgtemp_f: forecast[0].day.avgtemp_f,
      condition: {
        text: forecast[0].day.condition.text,
        icon: forecast[0].day.condition.icon.substring(2)
      }
    };
    weather.secondDay = {
      date: forecast[1].date,
      mintemp_f: forecast[1].day.mintemp_f,
      maxtemp_f: forecast[1].day.maxtemp_f,
      avgtemp_f: forecast[1].day.avgtemp_f,
      condition: {
        text: forecast[1].day.condition.text,
        icon: forecast[1].day.condition.icon.substring(2)
      }
    };
    weather.thirdDay = {
      date: forecast[2].date,
      mintemp_f: forecast[2].day.mintemp_f,
      maxtemp_f: forecast[2].day.maxtemp_f,
      avgtemp_f: forecast[2].day.avgtemp_f,
      condition: {
        text: forecast[2].day.condition.text,
        icon: forecast[2].day.condition.icon.substring(2)
      }
    };
   return weather;
  }

}


