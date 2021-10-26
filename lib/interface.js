document.addEventListener('DOMContentLoaded', (event) => {
  const myThermostat = new Thermostat();

  document.getElementById('current-temperature').innerHTML = myThermostat.getCurrentTemperature();
  document.getElementById('power-saving-mode-status').innerHTML = myThermostat.getPowerSavingModeStatus() ? "on" : "off"; 

  const increaseButton = document.getElementById('increase-temperature');
  const decreaseButton = document.getElementById('decrease-temperature');
  const powerSaveToggleButton = document.getElementById('power-saving-toggle');

  increaseButton.addEventListener("click", () => {
    myThermostat.up();
    document.getElementById('current-temperature').innerHTML = myThermostat.getCurrentTemperature();
  });
  decreaseButton.addEventListener("click", () => {
    myThermostat.down();
    document.getElementById('current-temperature').innerHTML = myThermostat.getCurrentTemperature();
  });
  powerSaveToggleButton.addEventListener("click", () => {
    myThermostat.togglePowerSavingMode()
    document.getElementById('power-saving-mode-status').innerHTML = myThermostat.getPowerSavingModeStatus() ? "on" : "off";
  });
});