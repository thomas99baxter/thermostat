const getWeatherData = (city) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d9ccb7402db5d4927e16e235bb260207`
  );
};
