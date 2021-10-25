class Thermostat {
  constructor() {
    this.current_temperature = 20;
  }

  getCurrentTemperature() {
    return this.current_temperature;
  }
}

module.exports = Thermostat;
