const request = require('request');

const getWeather = (results, callback) => {
  const uri = `https://api.darksky.net/forecast/7905e031e4d912683c03ebb83a6cf30f/${results.lat},${results.lng}`;

  request(
    {
      url: uri,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback(`Error with Forecast.io Servres ${error}`);
      } else {
        callback(undefined, {
          Weather: body.currently.summary,
          temperature: body.currently.temperature
        });
      }
    }
  );
};
module.exports = { getWeather };
