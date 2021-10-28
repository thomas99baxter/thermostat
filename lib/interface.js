document.addEventListener("DOMContentLoaded", (event) => {
  const myThermostat = new Thermostat();

  const changeThermometerHeight = () => {
    document.getElementById("thermostat-bar").style.height =
      myThermostat.getCurrentTemperature().toString() + "%";
  };
  changeThermometerHeight();

  const updateWeather = (city) => {
    getWeatherData(city).then((response) => {
      response.json().then((json) => {
        temperature = json.main.temp - (273.15).toFixed(1);
        document.getElementById("weather").innerHTML = temperature + "&#176;c";
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

  postTemperature = () => {
    fetch(`http://localhost:9292/temperature?temperature=${myThermostat.getCurrentTemperature()}`, 
      {
        method: 'POST',
      }
    )
    .then(response => console.log(response.status))
  }

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
    changeThermometerHeight();
    postTemperature();
  });
  decreaseButton.addEventListener("click", () => {
    myThermostat.down();
    document.getElementById("current-temperature").innerHTML =
      myThermostat.getCurrentTemperature();
    changeThermometerHeight();
    postTemperature();
  });
  powerSaveToggleButton.addEventListener("click", () => {
    myThermostat.togglePowerSavingMode();
    document.getElementById("power-saving-mode-status").innerHTML =
      myThermostat.getPowerSavingModeStatus() ? "on" : "off";
  });
  // Add method to request temperature data on page load
  fetch('http://localhost:9292/temperature')
  .then(response => response.json())
  .then((data) => {
    // document.getElementById("current-temperature").innerHTML = data.temperature;
    myThermostat.setCurrentTemperature(parseInt(data.temperature))
    document.getElementById("current-temperature").innerHTML = myThermostat.getCurrentTemperature();
    changeThermometerHeight();
  }
  );
  
  // Add method to post new temperature after each change in temp
});

