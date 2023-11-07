const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=72e074a854803212e915b5e5f1ff6c6f&query=drobak";

const positionUrl =
  "http://api.positionstack.com/v1/forward?access_key=8daf5c09a894fa719f72506319b12799&query=dr%C3%B8bak";

request({ url: url, json: true }, (error, response) => {
  const data = response.body;
  console.log(data);

  /* console.log("Sted: " + data.location.name);
  console.log("Temperatur: " + data.current.temperature + " grader");
  console.log("Føles som: " + data.current.feelslike + " grader"); */

  /*  console.log(
    "In " + data.location.name,
    " the weather is " +
      data.current.weather_descriptions[0] +
      ". And the temperature are  " +
      data.current.temperature +
      " but it feels like " +
      data.current.feelslike +
      " grader"
  ); */
  /*   console.log(currentData.current.temperature); */
  /* console.log(currentData.current.weather_code); */
});

request({ url: positionUrl, json: true }, (error, response) => {
  const data = response;

  console.log("geo : ", data.body);
});
