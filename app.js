const yargs = require('yargs');
const geocode = require('./geocode');
const weather = require('./getWeather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help().argv;

geocode.getGeoCode(argv.a, (errorMessage, results) => {
  if (errorMessage) {
    console.log(`Error: ${errorMessage}`);
  } else {
    //console.log(JSON.stringify(results, undefined, 2));
    weather.getWeather(results, (errorMessage, results) => {
      if (errorMessage) {
        console.log(`Unable to fetch Weather Report, Error: ${errorMessage}`);
      } else {
        console.log(results);
      }
    });
  }
});
