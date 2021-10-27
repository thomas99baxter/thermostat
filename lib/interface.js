document.addEventListener("DOMContentLoaded", (event) => {
  const myThermostat = new Thermostat();

  const updateWeather = (city) => {
    getWeatherData(city).then((response) => {
      response.json().then((json) => {
        temperature = json.main.temp - (273.15).toFixed(1);
        document.getElementById("weather").innerHTML = temperature + "&#176;c";
        console.log("test");
        console.log(temperature.toString() + "%");
        document.getElementById("thermostat-bar").style.height =
          temperature.toString() + "%";
      });
    });
  };

  document.getElementById("current-temperature").innerHTML =
    myThermostat.getCurrentTemperature();
  document.getElementById("power-saving-mode-status").innerHTML =
    myThermostat.getPowerSavingModeStatus() ? "on" : "off";

  const increaseButton = document.getElementById("increase-temperature");
  const decreaseButton = document.getElementById("decrease-temperature");
  const powerSaveToggleButton = document.getElementById("power-saving-toggle");
  const citySelectButton = document.getElementById("city-select-button");

  let selectedCity;

  citySelectButton.addEventListener("click", () => {
    selectedCity = document.getElementById("city-selector").value;
    document.getElementById(
      "city-name"
    ).innerHTML = `Current Temperature in ${selectedCity}:`;
    updateWeather(selectedCity);
  });

  increaseButton.addEventListener("click", () => {
    myThermostat.up();
    document.getElementById("current-temperature").innerHTML =
      myThermostat.getCurrentTemperature();
  });
  decreaseButton.addEventListener("click", () => {
    myThermostat.down();
    document.getElementById("current-temperature").innerHTML =
      myThermostat.getCurrentTemperature();
  });
  powerSaveToggleButton.addEventListener("click", () => {
    myThermostat.togglePowerSavingMode();
    document.getElementById("power-saving-mode-status").innerHTML =
      myThermostat.getPowerSavingModeStatus() ? "on" : "off";
  });
});
